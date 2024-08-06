import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const bookApiSlice = createApi({
  reducerPath: 'bookApi',
  baseQuery: fetchBaseQuery({ baseUrl: '/api/books' }),
  endpoints: (builder) => ({
    createBook: builder.mutation({
      query: (data) => ({
        url: '/',
        method: 'POST',
        body: data,
      }),
    }),
    getBooks: builder.query({
      query: () => '/',
    }),
    getBook: builder.query({
      query: (id) => `/books/${id}`, // Adjust the endpoint according to your backend
    }),
    updateBook: builder.mutation({
      query: ({ id, data }) => ({
        url: `/${id}`,
        method: 'PUT',
        body: data,
      }),
    }),
    deleteBook: builder.mutation({
      query: (id) => ({
        url: `/${id}`,
        method: 'DELETE',
      }),
    }),
  }),
});

export const { useCreateBookMutation, useGetBooksQuery, useUpdateBookMutation, useDeleteBookMutation } = bookApiSlice;
