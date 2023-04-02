import React, { useState } from 'react';
import styled from 'styled-components';
import {Container, InputField, InputLabel} from '../../styles/components/Input/styles'



interface GmailInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

const GmailInput: React.FC<GmailInputProps> = ({ label, ...props }) => {
  const [id] = useState(`input-${Math.random().toString(36).substr(2, 9)}`);

  return (
    <Container>
      <InputField id={id} {...props} required />
      <InputLabel htmlFor={id}>{label}</InputLabel>
    </Container>
  );
};

export default GmailInput;