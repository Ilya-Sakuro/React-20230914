import { createSlice } from '@reduxjs/toolkit';

const slice = createSlice({
    name: 'countPrice',
    initialState: {},
    reducers: {
        incrementCountPrice: (state, { payload }) => {
            const { dishId, amount, price } = payload;

            if (!state[dishId]) {
                state[dishId] = 0;
            }
            if (amount > 0) {
                state[dishId] += price;
            } else {
                state[dishId] = price;
            }
        },
        decrementCountPrice: (state, { payload }) => {
            const { dishId, amount, price } = payload;
            if (!state[dishId]) {
                state[dishId] = 0;
            }
            if (amount === 0) {
                state[dishId] = price;
            } else {
                state[dishId] -= price;
            }
        },
        deleteCountPrice: (state, { payload }) => {
            payload.map(id => (state[id] = 0));
        },
    },
});

export const { incrementCountPrice, decrementCountPrice, deleteCountPrice } = slice.actions;
export default slice.reducer;
