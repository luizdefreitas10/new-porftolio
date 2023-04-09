import {
  Navigation,
  HeaderContainer,
  Container,
  StyledSvg
} from "../../styles/components/Header/styles";
import portfolioSVG from "../../assets/svgs/portfolio-my-profile-browser-svgrepo-com.svg";
import Image from "next/image";
import { Link, Element } from "react-scroll";
import { useRouter } from "next/router";
import ThemeButton from "../ThemeButton";

export default function Header() {

  const router = useRouter();

  return (
    <Container>
      <StyledSvg src={portfolioSVG} alt={"portfolioSVG"} height={50} width={50} onClick={() => router.push('/')}/>
      <HeaderContainer>
        <Navigation href="#inicio">Início</Navigation>

        <Navigation href="#sobre">Sobre mim</Navigation>

        <Navigation href="#projetos">Projetos</Navigation>

        <Navigation href="#contato">Contato</Navigation>
      </HeaderContainer>
      <ThemeButton />
    </Container>
  );
}
