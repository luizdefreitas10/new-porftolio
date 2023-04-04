import styled from "styled-components";

export const Container = styled.div`
  /* background-color: ${(props) => props.theme.editorKeywords}; */
  color: ${(props) => props.theme.editorLittleSky};
  text-align: center;
  font-size: 0.4rem;
  /* padding: 2rem; */
  /* height: 2rem; */

  & h1 {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 2rem;
    background-color: ${(props) => props.theme.editorStorm};
    border-radius: 5px;
  }

  & span {
    margin-left: 5px;
    background-color: ${(props) => props.theme.editorStorm};
    color: ${(props) => props.theme.editorOrange2}
  }
`;