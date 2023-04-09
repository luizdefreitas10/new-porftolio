import { DefaultTheme } from 'styled-components'

export interface Theme {
  breaks: {
    minimobile:string
    mobile:string
    tablet: string
    desktop: string
    customBreak:string
    sm:string
    md:string
    lg:string
    xl: string
    xxl: string
  },

  editorBackground: string,
  editorStorm: string,
  editorBlack: string,
  editorStrings: string,
  editorKeywords: string,
  editorTerminalBlue: string,
  editorBlueSky: string,
  editorLittleSky: string,
  editorOrange1: string,
  editorOrange2: string,

  editorComments: string,
  editorParameters: string,
  editorMarkdown: string,
  editorForeground: string,
  editorNames: string,
  editorSupport: string,
  editorConstant: string,
}

export default {
  breaks: {
    minimobile: "max-width: 340px",
    mobile: "max-width: 767px",
    tablet: "768px <= width <= 1024px",
    desktop: "min-width: 1024px",
    customBreak: "max-width: 890px",
    sm: "max-width: 576px",
    md: "max-width: 768px",
    lg: "max-width: 992px",
    xl: "max-width: 1200px",
    xxl: "min-width: 1201px",
  },

  editorBackground: "#1a1b26",
  editorStorm: "#24283b",
  editorBlack: "#414868",
  editorStrings: "#9ece6a",
  editorKeywords: "#f7768e",
  editorTerminalBlue: "#c0caf5",
  editorBlueSky: "#7aa2f7",
  editorLittleSky: "#b4f9f8",
  editorOrange1: "#ff9e64",
  editorOrange2: "#e0af68",
};

export const lightTheme: DefaultTheme = {
  editorBackground: "#d5d6db",
  editorStorm: "#9699a3",
  editorBlack: "#0f0f14",
  editorStrings: "#485e30",
  editorKeywords: "#8c4351",
  editorTerminalBlue: "#634f30",
  editorBlueSky: "#565a6e",
  editorLittleSky: "#343b58",
  editorOrange1: "#34548a",
  editorOrange2: "#166775",
  editorConstant: "",
  breaks: {
    minimobile: "",
    mobile: "",
    tablet: "",
    desktop: "",
    customBreak: "",
    sm: "",
    md: "",
    lg: "",
    xl: "",
    xxl: ""
  },
  editorComments: "",
  editorParameters: "",
  editorMarkdown: "",
  editorForeground: "",
  editorNames: "",
  editorSupport: ""
};

export const darkTheme: DefaultTheme = {
  editorBackground: "#1a1b26",
  editorStorm: "#24283b",
  editorBlack: "#414868",
  editorStrings: "#9ece6a",
  editorKeywords: "#f7768e",
  editorTerminalBlue: "#c0caf5",
  editorBlueSky: "#7aa2f7",
  editorLittleSky: "#b4f9f8",
  editorOrange1: "#ff9e64",
  editorOrange2: "#e0af68",
  editorComments: "",
  editorParameters: "",
  editorMarkdown: "",
  editorForeground: "",
  editorNames: "",
  editorSupport: "",
  editorConstant: "",
  breaks: {
    minimobile: "",
    mobile: "",
    tablet: "",
    desktop: "",
    customBreak: "",
    sm: "",
    md: "",
    lg: "",
    xl: "",
    xxl: ""
  },
};




/*
#8c4351 #8c4351	This keyword, HTML elements, Regex group symbol, CSS units, Terminal Red
#965027 #965027	Number and Boolean constants, Language support constants
#8f5e15 #8f5e15	Function parameters, Regex character sets, Terminal Yellow
#485e30 #485e30	Strings, CSS class names
#33635c #33635c	Object literal keys, Markdown links, Regex literal strings, Terminal Green
#166775 #166775	Language support functions, CSS HTML elements
#0f4b6e #0f4b6e	Object properties, Regex quantifiers and flags, Terminal Cyan, Markdown code, Import/export keywords
#34548a #34548a	Function names, CSS property names, Markdown Headings, Terminal Blue
#5a4a78 #5a4a78	Control Keywords, Storage Types, Regex symbols and operators, HTML Attributes, Terminal Magenta
#343b58 #343b58	Editor Foreground, Variables, Class names, Terminal White
#565a6e #565a6e	Markdown Text, HTML Text
#634f30 #634f30	Parameters inside functions (semantic highlighting only)
#0f0f14 #0f0f14	Terminal Black
#9699a3 #9699a3	Comments
#d5d6db #d5d6db	Editor Background
*/

