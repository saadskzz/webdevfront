import {createApi,fetchBaseQuery} from '@reduxjs/toolkit/query/react'
export const authApi=createApi({
    
    reducerPath:'authApi',
    baseQuery:fetchBaseQuery({baseUrl:'http://localhost:5000/auth',
             prepareHeaders: async (headers) => {
            const token = localStorage.getItem("token");
            if (token) {
                headers.set('Authorization', `Bearer ${token}`);
            }
            return headers;
        }
    }),
    
     tagTypes: ['users'],
    endpoints:(builder)=>({
        signup: builder.mutation({
            query: (cred)=>({
                 url: `/signup`,
        method: 'POST',
        body: cred,
            }),
            invalidatesTags:['users'],
        }),
            login: builder.mutation({
            query: (cred)=>({
                 url: `/login`,
        method: 'POST',
        body: cred,
            }),
            invalidatesTags:['users'],
        }),
        
    })
})
export const {useSignupMutation,useLoginMutation} = authApi