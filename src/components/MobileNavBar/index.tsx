import PortfolioContext from "@/context/PortfolioContext";
import { useContext, useEffect } from "react";
import {
  Container,
  MenuContainer,
  Nav,
} from "../../styles/components/MobileNavBar/styles";

export default function MobileNavBar() {
  const { isMenuOpen, toggleMenu } = useContext(PortfolioContext);

  useEffect(() => {
    const handleScroll = () => {
      if (isMenuOpen) {
        toggleMenu();
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isMenuOpen, toggleMenu]);

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
        <ul>
          <li>
            <Nav onClick={scrollToTop}>Início</Nav>
          </li>
          <li>
            <Nav href="#sobre" onClick={toggleMenu}>
              Sobre mim
            </Nav>
          </li>
          <li>
            <Nav href="#projetos" onClick={toggleMenu}>
              Projetos
            </Nav>
          </li>
          <li>
            <Nav href="#contato" onClick={toggleMenu}>
              Contato
            </Nav>
          </li>
        </ul>
      </MenuContainer>
    </Container>
  );
}
