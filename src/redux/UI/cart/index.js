import { createSlice } from '@reduxjs/toolkit';

const { reducer, actions } = createSlice({
  name: 'cart',
  initialState: {},
  reducers: {
    increment: (state, { payload }) => {
      state[payload] = (state[payload] || 0) + 1;
    },
    decrement: (state, { payload }) => {
      state[payload] = (state[payload] || 0) > 0 ? state[payload] - 1 : 0;
    },
  },
});

export default reducer;
export { actions as cartActions };
