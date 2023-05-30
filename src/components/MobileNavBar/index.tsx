import PortfolioContext from "@/context/PortfolioContext";
import { useContext, useEffect } from "react";
import {
  Container,
  MenuContainer,
  Nav,
  UlContainer,
  Li,
} from "../../styles/components/MobileNavBar/styles";

export default function MobileNavBar() {
  const { isMenuOpen, toggleMenu, toggleCheckBurguer } =
    useContext(PortfolioContext);

  useEffect(() => {
    const handleScroll = () => {
      if (isMenuOpen) {
        toggleMenu();
        toggleCheckBurguer();
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
      behavior: "auto",
    });
    toggleMenu();
  };

  const handleNavClick = () => {
    console.log("cliquei");
    toggleCheckBurguer();
  };

  return (
    <Container>
      <MenuContainer isOpen={isMenuOpen}>
        <UlContainer isOpen={isMenuOpen}>
          <Nav
            onClick={() => {
              scrollToTop();
              toggleCheckBurguer();
            }}
            isOpen={isMenuOpen}
          >
            Início
          </Nav>

          <Nav
            href="#sobre"
            onClick={() => toggleCheckBurguer}
            isOpen={isMenuOpen}
          >
            Sobre mim
          </Nav>

          <Nav
            href="#projetos"
            onClick={() => toggleCheckBurguer}
            isOpen={isMenuOpen}
          >
            Projetos
          </Nav>

          <Nav
            href="#contato"
            onClick={() => toggleCheckBurguer}
            isOpen={isMenuOpen}
          >
            Contato
          </Nav>
        </UlContainer>
      </MenuContainer>
    </Container>
  );
}
