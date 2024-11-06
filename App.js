import React, { useEffect } from 'react';
import 'react-native-gesture-handler';
import Navigation from './src/navigation/Navigation';
import { Provider } from 'react-redux';
import {store} from './src/navigation/store'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { restoreToken } from './src/slices/userSlice'; 


function AppWrapper() {
  useEffect(() => {
    const bootstrapAsync = async () => {
      let userToken;
      try {
        userToken = await AsyncStorage.getItem('userToken');
      } catch (e) {
        // Restaurar token falló
        console.error('Error al restaurar el token:', e);
      }

      store.dispatch(restoreToken(userToken));
    };

    bootstrapAsync();
    
  }, []);

  return <Navigation/>;
}

export default function App() {
  return (
    <Provider store={store}>
      <AppWrapper/>
    </Provider>
    
  );
}