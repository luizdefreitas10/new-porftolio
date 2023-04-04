import styled from 'styled-components'

export const Container = styled.div`
  position: relative;
  margin: 0.9rem 0;
`;


export const InputField = styled.input`
  border-radius: 5px;
  border: none;
  color: ${(props) => props.theme.editorOrange2};
  background-color: ${(props) => props.theme.editorStorm};
  /* border-bottom: 1px solid #ccc; */
  font-size: 0.8rem;
  width: 100%;
  padding: 0.8rem 0;
  padding-left: 0.8rem;
  outline: none;

  &:focus,
  &:not(:placeholder-shown) {
    + label {
      top: -1.5rem;
      font-size: 14px;
    }
  }
`;


export const InputLabel = styled.label`
  position: absolute;
  left: 0;
  top: 0.5rem;
  font-size: 0.8rem;
  color: ${(props) => props.theme.editorTerminalBlue};
  background-color: transparent;
  transition: all 0.4s ease;
  padding-left: 0.6rem;
`;