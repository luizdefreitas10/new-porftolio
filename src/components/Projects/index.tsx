import {Card, Container, CardContainer, StyledH1, Button} from '../../styles/components/Projects/styles'
import { mockData } from '@/mocks/Projects';
import Image from 'next/image';

export default function Projects () {
  return (
    <Container>
      <StyledH1>Veja alguns dos meus projetos:</StyledH1>
      <CardContainer>
        { mockData.map((project) => {
          return <Card key={project.id}>
            <p>{project.name}</p>
            <Image src={project.src} alt={project.name} width={200} height={200}/>
            <ul>
              { project.stacks.map((stack) => {
                return <li key={stack}>{stack}</li>
              }) }
            </ul>
            <Button>Veja aqui</Button>
          </Card>
        }) }
      </CardContainer>
    </Container>
  );
}