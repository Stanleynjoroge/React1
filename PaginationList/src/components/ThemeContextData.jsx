import React, { createContext, useState,useEffect } from 'react';

export const ThemeContext= createContext();

const ThemeContextProvider = ({children}) => {
  const [theme, setTheme] = useState(null);

  useEffect(() => {
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setTheme('light');
    } else {
      setTheme('dark');
    }
  }, []);

  useEffect(() => {
    if (theme === 'light') {
      document.body.classList.add('dark');
      // document.body.classList.remove('light');
    } else {
      // document.body.classList.add('light');
      document.body.classList.remove('dark');
    }
  }, [theme]);

  const handleSwitchTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <ThemeContext.Provider value={[theme ,handleSwitchTheme]}>
    {children}
  </ThemeContext.Provider>
  )
}

export default ThemeContextProvider




