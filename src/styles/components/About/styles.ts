import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  /* background-color: ${(props) => props.theme.productLight1}; */
  width: 80%;
  margin: 0 auto;
  margin-top: 30px;
  align-items: center;
`;

export const StyledImg = styled.img`
  border-radius: 5px;
`;

export const ContentContainer = styled.div`
  color: ${(props) => props.theme.productLight1};

  & p {
    color: yellow;
    width: 80%;
    text-align: justify;
  }

  & span {
    font-size: 3.5rem;
    color: ${(props) => props.theme.productError1};
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
    color: yellow;
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
`;