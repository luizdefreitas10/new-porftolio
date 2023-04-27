import styled from "styled-components";

export const Container = styled.div`
  height: 100%;
  width: 100%;
  background-color: ${(props) => props.theme.editorBackground};
  `;

export const MenuContainer = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  position: fixed;
  right: 0;
  z-index: 9;
`;

export const Nav = styled.a`
  padding: 10px;
  background-color: ${(props) => props.theme.editorStorm};
  color: ${(props) => props.theme.editorBlueSky};
  z-index: 9;
  display: flex;
  justify-content: start;

  &:hover {
    color: ${(props) => props.theme.editorLittleSky};
  }
`;