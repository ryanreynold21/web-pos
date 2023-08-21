import { configureStore } from "@reduxjs/toolkit";
import { authApi } from "../services/authApi";
import authSlice from "../services/authSlice";
import { mediaApi } from "../services/mediaApi";

export const store = configureStore({
    reducer: {
        [authApi.reducerPath]: authApi.reducer,
        [mediaApi.reducerPath]: mediaApi.reducer,
        auth: authSlice
    },

    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(
            authApi.middleware,
            mediaApi.middleware
        )
});
