import { useContext, useEffect, useState } from "react";
import { ThemeContext } from "../../context/themeContext";

export default function ThemeButton() {

  const { toggleTheme, theme } = useContext(ThemeContext)

  const handleClick = () => {
    console.log('cliquei no theme button')
    console.log("Current theme no button antes de clicar:", theme)
    toggleTheme();
    console.log("Current theme no button apos clicar:", theme)
  };

  return (
    <div>
      <button type="button" onClick={handleClick}>Tema</button>
    </div>
  );
}
