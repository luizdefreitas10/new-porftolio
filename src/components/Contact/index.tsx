import {Container , Form, StyledH1, TextArea, Button} from '../../styles/components/Contact/styles'
import Input from '../../components/Input'
import { FormEvent, useState, ChangeEvent } from 'react'
import database from '@/firebaseConfig'
import React from 'react';

import { toast } from 'react-toastify';

export default function Contact () {

  const [name, setName] = useState<string>('')
  const [email, setEmail] = useState<string>('')
  const [message, setMessage] = useState<string>('')

  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    console.log('cliquei')

    // Salve os dados no banco de dados Firebase
    database
      .ref('messages')
      .push({
        name,
        email,
        message,
      })
      .then(() => {
        // Limpe os campos do formulário após o envio
        setName(' ');
        setEmail(' ');
        setMessage('');
        // Mostre uma mensagem de sucesso ou execute outras ações
        toast.success("Sua mensagem foi enviada com sucesso. Obrigado!", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored"
        })
      })
      .catch((error) => {
        // Mostre uma mensagem de erro ou execute outras ações
        toast.error('Erro ao enviar mensagem:', error);
      });
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, setState: React.Dispatch<React.SetStateAction<string>>): void => {
    setState(e.target.value)
  };

  return (
    <Container id="contato">
      <StyledH1>Entre em contato:</StyledH1>
      <Form onSubmit={handleSubmit}>
        <Input
          label='Nome'
          type='text'
          id="name"
          name="name"
          placeholder=" "
          onChange={(e) => handleChange(e, setName)}
        />
        <Input
          label='Email'
          type='email'
          id="email"
          name="email"
          placeholder=" "
          onChange={(e) => handleChange(e, setEmail)}
        />
        <TextArea
          maxLength={500}
          placeholder="Digete sua mensagem ..."
          value={message}
          onChange={(e) => handleChange(e, setMessage)}
        ></TextArea>
        <Button type="submit" >Enviar</Button>
        {/* <h2>{ message }</h2> */}
      </Form>
    </Container>
  )
}