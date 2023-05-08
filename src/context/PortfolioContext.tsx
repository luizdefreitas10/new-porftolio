import { createContext, useState, ReactNode } from 'react';
import { lightTheme, darkTheme } from '../styles/theme'
import { Theme } from '../styles/theme'
import { DefaultTheme, ThemeProvider } from 'styled-components';

interface PortfolioContextProps {
  isMenuOpen: boolean;
  toggleMenu: () => void;
  appTheme: DefaultTheme;
  toggleTheme: () => void;
}

const PortfolioContext = createContext<PortfolioContextProps>({

} as PortfolioContextProps);

interface PortfolioProps {
  children: ReactNode;
}

export const PortfolioProvider: React.FC<PortfolioProps> = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [appTheme, setAppTheme] = useState(darkTheme);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleTheme = () => {
    setAppTheme( appTheme == darkTheme ? lightTheme : darkTheme );
  };

  return (
    <PortfolioContext.Provider value={{ isMenuOpen, toggleMenu, appTheme,  toggleTheme}}>
      <ThemeProvider theme={appTheme}>{children}</ThemeProvider>
    </PortfolioContext.Provider>
  );
};

export default PortfolioContext;


