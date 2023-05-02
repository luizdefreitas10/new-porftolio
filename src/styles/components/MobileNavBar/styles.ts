import styled from "styled-components";

export const Container = styled.div`
  top: 0;
  height: 100%;
  width: 100%;
  /* background-color: ${(props) => props.theme.editorBackground}; */
  position: absolute;
  `;

export const MenuContainer = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  position: fixed;
  right: 0;
  top: 120px;
  z-index: 9;
  background-color: ${(props) => props.theme.editorStorm};
  box-shadow: 2px 2px 3px;
`;

export const Nav = styled.a`
  padding: 10px;
  background-color: ${(props) => props.theme.editorStorm};
  color: ${(props) => props.theme.editorBlueSky};
  z-index: 9;
  display: flex;
  justify-content: start;

  &:hover {
    /* background-color: ${(props) => props.theme.editorLittleSky}; */
    color: ${(props) => props.theme.editorLittleSky};
  }
`;