import {
  Navigation,
  HeaderContainer,
  Container
} from '../../styles/components/Header/styles'
import portfolioSVG from '../../assets/svgs/portfolio-my-profile-browser-svgrepo-com.svg'
import Image from 'next/image';
import myImg from '../../assets/imgs/luiz-sameiro-copy.jpg'

export default function Header() {
  return (
  <Container>
    <Image src={portfolioSVG} alt={"portfolioSVG"} height={50} width={50}/>
    <HeaderContainer>
      <Navigation>Início</Navigation>
      <Navigation>Sobre mim</Navigation>
      <Navigation>Projetos</Navigation>
      <Navigation>Contato</Navigation>
    </HeaderContainer>
  </Container>
  );
}