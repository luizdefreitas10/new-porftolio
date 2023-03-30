import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 3.3rem;
`;

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-around;
  width: 50%;
`;

export const Navigation = styled.a`
  color: ${(props) => props.theme.editorTerminal};

    &:hover {
    color: white;
    }

`;



