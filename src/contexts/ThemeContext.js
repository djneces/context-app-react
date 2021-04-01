import React, { createContext } from 'react';
import useToggleState from '../hooks/useToggleState';

export const ThemeContext = createContext();

//we give it data what we consume in another components ->children
export function ThemeProvider(props) {
  const [isDarkMode, toggleTheme] = useToggleState(false);

  //one value per context - what is passed to children
  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
      {props.children}
    </ThemeContext.Provider>
  );
}
