import { Provider } from 'react-redux';
import { ThemeProvider } from './contexts/ThemeContext';
import { MainPage } from './pages/Main/MainPage';
import store from './redux';

export const App = () => {
  return (
    <Provider store={store}>
      <ThemeProvider>
        <MainPage />
      </ThemeProvider>
    </Provider>
  );
};
