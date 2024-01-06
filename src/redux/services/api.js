import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
export const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3001/api/' }),
  endpoints: (builder) => ({
    getRestaurants: builder.query({
      query: () => ({
        url: 'restaurants',
      }),
    }),
    getProducts: builder.query({
      query: (restaurantId) => ({
        url: `dishes?restaurantId=${restaurantId}`,
      }),
    }),
    getReviews: builder.query({
      query: (restaurantId) => ({
        url: `reviews?restaurantId=${restaurantId}`,
      }),
    }),
    getUsers: builder.query({
      query: () => ({
        url: `users`,
      }),
    }),
  }),
});

export const { useGetRestaurantsQuery, useGetProductsQuery, useGetReviewsQuery, useGetUsersQuery } = api;
