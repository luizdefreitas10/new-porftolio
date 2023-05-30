import styled from "styled-components";
import Image from "next/image";


export const StyledSg = styled.div`
    display: none;

  @media (${(props) => props.theme.breaks.mobile}) {
    display: flex;
    cursor: pointer;
  }
`;


export const Container = styled.div`
  padding: 3rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 3.3rem;
  background: ${(props) => props.theme.editorBackground};
  z-index: 3;
  width: 100%;
  box-shadow: 1px 1px 2px;

  & button {
    /* border-radius: 50%; */
    background-color: transparent;
    /* box-shadow: 1px 1px 2px black; */
    border: none;
  }


  @media (${(props) => props.theme.breaks.mobile}) {
    justify-content: space-evenly;
  }
`;

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-around;
  width: 50%;
  z-index: 3;
  border-radius: 5px;

  @media (${(props) => props.theme.breaks.mobile}) {
    display: none;
  }
`;

export const Navigation = styled.a`
  padding: 5px;
  z-index: 3;
  color: ${(props) => props.theme.editorBlueSky};
  margin-right: 5px;

    &:hover {
    color: ${(props) => props.theme.editorTerminalBlue};
    }

    @media (${(props) => props.theme.breaks.mobile}) {
      display: none;
    }

`;

export const FixedContainer = styled.div`

  width: 100%;

  position: fixed;
  z-index: 6;

  top: 0;
  left: 0;
  right: 0;

  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  z-index: 1000;
  /* height: 60px; */
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 1s ease-in-out;
  margin-bottom: 9rem;

  &.hidden {
    transform: translateY(-100%);
  }
`;


export const Main = styled.main`

`;

export const StyledSvg = styled(Image)`
  cursor: pointer;
`;

export const StyledMenuDiv = styled.div`
  background-color: yellow;
  z-index: 99999;
  /* width: 100%;
  height: 100%; */
`;