import type { AppProps } from "next/app";
import GlobalStyles from "../styles/GlobalStyles";
import { ThemeProvider as StyledThemeProvider } from "styled-components";
// import { ThemeProvider } from "../context/themeContext";
import AOSWrapper from "../components/AOSWrapper/index";
import { ToastContainer } from "react-toastify";
// import { ThemeProvider } from "next-themes";
import { ThemeProvider as CustomThemeProvider } from "../context/themeContext";
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from '../styles/theme';
import "react-toastify/dist/ReactToastify.min.css";
import { useState } from "react";

function MyApp({ Component, pageProps }: AppProps) {

  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>

        <GlobalStyles />
        <AOSWrapper>
          <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="colored"
          />
          <Component {...pageProps} toggleTheme={toggleTheme}/>
        </AOSWrapper>

    </ThemeProvider>
  );
}

export default MyApp;
