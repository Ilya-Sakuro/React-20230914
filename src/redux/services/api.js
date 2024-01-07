import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
export const api = createApi({
  reducerPath: 'api',
  tagTypes: ['Review'],
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3001/api/' }),
  endpoints: (builder) => ({
    getRestaurants: builder.query({
      query: () => ({
        url: 'restaurants',
      }),
    }),
    getProducts: builder.query({
      query: (restaurantId) => ({
        url: `dishes?restaurantId=`,
        params: { restaurantId },
      }),
    }),
    getReviews: builder.query({
      query: (restaurantId) => ({
        url: `reviews`,
        params: { restaurantId },
      }),
      providesTags: (result) =>
        result
          ? [...result.map(({ id }) => ({ type: 'Review', id })), { type: 'Review', id: 'LIST' }]
          : [{ type: 'Review', id: 'LIST' }],
    }),

    getUsers: builder.query({
      query: () => ({
        url: `users`,
      }),
    }),
    addReviews: builder.mutation({
      query: ({ restaurantId, newReview }) => ({
        url: `/review/${restaurantId}`,
        method: 'POST',
        body: newReview,
      }),
      invalidatesTags: [{ type: 'Review', id: 'LIST' }],
    }),
  }),
});

export const {
  useGetRestaurantsQuery,
  useGetProductsQuery,
  useGetReviewsQuery,
  useGetUsersQuery,
  useAddReviewsMutation,
} = api;
