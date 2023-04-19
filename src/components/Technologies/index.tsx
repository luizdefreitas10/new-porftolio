import Image from 'next/image'
import typescriptIcon from '../../assets/svgs/typescript.svg'
import javascriptIcon from '../../assets/svgs/javascript.svg'
import nextjsIcon from '../../assets/svgs/nextjs-icon.svg'
import reactIcon from '../../assets/svgs/react-icon.svg'
import dockerIcon from '../../assets/svgs/docker.svg'
import vuejsIcon from '../../assets/svgs/vuejs.svg'
import mysqlIcon from '../../assets/svgs/mysql.svg'
import postgresqlIcon from '../../assets/svgs/postgresql.svg'
import mongodbIcon from '../../assets/svgs/mongodb.svg'
import sequelizeIcon from '../../assets/svgs/sequelize.svg'
import pythonIcon from '../../assets/svgs/python.svg'
import djangoIcon from '../../assets/svgs/django.svg'
import nodejsIcon from '../../assets/svgs/nodejs.svg'
import { Container, StyledH1, BigContainer } from '../../styles/components/Technologies/styles'

export default function Technologies () {
  return (
    <BigContainer>
      <StyledH1>Estas são algumas das tecnologias que tenho trabalhado:</StyledH1>
      <Container>
        <Image src={nodejsIcon} alt={"typescript"} height={90} width={90} />
        <Image src={typescriptIcon} alt={"typescript"} height={90} width={90}/>
        <Image src={javascriptIcon} alt={"javascript"} height={90} width={90}/>
        <Image src={nextjsIcon} alt={"javascript"} height={90} width={90}/>
        <Image src={reactIcon} alt={"javascript"} height={90} width={90}/>
        <Image src={vuejsIcon} alt={"javascript"} height={90} width={90}/>
        <Image src={dockerIcon} alt={"javascript"} height={90} width={90}/>
        <Image src={mysqlIcon} alt={"javascript"} height={90} width={90}/>
        <Image src={postgresqlIcon} alt={"javascript"} height={90} width={90}/>
        <Image src={mongodbIcon} alt={"javascript"} height={90} width={90}/>
        <Image src={sequelizeIcon} alt={"javascript"} height={90} width={90}/>
        <Image src={pythonIcon} alt={"javascript"} height={90} width={90}/>
        <Image src={djangoIcon} alt={"javascript"} height={90} width={90}/>
      </Container>

    </BigContainer>
  );
}
