import {
  Navigation,
  HeaderContainer,
  Container
} from '../../styles/components/Header/styles'
import portfolioSVG from '../../assets/svgs/portfolio-my-profile-browser-svgrepo-com.svg'
import Image from 'next/image';
import myImg from '../../assets/imgs/luiz-sameiro-copy.jpg'
import { useRef } from 'react';

export default function Header() {

  const sectionRef = useRef<HTMLDivElement>(null);

  const handleAnchorClick = () => {
    if (sectionRef.current) {
      sectionRef.current.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
        inline: 'nearest',
      });
    }
  };

  return (
  <Container>
    <Image src={portfolioSVG} alt={"portfolioSVG"} height={50} width={50}/>
    <HeaderContainer>
      <Navigation href='#inicio'>Início</Navigation>
      <Navigation href='#sobre'>Sobre mim</Navigation>
      <Navigation href='#projetos'>Projetos</Navigation>
      <Navigation href='#contato'>Contato</Navigation>
    </HeaderContainer>
  </Container>
  );
}