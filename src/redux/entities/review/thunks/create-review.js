// import { createAsyncThunk } from '@reduxjs/toolkit';
// // import { restaurantActions } from '../../restaurant';

// export const createReview = createAsyncThunk(
//   'review/createReview',
//   async ({ restaurantId, newReview }, { dispatch }) => {
//     const response = await fetch(`http://localhost:3001/api/review/${restaurantId}`, {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json;charset=utf-8',
//       },
//       body: JSON.stringify(newReview),
//     });

//     const review = await response.json();

//     dispatch(restaurantActions.addReview({ restaurantId, reviewId: review.id }));

//     return review;
//   }
// );
