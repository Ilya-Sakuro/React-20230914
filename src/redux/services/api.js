import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
export const api = createApi({
    reducerPath: 'api',

    baseQuery: fetchBaseQuery({ baseUrl: 'https://jsonplaceholder.typicode.com' }),
    tagTypes: ['Review'],
    endpoints: builder => ({
        getRestaurants: builder.query({
            query: () => ({
                url: 'posts',
            }),
        }),
        getProducts: builder.query({
            query: restaurantId => ({
                url: `dishes?restaurantId=${restaurantId}`,
            }),
        }),
        getReviews: builder.query({
            query: restaurantId => ({
                url: `reviews?restaurantId=${restaurantId}`,
            }),
            providesTags: result =>
                result
                    ? [
                          ...result.map(({ id }) => ({ type: 'Review', id })),
                          { type: 'Review', id: 'LIST' },
                      ]
                    : [{ type: 'Review', id: 'LIST' }],
        }),

        getUsers: builder.query({
            query: () => ({
                url: `users`,
            }),
        }),
        addReviews: builder.mutation({
            query: ({ restaurantId, newReview }) => ({
                url: `review/${restaurantId}`,
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
    useLazyGetRestaurantsQuery,
} = api;
