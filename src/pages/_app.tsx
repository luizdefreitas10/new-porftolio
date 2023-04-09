import type { AppProps } from 'next/app';
import GlobalStyles from '../styles/GlobalStyles';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import { ThemeContext, ThemeProvider } from '../context/themeContext';
import AOSWrapper from '../components/AOSWrapper/index';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import { useContext, useEffect } from 'react';
import { lightTheme } from '@/styles/theme';


function MyApp({ Component, pageProps }: AppProps) {

  const { theme } = useContext(ThemeContext)

  if (!theme) return null;
  useEffect(() => {
    console.log(`tema no myapp: ${theme}`)
  }, [theme]);

  return (
    <ThemeProvider>
      <StyledThemeProvider theme={theme}>
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
          <GlobalStyles />
          <Component {...pageProps} />
        </AOSWrapper>
      </StyledThemeProvider>
    </ThemeProvider>
  );
}

export default MyApp;
