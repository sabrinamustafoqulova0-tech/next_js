import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { IData } from './todo.type'

export const todoApi = createApi({
  reducerPath: 'todoApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://6994554ffade7a9ec0f50ffa.mockapi.io/TablePtoject2' }),
  tagTypes: ['Todo'],
  endpoints: (builder) => ({
    gettodoByName: builder.query<IData, null>({
      query: (name) => ``,
      providesTags:["Todo"]
    }),

    
    deleteTodo: builder.mutation({
      query: (id) => ({
        url: `/${id}`,
        method: 'DELETE',
      }),

      invalidatesTags: ['Todo'],
    }),

    addTodo: builder.mutation({
      query: (newobj) => ({
        url: ``,
        body:newobj,
        method: 'Post',
      }),

      invalidatesTags: ['Todo'],
    }),

  }),
})

export const { useGettodoByNameQuery,useDeleteTodoMutation, useAddTodoMutation } = todoApi