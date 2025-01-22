import { Users } from '@/types'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const userInformations = createApi({
  reducerPath: 'userInformations',
  baseQuery: fetchBaseQuery({}),
  tagTypes: ['Users'],
  endpoints: (builder) => ({
    getUsers: builder.query<Users[], void>({
      query: () => `/api/users`,
      providesTags: ['Users'],
    }),
    addUser: builder.mutation({
      query: (createUser) => ({
        url: '/api/users',
        method: 'POST',
        body: createUser,
      }),
      invalidatesTags: ['Users'],
    }),
  }),
})

export const { useGetUsersQuery, useAddUserMutation } = userInformations
