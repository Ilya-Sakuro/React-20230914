import React, { useState } from 'react';

export const ThemeContext = React.createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('default');

  const toggleThem = () => {
    return setTheme(theme === 'default' ? 'dark' : 'default');
  };

  return <ThemeContext.Provider value={{ theme, toggleThem }}>{children}</ThemeContext.Provider>;
};
