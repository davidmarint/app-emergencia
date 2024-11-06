import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  selectedAlert: null,
  userLocation: null,
};

const alertSlice = createSlice({
  name: 'alert',
  initialState,
  reducers: {
    setAlertData: (state, action) => {
      state.selectedAlert = action.payload.selectedAlert;
      state.userLocation = action.payload.userLocation;
    },
    clearAlertData: (state) => {
      state.selectedAlert = null;
      state.userLocation = null;
    },
  },
});

export const { setAlertData, clearAlertData } = alertSlice.actions;
export default alertSlice.reducer;