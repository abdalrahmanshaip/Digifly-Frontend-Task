import { Users } from '@/types'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const userInformations = createApi({
  reducerPath: 'userInformations',
  baseQuery: fetchBaseQuery({ baseUrl: process.env.NEXT_PUBLIC_API_BASE_URL }),
  tagTypes: ['Users'],
  endpoints: (builder) => ({
    getUsers: builder.query<Users[], void>({
      query: () => `/user-informations`,
      providesTags: ['Users'],
    }),
    addUser: builder.mutation({
      query: (createUser) => ({
        url: '/user-informations',
        method: 'POST',
        body: createUser,
      }),
      invalidatesTags: ['Users'],
    }),
  }),
})

export const { useGetUsersQuery, useAddUserMutation } = userInformations
