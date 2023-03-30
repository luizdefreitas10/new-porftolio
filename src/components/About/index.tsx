import aboutMeText from '../../mocks/About'
import { homeText } from '../../mocks/About/'
import Image from 'next/image';
import hackerImg from '../../assets/imgs/hacker.jpeg'
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
} from '../../styles/components/About/styles'
import gitHubIcon from '../../assets/svgs/iconmonstr-github-1.svg'
import linkedinIcon from '../../assets/svgs/iconmonstr-linkedin-3.svg'
import portfolioIcon from '../../assets/svgs/iconmonstr-briefcase-13.svg'
import yellowFlyingLogo from '../../assets/svgs/tag-orange2.svg'
import redFlyingLogo from '../../assets/svgs/tag-red.svg'
import blueSkyFlyingLogo from '../../assets/svgs/tag-bluesky.svg'


export default function About() {
  return (
    <Container>
      <ContentContainer>
        <h1>Olá, eu sou</h1>
        <span>Luiz de Freitas</span>
        <p>{homeText}</p>
        <NavContainer>
          <NavigationContainer>
            <Navigation>
              <Image src={gitHubIcon} alt={'github icon'} width={30} height={30}/>
              GitHub
            </Navigation>
          </NavigationContainer>
          <NavigationContainer>
            <Navigation>
              <Image src={linkedinIcon} alt={'linkedin icon'} width={30} height={30} />
              LinkedIn</Navigation>
          </NavigationContainer>
          <NavigationContainer>
            <Navigation>
              <Image src={portfolioIcon} alt={'portfolio icon'} width={30} height={30} />
              Portfolio
            </Navigation>
          </NavigationContainer>
        </NavContainer>
      </ContentContainer>
      <FlyingLogo src={redFlyingLogo} alt={'flying-logo'} width={50} height={50} />
      <YellowFlyingLogo src={yellowFlyingLogo} alt={'flying-logo'} width={50} height={50} />
      <BlueSkyFlyingLogo src={blueSkyFlyingLogo} alt={'flying-logo'} width={50} height={50} />
      {/* <Image src='/src/assets/imgs/hacker.jpeg' alt={'hacker coding'} width={350} height={350} /> */}
      <StyledImg src='/luiz-sameiro-copy.jpeg' alt={'coding'} width={350} height={350} priority/>
    </Container>
  );
}