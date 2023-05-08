import styled from "styled-components";

export const Container = styled.div`
  top: 0;
  height: 100%;
  width: 100%;
  /* background-color: ${(props) => props.theme.editorBackground}; */
  position: absolute;
  `;

export const MenuContainer = styled.div<{ isOpen: boolean }>`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  position: fixed;
  right: 0;
  top: 120px;
  z-index: 9;
  /* background-color: ${(props) => props.theme.editorStorm}; */
  /* background-color: blue; */
  background-color: rgba(0, 0, 0, 0.4);
  transform: ${({ isOpen }) => (isOpen ? 'translateX(0)' : 'translateX(100%)')};
  transition: transform 1s ease 0s;
`;

export const Nav = styled.a`
  width: 50%;
  padding: 10px;
  /* background-color: ${(props) => props.theme.editorStorm}; */
  color: ${(props) => props.theme.editorBlueSky};
  z-index: 9;
  display: flex;
  justify-content: start;

  &:hover {
    /* background-color: ${(props) => props.theme.editorLittleSky}; */
    color: ${(props) => props.theme.editorLittleSky};
  }
`;

export const UlContainer = styled.ul`
  height: 100%;
  width: 50%;
  /* background-color: red; */
  background-color: ${(props) => props.theme.editorBackground};
  display: flex;
  flex-direction: column;
  position: absolute;
  right: 0;
  box-shadow: 2px 2px 3px 2px black;

`;

export const Li = styled.li`
  /* background-color: red; */
  border-radius: 5px;

  &:hover{
    background-color: ${(props) => props.theme.editorTerminalBlue};
    /* color: ${(props) => props.theme.editorBackground}; */
  }

  & a {
    &:hover {
      color: ${(props) => props.theme.editorBackground}
    }
  }
`;
