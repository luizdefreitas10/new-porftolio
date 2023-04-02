import styled from "styled-components";

export const Container = styled.div`
  padding-top:20px;
  width: 80%;
  display: flex;
  flex-wrap: wrap;
  margin: 0 auto;
  gap: 20px;
  justify-content: space-evenly;
`;

export const StyledH1 = styled.h1`
  width: 80%;
  font-size: 1.5rem;
  color: ${(props) => props.theme.editorKeywords};
  margin: 0 auto;
`;

export const BigContainer = styled.div`
  margin-top: 40px;
`;