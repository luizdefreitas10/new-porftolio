import { createContext, useState, useContext, useEffect } from "react";
import { darkTheme, lightTheme } from "../styles/theme";

function isClientSide() {
  return typeof window !== "undefined";
}

type ThemeContextData = {
  theme: typeof darkTheme;
  toggleTheme: () => void;
};

const ThemeContext = createContext<ThemeContextData>({} as ThemeContextData);

const ThemeProvider: React.FC = ({ children }) => {
  const [theme, setTheme] = useState<typeof darkTheme>(() => {
    if (isClientSide()) {
      const storedTheme = localStorage.getItem("theme");

      if (storedTheme) {
        return JSON.parse(storedTheme);
      } else {
        return darkTheme;
      }
    }
    return darkTheme;
  });

  useEffect(() => {
    if (isClientSide()) {
      localStorage.setItem("theme", JSON.stringify(theme));
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme((currentTheme) => {
      return currentTheme === darkTheme ? lightTheme : darkTheme;
    });
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

const useTheme = () => {
  const context = useContext(ThemeContext);
  return context;
};

export { ThemeProvider, useTheme };
