import styled from "styled-components";

export const Container = styled.div`
  padding: 3rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 3.3rem;
  /* background: ${(props) => props.theme.editorStorm}; */
  /* position: fixed; */
  z-index: 3;
`;

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-around;
  width: 50%;
  z-index: 3;
  border-radius: 5px;
`;

export const Navigation = styled.a`
  padding: 5px;
  z-index: 3;
  color: ${(props) => props.theme.editorBlueSky};
  margin-right: 5px;

    &:hover {
    color: ${(props) => props.theme.editorTerminalBlue};
    }

`;



