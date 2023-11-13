import { createSlice } from '@reduxjs/toolkit';
import { normalizedDishes } from '../../../constants/normalized-mock';

const initialState = {
  entities: normalizedDishes.reduce((acc, dish) => {
    acc[dish.id] = dish;

    return acc;
  }, {}),
  ids: normalizedDishes.map(({ id }) => id),
};

const { reducer } = createSlice({
  name: 'dish',
  initialState,
});

export default reducer;
