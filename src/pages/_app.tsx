import "react-toastify/dist/ReactToastify.min.css";
import type { AppProps } from "next/app";
import GlobalStyles from "../styles/GlobalStyles";
import { ThemeProvider } from "styled-components";
import theme from "../styles/theme";
import AOSWrapper from "../components/AOSWrapper/index";
import { ToastContainer, toast, Slide } from "react-toastify";
import { PortfolioProvider } from "@/context/PortfolioContext";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <PortfolioProvider>
      <ThemeProvider theme={theme}>
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
      </ThemeProvider>
    </PortfolioProvider>
  );
}
