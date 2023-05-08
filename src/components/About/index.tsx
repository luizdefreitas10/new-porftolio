import aboutMeText from "../../mocks/About";
import { homeText } from "../../mocks/About/";
import Image from "next/image";
import hackerImg from "../../assets/imgs/hacker.jpeg";
import {
  Container,
  StyledImg,
  ContentContainer,
  Navigation,
  NavigationContainer,
  NavContainer,
  YellowFlyingLogo,
  FlyingLogo,
  BlueSkyFlyingLogo,
  MainContainer,
  StyledH1,
  WavyDiv
} from "../../styles/components/About/styles";
import gitHubIcon from "../../assets/svgs/github-white.svg";
import linkedinIcon from "../../assets/svgs/linkedin.svg";
import portfolioIcon from "../../assets/svgs/iconmonstr-briefcase-13.svg";
import yellowFlyingLogo from "../../assets/svgs/tag-orange2.png";
import redFlyingLogo from "../../assets/svgs/tag-red.png";
import blueSkyFlyingLogo from "../../assets/svgs/tag-bluesky.png";
// import blueSkyFlyingLogo from "../../../public/tag-bluesky_preview_rev_1.png";

export default function About() {
  return (
    // <MainContainer>
    <Container id="inicio">
      <ContentContainer>
        <StyledH1>Olá, eu sou</StyledH1>
        <span>Luiz de Freitas</span>
        <p>{homeText}</p>
        <NavContainer>
          <NavigationContainer>
            <Navigation
              href="https://github.com/luizdefreitas10"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src={gitHubIcon}
                alt={"github icon"}
                width={30}
                height={30}
              />
              GitHub
            </Navigation>
          </NavigationContainer>
          <NavigationContainer>
            <Navigation
              href="https://www.linkedin.com/in/luiz-de-freitas-lima-neto/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src={linkedinIcon}
                alt={"linkedin icon"}
                width={30}
                height={30}
              />
              LinkedIn
            </Navigation>
          </NavigationContainer>
          <NavigationContainer>
            <Navigation
              href="https://github.com/luizdefreitas10/new-porftolio"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/white-portfolio.png"
                alt={"portfolio icon"}
                width={30}
                height={30}
              />
              Portfolio
            </Navigation>
          </NavigationContainer>
        </NavContainer>
      </ContentContainer>
      <FlyingLogo
        src={redFlyingLogo}
        alt={"flying-logo"}
        width={60}
        height={60}
      />
      <YellowFlyingLogo
        src={yellowFlyingLogo}
        alt={"flying-logo"}
        width={70}
        height={70}
      />
      <BlueSkyFlyingLogo
        src={blueSkyFlyingLogo}
        alt={"flying-logo"}
        width={70}
        height={70}
      />
      {/* <Image src='/src/assets/imgs/hacker.jpeg' alt={'hacker coding'} width={350} height={350} /> */}
      {/* < WavyDiv /> */}
      <StyledImg
        src="/nobg-luiz-2.png"
        alt={"coding"}
        width={350}
        height={400}
        priority
      />
    </Container>

    // </MainContainer>
  );
}
