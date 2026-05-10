import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { IData } from './todo.type'

export const todoApi = createApi({
  reducerPath: 'pokemonApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://6994554ffade7a9ec0f50ffa.mockapi.io/TablePtoject2' }),
  endpoints: (builder) => ({
    getTodo: builder.query<IData, null>({
      query: (name) => ``,

    }),
  }),
})

export const { useGetTodoQuery } = todoApi