import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  margin: 0 auto;
  margin-bottom: 5rem;
  padding-top: 3rem;
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
  border: none;
  background-color: ${(props) => props.theme.editorStorm};
  height: 5rem;
  margin-top: 1rem;
  box-shadow: 1px 1px 2px #000;

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
  margin-top: 1rem;
  font-size: 0.8rem;

  &:hover {
    background-color: ${(props) => props.theme.editorTerminalBlue};
    color: ${(props) => props.theme.editorBlack};
  }
`;