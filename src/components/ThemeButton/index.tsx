import { useContext } from "react";
import { useTheme } from "../../context/themeContext";

export default function ThemeButton() {
  const { toggleTheme, theme } = useTheme();

  const handleClick = () => {
    console.log("cliquei no theme button");
    toggleTheme();
    console.log("Current theme:", theme);
  };

  return (
    <div>
      <button type="button" onClick={handleClick}>
        Tema
      </button>
    </div>
  );
}
