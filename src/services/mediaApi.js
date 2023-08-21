import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const mediaApi = createApi({
    name: 'mediaApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://f.mmsdev.site/api/v1/' }),
    endpoints: (build) => ({
        getPhoto: build.query({
            query: ({ token }) => ({
                url: 'photos',
                headers: { authorization: `Bearer ${token}` }
            }),
            providesTags: ['mediaApi']
        }),
        storePhoto: build.mutation({
            query: ({ token, photos }) => ({
                url: 'photos',
                method: 'POST',
                body: photos,
                headers: { authorization: `Bearer ${token}` }
            }),
            invalidatesTags: ['mediaApi']
        }),
    }),
})

export const {} = mediaApi;
