import styled from "styled-components";

export const Container = styled.div`
  width: 80%;
  margin: 0 auto;
  margin-bottom: 3rem;
  padding-top: 3rem;
  /* background-color: white; */
`;

export const Card = styled.div`
  width: 25%;
  min-width: 12rem;
  height: 19rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  padding: 0px 15px;
  border-radius: 10px;
  border: none;
  /* color: white; */
  position: relative;
  cursor: pointer;
  /* font-weight: 900; */
  transition-duration: 0.2s;
  background: ${(props) => props.theme.editorStorm};
  /* box-shadow: 1px 1px 2px; */
  /* display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  height: 19rem;
  width: 30%;
  background-color: ${(props) => props.theme.editorStorm};
  gap: 1rem;
  border-radius: 10px;
  min-width: 12rem;
  box-shadow: 1px 1px 2px; */

  & img {
    width: 100px;
    height: 100px;
    border-radius: 3px;
  }

  & p {
    font-size: 0.9rem;
    text-align: center;
    margin-top: 13px;
    /* background-color: ${(props) => props.theme.editorStorm}; */
    color: ${(props) => props.theme.editorBlueSky};
  }

  & li {
    color: ${(props) => props.theme.editorOrange1};
    /* background-color: ${(props) => props.theme.editorStorm}; */
    flex-wrap: wrap;
    font-size: 0.8rem;
  }

  transition: transform 0.3s ease-in-out;

  /* &:hover {
    transform: scale(0.975);
    background-color: ${(props) => props.theme.editorBackground};
  } */

  /* ::after {
    filter: blur(10px);
  }

  ::after, ::before {
    content: "";
    position: absolute;
    left: -2px;
    top: -2px;
    border-radius: 10px;
    background: linear-gradient(
      45deg,
      ${(props) => props.theme.editorBackground},
      ${(props) => props.theme.editorStorm},
      ${(props) => props.theme.editorBlack},
      ${(props) => props.theme.editorStrings},
      ${(props) => props.theme.editorKeywords},
      ${(props) => props.theme.editorTerminalBlue},
      ${(props) => props.theme.editorBlueSky},
      ${(props) => props.theme.editorLittleSky},
      ${(props) => props.theme.editorOrange1},
      ${(props) => props.theme.editorOrange2}
    );
    background-color: ${(props) => props.theme.editorBackground};
    background-size: 200%;
    width: calc(100% + 4px);
    height: calc(100% + 4px);
    z-index: -1;
    animation: steam 20s linear infinite;
    transition: 0.5s;
  }

  @keyframes steam {
    0% {
      background-position: 0 0;
    }

    50% {
      background-position: 400% 0;
    }

    100% {
      background-position: 0 0;
    } */
  }
`;

export const CardContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 2.2rem;
  flex-wrap: wrap;
  margin-top: 40px;
`;

export const StyledH1 = styled.h1`
  font-size: 1.5rem;
  color: ${(props) => props.theme.editorKeywords};
`;

export const ProjectContainer = styled.div`
  margin-top: 40px;
`;

export const ProjectNavigate = styled.a`
  border: none;
  border-radius: 5px;
  background-color: ${(props) => props.theme.editorBlueSky};
  color: ${(props) => props.theme.editorLittleSky};
  padding: 7px;
  font-size: 0.8rem;
  /* box-shadow: 1px 1px 2px; */

  &:hover {
    background-color: ${(props) => props.theme.editorTerminalBlue};
    color: ${(props) => props.theme.editorBlack};
    cursor: pointer;
  }
`;
