import styled from "styled-components";

export const Container = styled.div`
  top: 0;
  height: 100%;
  width: 100%;
  /* background-color: ${(props) => props.theme.editorBackground}; */
  position: absolute;
  transition: 0.4s;
  `;

export const MenuContainer = styled.div<{ isOpen: boolean }>`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  position: fixed;
  /* right: ${({ isOpen }) => (isOpen ? '0' : '100')}; */
  top: 120px;
  z-index: 9;
  background-color: rgba(0, 0, 0, 0.4);
  transition: 0.4s;
`;

export const Nav = styled.a<{ isOpen: boolean }>`
  width: 100%;
  padding: 10px;
  color: ${(props) => props.theme.editorBlueSky};
  z-index: 9;
  display: flex;
  justify-content: start;
  /* margin-left: 50%; */
  background-color: ${(props) => props.theme.editorBackground};
  transition: 0.4s;
  -webkit-transition: 0.4s;
  box-shadow: 1px 1px 1px 1px black;
  border-radius: 5px;

  &:hover {
    color: ${(props) => props.theme.editorBackground};
    background-color: ${(props) => props.theme.editorTerminalBlue};
  }
`;

export const UlContainer = styled.div<{ isOpen: boolean }>`
  height: 100%;
  width: 50%;
  background-color: ${(props) => props.theme.editorBackground};
  display: flex;
  flex-direction: column;
  position: absolute;
  right: ${({ isOpen }) => (isOpen ? '0' : '-100%')};
  transition: right 0.4s;
  -webkit-transition: right 0.4s;
  box-shadow: 2px 2px 3px 2px black;
`;

export const Li = styled.li`
  border-radius: 5px;
  transition: 0.4s;

  &:hover{
    background-color: ${(props) => props.theme.editorTerminalBlue};
  }

  & a {
    &:hover {
      color: ${(props) => props.theme.editorBackground}
    }
  }
`;
