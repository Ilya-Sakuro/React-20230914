import { configureStore } from '@reduxjs/toolkit';
import cart from './ui/cart';
import { api } from './services/api';

const store = configureStore({
    reducer: {
        cart,
        [api.reducerPath]: api.reducer,
    },
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware().concat(api.middleware),
});

console.log(store.getState());

export default store;
