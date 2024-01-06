import { configureStore } from '@reduxjs/toolkit';
// import restaurant from './entities/restaurant';
// import dish from './entities/dish';
// import review from './entities/review';
// import user from './entities/user';
// import request from './ui/request';
import cart from './ui/cart';
import { loggerMiddleware } from './middlewares/logger';
import { api } from './services/api';

const store = configureStore({
  reducer: {
    // restaurant,
    // dish,
    // review,
    // user,
    // request,
    cart,
    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefaultMiddleware) => [...getDefaultMiddleware(), api.middleware, loggerMiddleware],
});

console.log(store.getState());

export default store;
