import { configureStore} from '@reduxjs/toolkit'
import { userSlice } from '../slices'
import alertReducer from '../slices/ubiSlice';

export const store = configureStore({
    reducer: {
        navUsers: userSlice,
        alert: alertReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false,
    })
});
