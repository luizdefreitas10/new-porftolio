import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

    * {
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
        font-family: "Raleway", sans-serif;
    }

    html {
      scroll-behavior: smooth;
      margin-top: 6rem;
      font-size: 1.2rem;
      /* overflow-x: hidden; */

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
        /* overflow-x: hidden; */
        background: ${(props) => props.theme.editorBackground};
    }

    p {
      font-size: 1.1rem;
      line-height: 1.3rem;
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

    /* add custom scrollbar in global project 👇🏼👇🏼👻 */
    ::-webkit-scrollbar {
      width: 5px;
    }

    ::-webkit-scrollbar-track {
      background: ${(props) => props.theme.editorBackground};
    }

    ::-webkit-scrollbar-thumb {
      /* background: ${(props) => props.theme.editorBlueSky}; */
      background: linear-gradient(
    to bottom,
    ${(props) => props.theme.editorTerminalBlue},
    ${(props) => props.theme.editorBlueSky},
    ${(props) => props.theme.editorLittleSky}
  );;
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
