import styled from "styled-components";

export const HamburgerInput = styled.input`
  display: none;
`;

export const HamburgerSVG = styled.svg`
  height: 3em;
  transition: transform 600ms cubic-bezier(0.4, 0, 0.2, 1);
`;

export const Line = styled.path`
  fill: none;
  stroke: ${(props) => props.theme.editorBlueSky};
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: 3;
  transition: stroke-dasharray 600ms cubic-bezier(0.4, 0, 0.2, 1),
              stroke-dashoffset 600ms cubic-bezier(0.4, 0, 0.2, 1);
`;

export const LineTopBottom = styled(Line)`
  stroke-dasharray: 12 63;
`;

export const HamburgerLabel = styled.label`
  cursor: pointer;

  & ${HamburgerInput}:checked + ${HamburgerSVG} {
    transform: rotate(-45deg);
  }

  & ${HamburgerInput}:checked + ${HamburgerSVG} ${LineTopBottom} {
    stroke-dasharray: 20 300;
    stroke-dashoffset: -32.42;
  }
`;