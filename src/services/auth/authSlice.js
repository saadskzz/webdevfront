import {createApi,fetchBaseQuery} from '@reduxjs/toolkit/query/react'
export const authApi=createApi({
    reducerPath:'authApi',
    baseQuery:fetchBaseQuery({baseUrl:'http://localhost:5000/auth'}),
     tagTypes: ['users'],
    endpoints:(builder)=>({
        signup: builder.mutation({
            query: (cred)=>({
                 url: `/signup`,
        method: 'POST',
        body: cred,
            }),
            invalidatesTags:['users'],
        })
    })
})
export const {useSignupMutation} = authApi