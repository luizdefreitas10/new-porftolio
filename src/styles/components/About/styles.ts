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

  width: 80%;
  margin: 0 auto;
  margin-top: 30px;
  align-items: center;
  justify-content: space-around;

  & li {
    color: ${(props) => props.theme.editorStrings}
  }

  @media (${(props) => props.theme.breaks.customBreak}) {

    display: flex;
    flex-direction: column;

    & img {
      margin: 1rem 0;

    }

  }
`;

export const StyledH1 = styled.h1`
  color: ${(props) => props.theme.editorLittleSky};
`;

export const StyledImg = styled(Image)`
  border-radius: 5px;
  z-index: 3;
  /* box-shadow: -2px 3px 3px ${(props) => props.theme.editorKeywords}; */
  /* box-shadow: -2px 2px 2px black; */
`;

export const ContentContainer = styled.div`
  z-index: 3;
  display: flex;
  flex-direction: column;
  gap: 0.8rem;

  & p {
    color: ${(props) => props.theme.editorStrings};;
    width: 80%;
    text-align: justify;
    z-index: 3;
  }

  & span {
    font-size: 3.5rem;
    color: ${(props) => props.theme.editorKeywords};
    position: relative;
    display: flex;
    /* background-color: green; */

    &::before {
      content: '';
      position: absolute;
      top: 50%;
      left: 3%;
      right: 20%;
      height: 4px;
      border-radius: 5px;
      background-image: linear-gradient(
    to left,
    ${(props) => props.theme.editorTerminalBlue},
    ${(props) => props.theme.editorBlueSky},
    ${(props) => props.theme.editorLittleSky}
  );
    }

    @media (${(props) => props.theme.breaks.minimobile}) {
      text-align: center;
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
  /* background-color: green; */
  /* width: 350px; */
  width: 80%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  z-index: 2;
  gap: 1.5rem;
  /* background-color: red; */

  @media (${(props) => props.theme.breaks.minimobile}) {
    /* display: flex;
    flex-direction: column; */
    /* flex-wrap: wrap; */
  }
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
  z-index: 1;

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
  right: 42%;
  top: -15%;
  opacity: 1;

  @media (${(props) => props.theme.breaks.customBreak}) {
    display: none;
  }
  z-index: 1;
`;

export const BlueSkyFlyingLogo = styled(Image)`
  backdrop-filter: blur( 2.5px );
  -webkit-backdrop-filter: blur( 2.5px );
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
    left: 89%;
  }
`;

export const WavyDiv = styled.div`
 width: 400px;
  height: 300px;
  background-color: #f0f0f0;
  clip-path: path('M 0 60 Q 40 100 80 60 T 200 60 T 320 60 T 400 60 Q 400 110 400 150 Q 400 220 380 260 Q 330 300 250 290 Q 170 300 100 290 Q 0 300 0 250 L 0 60 Z');
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  z-index: -1;
`;