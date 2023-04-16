import {
  aboutMeFirstText,
  aboutMeSecondText,
  aboutMeThirdText,
  contentItems,
} from "../../mocks/About";
import {
  StyledText,
  Container,
  LinksContainer,
  StyledH1,
  IdContainer,
} from "../../styles/components/AboutMe/styles";
import emailIcon from "../../assets/svgs/email.svg.svg";
import CurriculumIcon from "../../assets/svgs/curriculo.svg";
import Image from "next/image";

const listItems = [
  "Python",
  "Redes e raspagem de dados",
  "Algoritmos",
  "Estrutura de dados I: Arrays, Listas, Filas e Pilhas",
  "Arquitetura de computadores",
  "Estrutura de dados II: Hashmaps e Sets;",
];

export default function AboutMe() {
  return (
    <IdContainer id="sobre">
      <Container>
        <StyledH1>Sobre mim: </StyledH1>
        <StyledText>{aboutMeFirstText}</StyledText>{" "}
        <StyledText>{aboutMeSecondText}</StyledText>{" "}
        <ul>
          {listItems.map((item) => {
            return <li key={item}>{item}</li>;
          })}
          <li></li>
        </ul>{" "}
        <StyledText>{aboutMeThirdText}</StyledText>
      </Container>
      <LinksContainer>
        <a
          href="/curriculo-dev-luiz-2023-att.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src={CurriculumIcon}
            alt={"icon curriculum"}
            width={30}
            height={30}
          />
          Currículo
        </a>
        <a
          href="mailto:luizdefreitas10@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image src={emailIcon} alt={"emailIcon"} width={30} height={30} />
          Email
        </a>
      </LinksContainer>
    </IdContainer>
  );
}
