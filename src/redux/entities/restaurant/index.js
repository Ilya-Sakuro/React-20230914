import { createSlice } from '@reduxjs/toolkit';
import { normalizedRestaurants } from '../../../constants/normalized-mock';
import { getRestaurants } from './thunks/get-restaurant';

const initialState = {
  entities: normalizedRestaurants.reduce((acc, restaurant) => {
    acc[restaurant.id] = restaurant;

    return acc;
  }, {}),
  ids: normalizedRestaurants.map(({ id }) => id),
};

const { reducer } = createSlice({
  name: 'restaurant',
  initialState,
  extraReducers: (builder) =>
    builder
      .addCase(getRestaurants.pending)
      .addCase(getRestaurants.fulfilled)
      .addCase(getRestaurants.rejected),
});

export default reducer;
