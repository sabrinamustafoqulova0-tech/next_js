// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Define a service using a base URL and expected endpoints
export const pokemonApi = createApi({
  reducerPath: 'pokemonApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://6994554ffade7a9ec0f50ffa.mockapi.io/TablePtoject2' }),
  endpoints: (builder) => ({
    getTodo: builder.query<IStudenr[], null>({
      query: () => ``,
    }),
  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetTodoQuery } = pokemonApi