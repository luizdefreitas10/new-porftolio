import "react-toastify/dist/ReactToastify.min.css";
import type { AppProps } from "next/app";
import GlobalStyles from "../styles/GlobalStyles";
import { ThemeProvider } from "styled-components";
import * as theme from "../styles/theme";
import AOSWrapper from "../components/AOSWrapper/index";
import { ToastContainer, toast, Slide } from "react-toastify";
import PortfolioContext, { PortfolioProvider } from "@/context/PortfolioContext";
import { useContext } from "react";

export default function App({ Component, pageProps }: AppProps) {

  const { appTheme } = useContext(PortfolioContext);

  console.log(appTheme);

  return (
    <PortfolioProvider>
      {/* // <ThemeProvider theme={ appTheme }> */}
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
      {/* // </ThemeProvider> */}
    </PortfolioProvider>
  );
}
