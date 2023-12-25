import { createEntityAdapter } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import { REQUEST_STATUS } from '../../../constants/statusConfig';
import { getRestaurants } from './thunks/get-restaurant';

const entitiesAdapter = createEntityAdapter();

const { reducer } = createSlice({
  name: 'restaurant',
  initialState: entitiesAdapter.getInitialState({ status: REQUEST_STATUS.idle }),
  extraReducers: (builder) =>
    builder
      .addCase(getRestaurants.pending, (state) => {
        state.status = REQUEST_STATUS.pending;
      })
      .addCase(getRestaurants.fulfilled, (state, { payload }) => {
        entitiesAdapter.setAll(state, payload);
        state.status = REQUEST_STATUS.fulfilled;
      })
      .addCase(getRestaurants.rejected, (state) => {
        state.status = REQUEST_STATUS.rejected;
      }),
});

export default reducer;
