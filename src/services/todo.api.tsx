// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { IData } from './todo.types'

export const todoApi = createApi({
  reducerPath: 'users',

  baseQuery: fetchBaseQuery({
    baseUrl: 'https://6994554ffade7a9ec0f50ffa.mockapi.io/TablePtoject2/',
  }),

  tagTypes: ['Todo'],

  endpoints: (builder) => ({
    getTodo: builder.query<IData, null>({
      query: (name) => ``,
    }),

    addTodo: builder.mutation({
      query: (newUser) => ({
        url: '',
        method: 'POST',
        body: newUser,
      }),

      invalidatesTags: ['Todo'],
    }),

    deleteTodo: builder.mutation({
      query: (id) => ({
        url: `/${id}`,
        method: 'DELETE',
      }),

      invalidatesTags: ['Todo'],
    }),

    editTodo: builder.mutation({
      query: (user) => ({
        url: `/${user.id}`,
        method: 'PUT',
        body: user,
      }),

      invalidatesTags: ['Todo'],
    }),

    checkTodo: builder.mutation({
      query: (user) => ({
        url: `/${user.id}`,
        method: 'PUT',

        body: {
          ...user,
          status: !user.status,
        },
      }),

      invalidatesTags: ['Todo'],
    }),
  }),
})

export const {
  useGetTodoQuery,
  useAddTodoMutation,
  useDeleteTodoMutation,
  useEditTodoMutation,
  useCheckTodoMutation,
} = todoApi