import {applyMiddleware, configureStore} from '@reduxjs/toolkit'
import { thunk } from 'redux-thunk'

export const store = configureStore({
    reducer: {
        navUsers: userSlice,
    }
}, applyMiddleware(thunk))