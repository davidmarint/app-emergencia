import { configureStore} from '@reduxjs/toolkit'
import { userSlice } from '../slices'

export const store = configureStore({
    reducer: {
        navUsers: userSlice,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false,
    })
});