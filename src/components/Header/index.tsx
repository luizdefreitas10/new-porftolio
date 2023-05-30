import {
  Navigation,
  HeaderContainer,
  Container,
  StyledSvg,
  FixedContainer,
  StyledSg,
  StyledMenuDiv,
} from "../../styles/components/Header/styles";
import portfolioSVG from "../../assets/svgs/portfolio-my-profile-browser-svgrepo-com.svg";
import MenuHmburguer from "../../../public/menus.png";
import Image from "next/image";
import { useRouter } from "next/router";
import { useContext, useEffect, useState } from "react";
import PortfolioContext from "@/context/PortfolioContext";
import ThemeButton from "../ThemeButton";
import MenuHamburguer from "../MenuHamburguer";

export default function Header() {
  const router = useRouter();

  const [lastScrollTop, setLastScrollTop] = useState(0);
  const [hidden, setHidden] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  const {
    isMenuOpen,
    toggleMenu,
    appTheme,
    toggleTheme,
    toggleCheckBurguer,
    isChecked,
    toggleHamburguer,
  } = useContext(PortfolioContext);

  const handleHeaderScroll = () => {
    const currentScrollTop = window.pageYOffset;

    if (currentScrollTop <= lastScrollTop) {
      setHidden(false);
    } else {
      setHidden(true);

      if (isMenuOpen && scrollY > 0) {
        toggleMenu();
        toggleCheckBurguer();
      }
    }

    setLastScrollTop(currentScrollTop);
  };

  useEffect(() => {
    handleHeaderScroll();
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollY]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // const handleClick = () => {
  //   toggleTheme();
  //   console.log('cliquei');
  //   console.log(appTheme)
  // };

  return (
    <FixedContainer className={hidden ? "hidden" : ""}>
      <Container>
        <StyledSvg
          src={portfolioSVG}
          alt={"portfolioSVG"}
          height={50}
          width={50}
          onClick={() => router.push("/")}
        />

        <StyledSg>
          <MenuHamburguer />
        </StyledSg>

        <HeaderContainer>
          <Navigation
            onClick={() => {
              if (isMenuOpen) {
                scrollToTop();
                toggleCheckBurguer();
              } else {
                scrollToTop();
              }
            }}
          >
            Início
          </Navigation>

          <Navigation href="#sobre" onClick={toggleCheckBurguer}>
            Sobre mim
          </Navigation>

          <Navigation href="#projetos" onClick={toggleCheckBurguer}>
            Projetos
          </Navigation>

          <Navigation href="#contato" onClick={toggleCheckBurguer}>
            Contato
          </Navigation>
        </HeaderContainer>
        <button type="button">
          <ThemeButton />
        </button>
      </Container>
    </FixedContainer>
  );
}
