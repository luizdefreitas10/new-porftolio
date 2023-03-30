import styled from 'styled-components';

const StyledBoxComponent = styled.div`
  width: 100px;
  height: 100px;
  background-color: red;
  margin: 50px;
`;

interface BoxProps {
  aos: string;
}

const Box = ({ aos }: BoxProps) => {
  return <StyledBoxComponent data-aos={aos} />;
};

export default Box;