import { useContext, useEffect, useState } from "react";
import { ThemeContext } from "../../context/themeContext";

export default function ThemeButton() {

  const { toggleTheme, theme } = useContext(ThemeContext)

  const handleClick = () => {
    console.log('cliquei no theme button')
    toggleTheme();
    console.log("Current theme:", theme)
  };

  return (
    <div>
      <button type="button" onClick={handleClick}>Tema</button>
    </div>
  );
}
