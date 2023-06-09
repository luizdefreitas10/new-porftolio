import styled from "styled-components";
import Image from "next/image";
import IconComputer from '../../../../public/icon-computer.png'


export const StyledText = styled.p`
  color: ${(props) => props.theme.editorStrings};
`;

export const Container = styled.div`
 text-align: justify;
 width: 80%;
 margin: 0 auto;
 margin-top: 2rem;

 background-color: ${(props) => props.theme.editorBackground};

 & p {
  margin-bottom: 10px;
 }

 & ul {
  margin-bottom: 10px;
 }

 & li {
  line-height: 1.3rem;
  color: ${(props) => props.theme.editorStrings}
 }

`;

export const LinksContainer = styled.div`
  width: 80%;
  margin: 0 auto;
  display: flex;
  justify-content: space-around;
  gap: 1.5rem;
  /* background-color: red; */
  padding: 10px;

  & a {
    display: flex;
    flex-direction: row;
    align-items: center;
    /* justify-content: center; */
    margin-right: 10px;
    color: ${(props) => props.theme.editorBlueSky};

    &:hover {
      color: ${(props) => props.theme.editorTerminalBlue};
    }
  }
`;

export const StyledH1 = styled.h1`
  width: 80%;
  font-size: 1.5rem;
  color: ${(props) => props.theme.editorKeywords};
  margin-bottom: 1rem;
`;

export const IdContainer = styled.div`
  padding-top: 3rem;
  overflow-x: hidden;
  width: 100%;
  background-image: url(IconComputer);
  z-index: 99;
`;

export const DataAosContainer = styled.div`
  display: flex;

  `