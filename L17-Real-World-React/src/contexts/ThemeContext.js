import { createContext, useContext, useState } from "react";

const ThemeContext = createContext(null);

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light');

  const toggleTheme = (newTheme) => {
    if (newTheme) {
      setTheme(newTheme)
    }

    if(theme === 'light'){
      setTheme('dark')
    }

    if(theme === 'dark'){
      setTheme('light')
    }
  }

  const state = {
    theme, toggleTheme
  }

  return (
    <ThemeContext.Provider value={state}>
      { children }
    </ThemeContext.Provider>
  )
}

const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === null) {
    throw new Error ('useTheme can only be used inside ThemeProvider');
  }
  return context;
}

export {
  ThemeProvider,
  useTheme,
}