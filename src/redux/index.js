import { configureStore } from '@reduxjs/toolkit';
import restaurant from './entities/restaurant';
import dish from './entities/dish';
import review from './entities/review';
import user from './entities/user';

const store = configureStore({
  reducer: {
    restaurant,
    dish,
    review,
    user,
  },
});

export default store;
