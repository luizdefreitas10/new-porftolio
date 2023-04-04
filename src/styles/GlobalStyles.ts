import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

    * {
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
        font-family: "Raleway", sans-serif;
        background: ${(props) => props.theme.editorBackground};
        /* background: ${(props) => props.theme.productDark4}; */
        /* background: ${(props) => props.theme.productDark2}; */
        /* background: ${(props) => props.theme.editorStorm}; */
        /* font-family: ${(props) => props.theme.font.primary};
        color: ${(props) => props.theme.productLight1}; */
    }

    .Toastify__toast-container {
      z-index: 9999999999999;
    }

    *::after{
        box-sizing: border-box;
    }

    *::before{
        box-sizing: border-box;
    }

    *:focus{
        outline:0;
    }

    body{
        /* -webkit-font-smoothing: antialiased; */
        overflow-x: hidden;
        background: ${(props) => props.theme.editorBackground};
        /* background: ${({ theme }) => theme.productBase1}; */

        /* height: 100vh; */
    }

    p {
      font-size: 1rem;
    }

    a {
        text-decoration: none;
        cursor: pointer;
    }

    ul {
        list-style: none;
    }

    button{
        cursor: pointer;
    }

    /* .swiper-pagination-bullet {
      opacity: 0.3 !important;
      background-color: #FFF !important;
      width: 10px;
      height: 10px;
      transition: 0.2s;
    }

    .swiper-pagination-bullet-active {
     opacity: 1 !important;
     background-color: #FFF !important;
     width: 30px;
     border-radius: 8px;
    } */

    /* add custom scrollbar in global project 👇🏼👇🏼👻 */
    ::-webkit-scrollbar {
      width: 5px;
    }

    ::-webkit-scrollbar-track {
      background: ${(props) => props.theme.editorBackground};
    }

    ::-webkit-scrollbar-thumb {
      background: ${(props) => props.theme.editorBlueSky};
      border-radius: 20px;
    }

    /* Cor do Texto selecionado 👇🏼👇🏼👻 */
    ::-moz-selection {
      color: ${(props) => props.theme.editorOrange1};
      background: ${(props) => props.theme.editorBackground};
    }

    ::selection {
      color:${(props) => props.theme.editorOrange1};
      background: ${(props) => props.theme.editorBlack};
    }

    @supports (font: -apple-system-body) and (-webkit-appearance: none) { img[loading="lazy"] { clip-path: inset(0.6px) } }

    ::-webkit-datetime-edit-year-field,
    ::-webkit-datetime-edit-month-field,
    ::-webkit-datetime-edit-day-field {
      color: transparent;
    }
`;
