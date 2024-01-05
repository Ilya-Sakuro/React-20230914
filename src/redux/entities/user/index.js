import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';
import { getUsersIfNotExist } from './thunks/get-users';

const userEntityAdapter = createEntityAdapter();

const { reducer } = createSlice({
  name: 'user',
  initialState: userEntityAdapter.getInitialState(),
  extraReducers: (builder) =>
    builder.addCase(getUsersIfNotExist.fulfilled, (state, { payload } = {}) => {
      userEntityAdapter.setAll(state, payload);
    }),
});

export default reducer;
