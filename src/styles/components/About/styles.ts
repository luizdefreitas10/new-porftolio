import styled from "styled-components";
import Image from "next/image";

export const Container = styled.div`
  display: flex;
  /* background-color: ${(props) => props.theme.productLight1}; */
  width: 80%;
  margin: 0 auto;
  margin-top: 30px;
  align-items: center;
  justify-content: space-around;
`;

export const StyledImg = styled.img`
  border-radius: 5px;
  z-index: 3;
`;

export const ContentContainer = styled.div`
  color: ${(props) => props.theme.productLight1};
  z-index: 3;

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
    display: inline-block;

    &::before {
      content: '';
      position: absolute;
      top: 50%;
      left: 10%;
      right: 0;
      height: 4px;
      border-radius: 5px;
      background-color: ${(props) => props.theme.productLight1};
    }
  }
`;

export const Navigation = styled.a`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  &:hover {
    color: ${(props) => props.theme.editorStrings};
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
  right: 29%;
  top: 50%;
  opacity: 1;
  z-index: 3;

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
  top: 28%;
  opacity: 1;
  z-index: 1;
`;