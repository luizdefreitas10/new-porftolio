import { createContext, useState, ReactNode } from 'react';

interface PortfolioContextProps {
  isMenuOpen: boolean;
  toggleMenu: () => void;
}

const PortfolioContext = createContext<PortfolioContextProps>({} as PortfolioContextProps);

interface PortfolioProps {
  children: ReactNode;
}

export const PortfolioProvider: React.FC<PortfolioProps> = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <PortfolioContext.Provider value={{ isMenuOpen, toggleMenu }}>
      {children}
    </PortfolioContext.Provider>
  );
};

export default PortfolioContext;


// import { createContext, useState } from 'react'

// const PortfolioContext = createContext({});

// export const PortfolioProvider = ({ children }) => {
//   const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

//   const toggleMenu = () => {
//     setIsMenuOpen(!isMenuOpen);
//   };

//   return (
//     <PortfolioContext.Provider value={{ isMenuOpen, toggleMenu }}>
//       {children}
//     </PortfolioContext.Provider>
//   );
// };