import {Container , Form, StyledH1, TextArea, Button} from '../../styles/components/Contact/styles'
import Input from '../../components/Input'
import { useState } from 'react'

export default function Contact () {

  const [message, setMessage] = useState('')

  return (
    <Container>
      <StyledH1>Entre em contato:</StyledH1>
      <Form>
        <Input
          label='Nome'
          type='text'
          id="name"
          name="name"
          placeholder=" "
        />
        <Input
          label='Email'
          type='email'
          id="email"
          name="email"
          placeholder=" "
        />
        <TextArea
          maxLength={500}
          placeholder="Digete sua mensagem ..."
          onChange={(e) => setMessage(e.target.value)}
        ></TextArea>
        <Button type="button" >Enviar</Button>
        <h2>{ message }</h2>
      </Form>
    </Container>
  )
}