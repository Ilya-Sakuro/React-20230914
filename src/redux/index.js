import { configureStore } from '@reduxjs/toolkit';
import cart from './UI/cart';
import countPrice from './ui/countPrice';
import { api } from './services/api';

const store = configureStore({
    reducer: {
        cart,
        countPrice,
        [api.reducerPath]: api.reducer,
    },
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(api.middleware),
});

console.log(store.getState());

export default store;
