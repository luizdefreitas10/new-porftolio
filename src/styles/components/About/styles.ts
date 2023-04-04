import styled from "styled-components";
import Image from "next/image";

export const MainContainer = styled.div`
  width: 100%;
  height: rem;
  background-color: ${(props) => props.theme.editorBlack};
  padding: 10px 0;
`;

export const Container = styled.div`
border-radius: 5px;
  display: flex;
  /* background-color: ${(props) => props.theme.editorStorm}; */
  width: 80%;
  margin: 0 auto;
  margin-top: 30px;
  align-items: center;
  justify-content: space-around;

  & li {
    color: ${(props) => props.theme.editorStrings}
  }

  @media (${(props) => props.theme.breaks.customBreak}) {
    /* background-color: red; */
    display: flex;
    flex-direction: column;

    & img {
      margin: 1rem 0;

    }

  }
`;

export const StyledImg = styled(Image)`
  border-radius: 5px;
  z-index: 3;
  /* box-shadow: -2px 3px 3px ${(props) => props.theme.editorKeywords}; */
  box-shadow: -2px 2px 2px black;
`;

export const ContentContainer = styled.div`
  color: ${(props) => props.theme.productLight1};
  z-index: 3;
  display: flex;
  flex-direction: column;
  gap: 0.8rem;

  & p {
    color: ${(props) => props.theme.editorOrange2};;
    width: 80%;
    text-align: justify;
    z-index: 3;
  }

  & span {
    font-size: 3.5rem;
    color: ${(props) => props.theme.editorKeywords};
    position: relative;
    display: inline-block;

    &::before {
      content: '';
      position: absolute;
      top: 50%;
      left: 3%;
      right: 20%;
      height: 4px;
      border-radius: 5px;
      background-color: ${(props) => props.theme.productLight5};
    }
  }

  @media (${(props) => props.theme.breaks.customBreak}) {
    align-items:  center;
    justify-content: center;
  }

`;

export const Navigation = styled.a`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: ${(props) => props.theme.editorBlueSky};

  &:hover {
    color: ${(props) => props.theme.editorTerminalBlue};
  }
`;



export const NavigationContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const NavContainer = styled.div`
  width: 350px;
  display: flex;
  justify-content: space-between;
  z-index: 2;
`;

export const YellowFlyingLogo = styled(Image)`

  @keyframes float {
      0% {
        transform: translateY(0);
      }
      50% {
        transform: translateY(-150px);
      }
      100% {
        transform: translateY(0);
      }
    }

  animation: float 5s ease-in-out infinite;
  position: absolute;
  right: 39%;
  top: 50%;
  opacity: 1;

  @media (${(props) => props.theme.breaks.customBreak}) {
    /* display: none; */
    right: 89%;
  }
  /* z-index: 1; */

`;

export const FlyingLogo = styled(Image)`
  @keyframes float {
        0% {
          transform: translateY(0);
        }
        50% {
          transform: translateY(-150px);
        }
        100% {
          transform: translateY(0);
        }
      }

  animation: float 5s ease-in-out infinite;
  position: absolute;
  /* right: 29%; */
  top: -15%;
  opacity: 1;

  @media (${(props) => props.theme.breaks.customBreak}) {
    display: none;
  }
  /* z-index: 1; */
`;

export const BlueSkyFlyingLogo = styled(Image)`
  @keyframes float {
        0% {
          transform: translateY(0);
        }
        50% {
          transform: translateY(150px);
        }
        100% {
          transform: translateY(0);
        }
      }

  animation: float 5s ease-in-out infinite;
  position: absolute;
  left: 4%;
  top: 50%;
  opacity: 1;

  @media (${(props) => props.theme.breaks.customBreak}) {
    /* display: none; */
    left: 89%;
  }
  /* z-index: 1; */
`;