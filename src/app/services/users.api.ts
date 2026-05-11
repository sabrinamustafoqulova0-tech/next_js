import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const UserApi = createApi({
  reducerPath: "UserApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3001/data" }),
  tagTypes: ["Users"],
  endpoints: (builder) => ({
    getUsers: builder.query({
      query: (name) => ``,
      providesTags: ["Users"],
    }),

    deleteUsers: builder.mutation({
      query: (id) => ({
        url: `/${id}`,
        method: "DELETE",
      }),

      invalidatesTags: ["Users"],
    }),
    getInfo: builder.query({
      query: (id) => `/${id}`,
    }),


    

    addUser: builder.mutation({
      query: (newUser) => ({
        url: '',
        method: 'POST',
        body: newUser,
      }),

      invalidatesTags: ['Users'],
    }),


    editUser: builder.mutation({
      query: (user) => ({
        url: `/${user.id}`,
        method: 'PUT',
        body: user,
      }),
      invalidatesTags: ['Users'],
    }),

    checkUser: builder.mutation({
      query: (user) => ({
        url: `/${user.id}`,
        method: 'PUT',

        body: {
          ...user,
          status: !user.status,
        },
      }),

      invalidatesTags: ['Users'],
    }),
  }),
});

export const { useGetUsersQuery, useDeleteUsersMutation,useGetInfoQuery,useAddUserMutation, useEditUserMutation,useCheckUserMutation } = UserApi;
