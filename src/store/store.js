import { configureStore } from '@reduxjs/toolkit'
import {authApi} from '../services/auth/authSlice'
import authenticationReducer from '../Slices/authenticatonslice'
export const store = configureStore({
reducer: {authentication:authenticationReducer,[authApi.reducerPath]:authApi.reducer},
   middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(authApi.middleware),   
})