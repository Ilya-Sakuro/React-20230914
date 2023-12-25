import { createEntityAdapter } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import { getRestaurants } from './thunks/get-restaurant';

const entitiesAdapter = createEntityAdapter();

const { reducer } = createSlice({
  name: 'restaurant',
  initialState: entitiesAdapter.getInitialState(),
  extraReducers: (builder) =>
    builder.addCase(getRestaurants.fulfilled, (state, { payload } = {}) => {
      entitiesAdapter.setAll(state, payload);
    }),
});

export default reducer;
