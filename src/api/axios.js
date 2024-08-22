import axios from 'axios'
import AsyncStorage from '@react-native-async-storage/async-storage';
import {authentication} from '../api/index'
import { useNavigation } from '@react-navigation/native';

const apiUrl = "https://emergencies.byteobe.com:8000"

const axiosInstance = axios.create({
  baseURL: apiUrl,
  timeout: 10000,
})

const access = async () =>{
  const token = await AsyncStorage.getItem('userToken');
  return(token);
}

const refreshToken = async () =>{
  const refresh = await AsyncStorage.getItem('refreshToken');
  return(refresh);
}
console.log(refreshToken(),access())
//const navigation = useNavigation();

axiosInstance.interceptors.request.use(
 async (config) => {
    const authStore = await access()
    
    if (authStore) {
      config.headers.Authorization = `Bearer ${authStore}`;
    }
  
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

axiosInstance.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;
    // Si el error es 401 y no hemos intentado refrescar el token
    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      try {
        const refreshTokenValue = await refreshToken();
        if (!refreshTokenValue) {
          throw new Error('No refresh token available');
        }

        const tokenRefreshs = { refresh: refreshTokenValue };
        const { data } = await authentication.mainUsersRefreshCreate({tokenRefresh:tokenRefreshs});

        if (!data || !data.access) {
          throw new Error('Invalid response from refresh token endpoint');
        }

        await AsyncStorage.setItem('userToken', data.access);
        if (data.refresh) {
          await AsyncStorage.setItem('refreshToken', data.refresh);
        }

        axiosInstance.defaults.headers.common['Authorization'] = `Bearer ${data.access}`;
        originalRequest.headers['Authorization'] = `Bearer ${data.access}`;
        
        return axiosInstance(originalRequest);
      } catch (refreshError) {
        console.error('Error refreshing token:', refreshError);
        await AsyncStorage.removeItem('userToken');
        await AsyncStorage.removeItem('refreshToken');
        
        // Emitir un evento para manejar el logout en un componente React
        // Por ejemplo: EventEmitter.emit('LOGOUT_REQUIRED');
        
        return Promise.reject(refreshError);
      }
    }
    return Promise.reject(error);
  }
);

export default axiosInstance