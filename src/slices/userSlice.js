import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import {authentication} from '../api/index'
import AsyncStorage from '@react-native-async-storage/async-storage';

const initialState = {
  users: null,
  isAuthenticated: false,
  isLoading: false,
  access: null,
  isError: false,
  error: null,
};

const storeTokens = async (accessToken, refreshToken) => {
  try {
    await AsyncStorage.setItem('userToken', accessToken);
    await AsyncStorage.setItem('refreshToken', refreshToken);
  } catch (error) {
    console.error('Error al almacenar los tokens:', error);
  }
};


export const signIn = createAsyncThunk(
  'user/signIn',
  async (payload, thunkAPI) => {
    try {
      //const jsonData = JSON.stringify(payload)
      const response = await authentication.mainUsersLoginCreate({customTokenObtainPair: payload})
       if(response.status !== 200){
           return thunkAPI.rejectWithValue({error: 'Algo salio mal'})
       }
      //console.log(response.data);
      const { access, refresh } = response.data;
      await storeTokens(access, refresh);
      return response.data;
      
    } catch (error) {
      console.log(error)
      return thunkAPI.rejectWithValue({ error: error });
    }
  }
);

export const navSlice = createSlice({
  name: 'nav',
  initialState,
  reducers: {
    setUsers: (state, action) => {
      state.users = action.payload;
    },
    restoreToken: (state, action) => {
      state.access = action.payload;
      state.isAuthenticated = !!action.payload;
    },
    logout: (state) => {
      state.userData = null;
      state.isAuthenticated = false;
      state.access = null;
      AsyncStorage.removeItem('userToken');
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(signIn.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
        state.error = null;
      })
      .addCase(signIn.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isAuthenticated = true;
        state.users = action.payload.users;
        state.access = action.payload.access; 
      })
      .addCase(signIn.rejected, (state, action) => {
        state.isLoading = false;
        state.isAuthenticated = false;
        state.isError = true;
        state.error = action.payload;
      });
  },
});

export const { setUsers, restoreToken, logout } = navSlice.actions;

export const selectUsers = (state) => state.navUsers.users;

export default navSlice.reducer;