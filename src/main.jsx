import React from 'react';
import ReactDOM from 'react-dom/client';
import { MainPage } from './pages/Main/MainPage';
import './index.scss';
import { ThemeProvider } from './contexts/ThemeContext';
ReactDOM.createRoot(document.getElementById('root')).render(
  <ThemeProvider>
    <MainPage />
  </ThemeProvider>
);
