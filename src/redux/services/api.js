import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
export const api = createApi({
    reducerPath: 'api',

    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3001/api/' }),
    tagTypes: ['Review'],
    endpoints: builder => ({
        getRestaurants: builder.query({
            query: () => ({
                url: 'restaurants',
            }),
            invalidatesTags: ['Review'],
        }),
        getProducts: builder.query({
            query: restaurantId => ({
                url: `dishes?restaurantId=`,
                params: { restaurantId },
            }),
            invalidatesTags: ['Review'],
        }),
        getReviews: builder.query({
            query: restaurantId => ({
                url: `reviews`,
                params: { restaurantId },
            }),
            providesTags: result =>
                result
                    ? [
                          ...result.map(({ id }) => ({ type: 'Review', id })),
                          'Review',
                      ]
                    : ['Review'],
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
            invalidatesTags: ['Review'],
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
