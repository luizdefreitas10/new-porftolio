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
  NavContainer
} from '../../styles/components/About/styles'
import gitHubIcon from '../../assets/svgs/iconmonstr-github-1.svg'
import linkedinIcon from '../../assets/svgs/iconmonstr-linkedin-3.svg'
import portfolioIcon from '../../assets/svgs/iconmonstr-briefcase-13.svg'


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
      <StyledImg src='https://i.pinimg.com/originals/fa/12/29/fa1229e368827a0f56df5b856e42d00a.jpg' alt={'hacker coding'} width={350} height={450} />
    </Container>
  );
}