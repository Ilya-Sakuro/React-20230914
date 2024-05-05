import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import { App } from './App';
import { Provider } from 'react-redux';
import store from './redux';
import { ThemeProvider } from './contexts/ThemeContext';
import { RestaurantProvider } from './contexts/RestaurantContext';

ReactDOM.createRoot(document.getElementById('root')).render(
    <Provider store={store}>
        <ThemeProvider>
            <RestaurantProvider>
                <App />
            </RestaurantProvider>
        </ThemeProvider>
    </Provider>,
);
