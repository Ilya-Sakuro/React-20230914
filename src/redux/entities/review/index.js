import { createSlice, createEntityAdapter } from '@reduxjs/toolkit';
// import { createReview } from './thunks/create-review';
import { getReviewsByRestaurantIfNotExist } from './thunks/get-reveiws-by-restaurant';

const reviewEntityAdapter = createEntityAdapter();

const { reducer } = createSlice({
  name: 'review',
  initialState: reviewEntityAdapter.getInitialState(),
  extraReducers: (builder) =>
    builder
      // .addCase(createReview.fulfilled, (state, { payload } = {}) => {
      //   reviewEntityAdapter.addOne(state, payload);
      // })
      .addCase(getReviewsByRestaurantIfNotExist.fulfilled, (state, { payload } = {}) => {
        reviewEntityAdapter.setMany(state, payload);
      }),
});

export default reducer;
