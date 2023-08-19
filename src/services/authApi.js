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
            })
        })
    })
})

export const {useLoginMutation} = authApi;