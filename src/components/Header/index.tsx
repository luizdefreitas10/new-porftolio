import {
  Navigation,
  HeaderContainer,
  Container,
  StyledSvg,
  FixedContainer,
  StyledSg,
  StyledMenuDiv
} from "../../styles/components/Header/styles";
import portfolioSVG from "../../assets/svgs/portfolio-my-profile-browser-svgrepo-com.svg";
import MenuHmburguer from "../../../public/menus.png";
import Image from "next/image";
import { Link, Element } from "react-scroll";
import { useRouter } from "next/router";

import { useContext, useEffect, useState } from "react";
import PortfolioContext from "@/context/PortfolioContext";
import lightDarkButton from '../../../public/day-and-night.png'

export default function Header() {
  const router = useRouter();

  const [lastScrollTop, setLastScrollTop] = useState(0);
  const [hidden, setHidden] = useState(false);

  const { isMenuOpen, toggleMenu, appTheme, toggleTheme } = useContext(PortfolioContext);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollTop = window.pageYOffset;

      if (currentScrollTop <= lastScrollTop) {
        setHidden(false);
      } else {
        setHidden(true);
      }

      setLastScrollTop(currentScrollTop);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollTop]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleClick = () => {
    toggleTheme();
    console.log('cliquei');
    console.log(appTheme)
  };

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

        <StyledSg
          src={MenuHmburguer}
          alt="menu"
          width={50}
          height={50}
          onClick={() => toggleMenu()}
        />

        <HeaderContainer>
          <Navigation onClick={scrollToTop}>Início</Navigation>

          <Navigation href="#sobre">Sobre mim</Navigation>

          <Navigation href="#projetos">Projetos</Navigation>

          <Navigation href="#contato">Contato</Navigation>
        </HeaderContainer>
        <button type="button" onClick={handleClick}>
          <Image src="data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64' aria-labelledby='title' aria-describedby='desc' role='img' xmlns:xlink='http://www.w3.org/1999/xlink'%3E%3Ctitle%3ESun And Moon%3C/title%3E%3Cdesc%3EA color styled icon from Orion Icon Library.%3C/desc%3E%3Cpath data-name='layer2' d='M33.6 19.1a11.7 11.7 0 0 1-15.3 16.2v-.2a14 14 0 1 0 15.4-16z' fill='%23e6f0fa'%3E%3C/path%3E%3Cpath data-name='layer1' d='M23.3 36.4a11.7 11.7 0 0 0 10.3-17.3H32a13.9 13.9 0 0 0-13.8 16v.2a11.7 11.7 0 0 0 5.1 1.1z' fill='%23fc0'%3E%3C/path%3E%3Cpath data-name='opacity' d='M35 42a14 14 0 0 1-13.2-18.5 14 14 0 1 0 23.5 14A13.9 13.9 0 0 1 35 42z' fill='%23000064' opacity='.15'%3E%3C/path%3E%3Ccircle data-name='stroke' cx='32' cy='33' r='14' fill='none' stroke='%232e4369' stroke-linecap='round' stroke-linejoin='round' stroke-width='2'%3E%3C/circle%3E%3Cpath data-name='stroke' fill='none' stroke='%232e4369' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M32 3v8M10 33H2m8.8-21.2l5.6 5.6m36.8-5.6l-5.6 5.6M16.4 48.6l-5.6 5.6m22.8-35.1a11.7 11.7 0 0 1-15.3 16.2'%3E%3C/path%3E%3C/svg%3E" alt="Sun And Moon" width={50} height={50} />
          {/* <Image src={lightDarkButton} alt='light mode and dark mode' width={50} height={50} /> */}
        </button>
      </Container>
    </FixedContainer>
  );
}
