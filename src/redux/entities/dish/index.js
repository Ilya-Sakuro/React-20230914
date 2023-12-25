import { createSlice, createEntityAdapter } from '@reduxjs/toolkit';
import { getDishesByRestaurantIfNotExist } from './thunks/get-dish';

const dishEntityAdapter = createEntityAdapter();

const { reducer } = createSlice({
  name: 'dish',
  initialState: dishEntityAdapter.getInitialState(),
  extraReducers: (builder) =>
    builder.addCase(getDishesByRestaurantIfNotExist.fulfilled, (state, { payload } = {}) => {
      dishEntityAdapter.setMany(state, payload);
    }),
});

export default reducer;
