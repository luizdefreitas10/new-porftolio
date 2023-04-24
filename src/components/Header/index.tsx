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

import { useEffect, useState } from "react";

export default function Header() {
  const router = useRouter();

  const [lastScrollTop, setLastScrollTop] = useState(0);
  const [hidden, setHidden] = useState(false);

  const [hamburguer, setHambhurguer] = useState(false);

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
          // onClick={() => setHambhurguer(!hamburguer)}
        />

        { hamburguer && (
          <StyledMenuDiv>Cliquei</StyledMenuDiv>
        ) }

        <HeaderContainer>
          <Navigation onClick={scrollToTop}>Início</Navigation>

          <Navigation href="#sobre">Sobre mim</Navigation>

          <Navigation href="#projetos">Projetos</Navigation>

          <Navigation href="#contato">Contato</Navigation>
        </HeaderContainer>
      </Container>
    </FixedContainer>
  );
}
