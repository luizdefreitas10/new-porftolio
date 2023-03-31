import styled from "styled-components";

export const Container = styled.div`
  width: 80%;
  margin: 0 auto;
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 30%;
  background-color: ${(props) => props.theme.editorStorm};
  gap: 1rem;
  border-radius: 10px;

  & p {
    margin-top: 13px;
    background-color: ${(props) => props.theme.editorStorm};
    color: ${(props) => props.theme.editorBlueSky}
  }

  & li {
    color: ${(props) => props.theme.editorOrange1};
    background-color: ${(props) => props.theme.editorStorm};
  }
`;

export const CardContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 2rem;
  flex-wrap: wrap;
  margin-top: 20px;
`;

export const StyledH1 = styled.h1`
  font-size: medium;
  color: ${(props) => props.theme.editorKeywords};
`;

export const ProjectContainer = styled.div`
  margin-top: 40px;
`;