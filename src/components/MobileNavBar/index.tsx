import PortfolioContext from "@/context/PortfolioContext";
import { useContext, useEffect } from "react";
import {
  Container,
  MenuContainer,
  Nav,
  UlContainer,
  Li
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
      <MenuContainer isOpen={isMenuOpen}>

          <UlContainer isOpen={isMenuOpen}>
            <Li>
              <Nav onClick={scrollToTop}>Início</Nav>
            </Li>
            <Li>
              <Nav href="#sobre" onClick={toggleMenu}>
                Sobre mim
              </Nav>
            </Li>
            <Li>
              <Nav href="#projetos" onClick={toggleMenu}>
                Projetos
              </Nav>
            </Li>
            <Li>
              <Nav href="#contato" onClick={toggleMenu}>
                Contato
              </Nav>
            </Li>
          </UlContainer>

      </MenuContainer>
    </Container>
  );
}
