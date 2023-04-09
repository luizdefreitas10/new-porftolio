import { createContext, useState, useEffect, ReactNode, useContext } from 'react';
import { lightTheme, darkTheme } from '../styles/theme';
import { DefaultTheme } from 'styled-components';

interface IThemeContext {
  theme: DefaultTheme | null;
  toggleTheme: () => void;
}

interface ThemeProviderProps {
  children: ReactNode;
}

export const ThemeContext = createContext<IThemeContext>({
  theme: darkTheme,
  toggleTheme: () => {},
});

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const [currentTheme, setCurrentTheme] = useState<DefaultTheme | null>(null);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    setCurrentTheme(savedTheme === 'light' ? lightTheme : darkTheme);
  }, []);

  const toggleTheme = () => {
    console.log('chamei toggle')
    const newTheme = currentTheme === darkTheme ? lightTheme : darkTheme;
    setCurrentTheme(newTheme);
    localStorage.setItem('theme', newTheme === lightTheme ? 'light' : 'dark');
  };

  const value = {
    theme: currentTheme,
    toggleTheme,
  };

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
};
