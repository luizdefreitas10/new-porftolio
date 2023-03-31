import {Card, Container, CardContainer, StyledH1} from '../../styles/components/Projects/styles'
import { mockData } from '@/mocks/Projects';
import Image from 'next/image';

export default function Projects () {
  return (
    <Container>
      <StyledH1>Veja alguns dos meus projetos:</StyledH1>
      <CardContainer>
        { mockData.map((project) => {
          return <Card>
            <p>{project.name}</p>
            <Image src={project.src} alt={project.name} width={200} height={200}/>
            <ul>
              { project.stacks.map((stack) => {
                return <li>{stack}</li>
              }) }
            </ul>
            <button>Veja aqui</button>
          </Card>
        }) }
      </CardContainer>
    </Container>
  );
}