import { aboutMeFirstText, aboutMeSecondText, aboutMeThirdText } from '../../mocks/About'
import {
  StyledText,
  Container,
  LinksContainer
} from '../../styles/components/AboutMe/styles'

export default function AboutMe() {
  return (
    <>
      <Container>
        <StyledText>{aboutMeFirstText}</StyledText>
        <StyledText>{aboutMeSecondText}</StyledText>
        <StyledText>{aboutMeThirdText}</StyledText>
      </Container>
      <LinksContainer>
        <a>aqui o link</a>
      </LinksContainer>
    </>
  );
}
