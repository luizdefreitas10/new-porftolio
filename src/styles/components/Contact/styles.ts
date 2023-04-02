import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  margin: 0 auto;
  margin-bottom: 5rem;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  /* margin-top: 1rem; */
`;

export const StyledH1 = styled.h1`
  width: 80%;
  font-size: 1.5rem;
  color: ${(props) => props.theme.editorKeywords};
  margin-bottom: 1rem;
`;

export const TextArea = styled.textarea`
  color: ${(props) => props.theme.editorOrange2};
  padding: 10px;
  border-radius: 5px;
  background-color: ${(props) => props.theme.editorStorm};
  height: 5rem;

  &::placeholder {
    font-size: 0.9rem;
    color: ${(props) => props.theme.editorTerminalBlue}
  }
`;

export const Button = styled.button`
  height: 2rem;
  background-color: ${(props) => props.theme.editorBlueSky};
  color: ${(props) => props.theme.editorLittleSky};
  border-radius: 5px;
  border: none;
  width: 4rem;
`;