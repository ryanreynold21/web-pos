import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const authApi = createApi({
    reducerPath : 'authapi',
    baseQuery : fetchBaseQuery({ baseUrl : 'https://f.mmsdev.site/api/v1/'}),
    endpoints : (build) => ({
        login : build.mutation({
            query : (user) => ({
                url : 'login',
                method : 'POST',
                body : user
            }),
            invalidatesTags : ['authapi']
        }),
        logout : build.mutation({
            query : (token) => ({
                url : 'logout',
                method : 'POST',
                body : token,
                headers : {authorization:`Bearer ${token}`}
            }),
            invalidatesTags : ['authapi']
        }),
        getPhoto : build.query({
            query : (token) => ({
                url : 'photo',
                headers:{authorization:`Bearer ${token}`}
            }),
            providesTags : ['authapi']
        }),
        storePhoto : build.mutation({
            query : ({photos,token}) => ({
                url : 'photo',
                method : 'POST',
                body : photos,
                headers:{authorization:`Bearer ${token}`}
            }),
            invalidatesTags : ['authapi']
        }),
        createUser : build.mutation({
            query : ({userData,token}) => ({
                url : 'user/register',
                method : 'POST',
                body : userData,
                headers:{authorization:`Bearer ${token}`}
            }),
            invalidatesTags : ['authapi']
        }),
        getUser : build.query({
            query : ({token}) => ({
                url : 'user',
                headers:{authorization:`Bearer ${token}`}
            }),
            providesTags : ['authapi']
        }),
        getProduct : build.query({
            query : (token) => ({
                url : 'product',
                headers:{authorization:`Bearer ${token}`}
            }),
            providesTags : ['authapi']
        }),
        storeProduct : build.mutation({
            query : (productData,token) => ({
                url : 'product',
                method : "POST",
                body : productData,
                headers:{authorization:`Bearer ${token}`}
            }),
            providesTags : ['authapi']
        }),
        getBrand : build.query({
            query : (token) => ({
                url : 'brand',
                headers:{authorization:`Bearer ${token}`}
            }),
            providesTags : ['authapi']
        }),
        storeBrand : build.mutation({
            query : ({brandData,token}) => ({
                url : 'brand',
                method : "POST",
                body : brandData,
                headers:{authorization:`Bearer ${token}`}
            }),
            providesTags : ['authapi']
        }),
    }),
})

export const {useLoginMutation,
    useLogoutMutation,
    useGetPhotoQuery,
    useStorePhotoMutation,
    useGetProductQuery,
    useCreateUserMutation,
    useStoreProductMutation,
    useGetUserQuery,
    useGetBrandQuery,
    useStoreBrandMutation
            } = authApi;