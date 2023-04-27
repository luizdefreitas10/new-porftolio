import PortfolioContext from "@/context/PortfolioContext";
import { useContext } from "react";
import {
  Container,
  MenuContainer,
  Nav,
} from "../../styles/components/MobileNavBar/styles";

export default function MobileNavBar() {
  const { isMenuOpen, toggleMenu } = useContext(PortfolioContext);
  console.log(isMenuOpen);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    toggleMenu();
  };

  return (
    <Container>
      <MenuContainer>
        <Nav onClick={scrollToTop}>Início</Nav>
        <Nav href="#sobre" onClick={toggleMenu}>Sobre mim</Nav>
        <Nav href="#projetos" onClick={toggleMenu}>Projetos</Nav>
        <Nav href="#contato" onClick={toggleMenu}>Contato</Nav>
      </MenuContainer>
    </Container>
  );
}
