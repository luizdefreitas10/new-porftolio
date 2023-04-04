import {
  Navigation,
  HeaderContainer,
  Container,
} from "../../styles/components/Header/styles";
import portfolioSVG from "../../assets/svgs/portfolio-my-profile-browser-svgrepo-com.svg";
import Image from "next/image";
import { Link, Element } from "react-scroll";

export default function Header() {
  return (
    <Container>
      <Image src={portfolioSVG} alt={"portfolioSVG"} height={50} width={50} />
      <HeaderContainer>
        <Element name="inicio">
          <Navigation href="#inicio">Início</Navigation>
        </Element>
        <Element name="sobre">
          <Navigation href="#sobre">Sobre mim</Navigation>
        </Element>
        <Element name="projetos">
          <Navigation href="#projetos">Projetos</Navigation>
        </Element>
        <Element name="contato">
          <Navigation href="#contato">Contato</Navigation>
        </Element>
      </HeaderContainer>
    </Container>
  );
}
