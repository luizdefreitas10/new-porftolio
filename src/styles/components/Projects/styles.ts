import styled from "styled-components";

export const Container = styled.div`
  width: 80%;
  margin: 0 auto;
  margin-bottom: 5rem;
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  
  height: 19rem;
  width: 30%;
  background-color: ${(props) => props.theme.editorStorm};
  gap: 1rem;
  border-radius: 10px;

  & img {
    width: 100px;
    height: 100px;
    border-radius: 3px;
  }

  & p {
    margin-top: 13px;
    background-color: ${(props) => props.theme.editorStorm};
    color: ${(props) => props.theme.editorBlueSky}
  }

  & li {
    color: ${(props) => props.theme.editorOrange1};
    background-color: ${(props) => props.theme.editorStorm};
    flex-wrap: wrap;
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
  font-size: 1.5rem;
  color: ${(props) => props.theme.editorKeywords};
`;

export const ProjectContainer = styled.div`
  margin-top: 40px;
`;

export const ProjectNavigate = styled.a`
  border: none;
  border-radius: 5px;
  background-color: ${(props) => props.theme.editorBlueSky};
  color: ${(props) => props.theme.editorLittleSky};
  padding: 7px;
  font-size: 0.8rem;

  &:hover {
    background-color: ${(props) => props.theme.editorTerminalBlue};
    color: ${(props) => props.theme.editorBlack};

  }
`;