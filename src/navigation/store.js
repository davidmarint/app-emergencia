<<<<<<< HEAD
import { configureStore} from '@reduxjs/toolkit'
import { userSlice } from '../slices'
=======
import {applyMiddleware, configureStore} from '@reduxjs/toolkit'
import { thunk } from 'redux-thunk'
>>>>>>> cafa3931626b3603a2dc56c924c253ffa47985b3

export const store = configureStore({
    reducer: {
        navUsers: userSlice,
<<<<<<< HEAD
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false,
    })
});
=======
    }
}, applyMiddleware(thunk))
>>>>>>> cafa3931626b3603a2dc56c924c253ffa47985b3
