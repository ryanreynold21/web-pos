import { configureStore } from "@reduxjs/toolkit";
import { AuthApi } from "../features/AuthApi";

export const store = configureStore({
    reducer : {
        [AuthApi.reducerPath]: AuthApi.reducer,
        // [authApi.reducerPath]: authApi.reducer,
    },


    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(AuthApi.middleware),
    
})