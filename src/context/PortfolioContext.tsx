import { createContext, useState, ReactNode } from 'react';
import { lightTheme, darkTheme } from '../styles/theme'
import { Theme } from '../styles/theme'
import { DefaultTheme, ThemeProvider } from 'styled-components';

interface PortfolioContextProps {
  isMenuOpen: boolean;
  toggleMenu: () => void;
  appTheme: DefaultTheme;
  toggleTheme: () => void;
  toggleHamburguer: () => void;
  isChecked: boolean;
  toggleCheckBurguer: () => void;
}

const PortfolioContext = createContext<PortfolioContextProps>({

} as PortfolioContextProps);

interface PortfolioProps {
  children: ReactNode;
}

export const PortfolioProvider: React.FC<PortfolioProps> = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [appTheme, setAppTheme] = useState(darkTheme);
  const [isChecked, setIsChecked] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleTheme = () => {
    setAppTheme( appTheme == darkTheme ? lightTheme : darkTheme );
  };

  const toggleHamburguer = () => {
    console.log('chamei a funcao toggle hamburguer');
    if (isChecked == true) {
      setIsChecked(false);
    } else {
      setIsChecked(true);
    }
  };

  const toggleCheckBurguer = () => {
    console.log('chamei a funcao checkburguer')
    setIsChecked(!isChecked);
  };

  return (
    <PortfolioContext.Provider value={{ isMenuOpen, toggleMenu, appTheme,  toggleTheme, toggleHamburguer, isChecked, toggleCheckBurguer}}>
      <ThemeProvider theme={appTheme}>{children}</ThemeProvider>
    </PortfolioContext.Provider>
  );
};

export default PortfolioContext;


