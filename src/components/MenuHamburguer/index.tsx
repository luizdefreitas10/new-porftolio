import PortfolioContext from "@/context/PortfolioContext";
import { HamburgerLabel, HamburgerInput, HamburgerSVG, LineTopBottom, Line } from "@/styles/components/MenuHamburguer/styles";
import { useContext } from "react";

export default function MenuHamburguer() {

  const { toggleMenu, toggleCheckBurguer, isChecked } = useContext(PortfolioContext);

  const handleClick = () => {
    toggleMenu();
    toggleCheckBurguer();
  };

  console.log(isChecked);

  return (
    <HamburgerLabel>
      <HamburgerInput type="checkbox" checked={isChecked} onChange={() => handleClick()}/>
      <HamburgerSVG viewBox="0 0 32 32">
        <LineTopBottom d="M27 10 13 10C10.8 10 9 8.2 9 6 9 3.5 10.8 2 13 2 15.2 2 17 3.8 17 6L17 26C17 28.2 18.8 30 21 30 23.2 30 25 28.2 25 26 25 23.8 23.2 22 21 22L7 22"></LineTopBottom>
        <Line d="M7 16 27 16"></Line>
      </HamburgerSVG>
    </HamburgerLabel>
  );
}
