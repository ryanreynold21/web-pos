import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const AuthApi = createApi({
  reducerPath: "auth",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://contact-app.mmsdev.site/api/v1",
  }),
  tagTypes: ["auth"],
  endpoints: (builder) => ({
    // login
    userLogin: builder.mutation({
      query: (user) => ({
        url: "/login",
        method: "POST",
        body: user,
      }),
      invalidatesTags: ["auth"],
    }),
    //   userLogout
    userLogout: builder.mutation({
      query: ( token ) => ({
        url: "/login",
        method: "POST",
        headers: { authorization: ` Bearer ${token}` },
      }),
      invalidatesTags: ["auth"],
    }),
  }),
});

// eslint-disable-next-line react-refresh/only-export-components
export const {useUserLoginMutation, useUserLogoutMutation} = AuthApi