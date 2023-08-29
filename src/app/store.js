import { configureStore } from "@reduxjs/toolkit";
import { authApi } from "../services/authApi";
import authSlice from "../services/authSlice";
import { mediaApi } from "../services/mediaApi";
import mediaSlice from "../services/mediaSlice";

export const store = configureStore({
    reducer: {
        [authApi.reducerPath]: authApi.reducer,
        [mediaApi.reducerPath]: mediaApi.reducer,
        auth: authSlice,
        media : mediaSlice
    },

    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(
            authApi.middleware,
            mediaApi.middleware
        )
});
