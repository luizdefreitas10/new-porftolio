import styled from "styled-components";

export const Button = styled.button`

`;

export const Switch = styled.label`
  font-size: 17px;
  position: relative;
  display: inline-block;
  width: 64px;
  height: 34px;
`;

export const Input = styled.input`
  opacity: 0;
  width: 0;
  height: 0;
`;

export const Slider = styled.span`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #73c0fc;
  transition: 0.4s;
  border-radius: 30px;


  &:before {
    position: absolute;
    content: "";
    height: 30px;
    width: 30px;
    border-radius: 20px;
    left: 2px;
    bottom: 2px;
    z-index: 2;
    background-color: #e8e8e8;
    transition: 0.4s;
  }

  ${Input}:checked + & {
    background-color: #183153;
  }

  ${Input}:focus + & {
    box-shadow: 0 0 1px #183153;
  }

  ${Input}:checked + &:before {
    transform: translateX(30px);
  }
`;

export const Sun = styled.span`
  position: absolute;
  top: 5px;
  left: 36px;
  z-index: 1;
  width: 24px;
  height: 24px;

  svg {
    animation: rotate 15s linear infinite;
  }

  @keyframes rotate {
    0% {
      transform: rotate(0);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

export const Moon = styled.span`
  position: absolute;
  top: 1px;
  left: 5px;
  z-index: 1;
  width: 24px;
  height: 24px;

  svg {
    animation: tilt 5s linear infinite;
    fill: #73C0FC;
  }

  @keyframes tilt {
    0% {
      transform: rotate(0deg);
    }
    25% {
      transform: rotate(-10deg);
    }
    75% {
      transform: rotate(10deg);
    }
    100% {
      transform: rotate(0deg);
    }
  }
`;






// .switch {
//   font-size: 17px;
//   position: relative;
//   display: inline-block;
//   width: 64px;
//   height: 34px;
// }

// .switch input {
//   opacity: 0;
//   width: 0;
//   height: 0;
// }

// .slider {
//   position: absolute;
//   cursor: pointer;
//   top: 0;
//   left: 0;
//   right: 0;
//   bottom: 0;
//   background-color: #73C0FC;
//   -webkit-transition: .4s;
//   transition: .4s;
//   border-radius: 30px;
// }

// .slider:before {
//   position: absolute;
//   content: "";
//   height: 30px;
//   width: 30px;
//   border-radius: 20px;
//   left: 2px;
//   bottom: 2px;
//   z-index: 2;
//   background-color: #e8e8e8;
//   -webkit-transition: .4s;
//   transition: .4s;
// }

// .sun svg {
//   position: absolute;
//   top: 6px;
//   left: 36px;
//   z-index: 1;
//   width: 24px;
//   height: 24px;
// }

// .moon svg {
//   fill: #73C0FC;
//   position: absolute;
//   top: 5px;
//   left: 5px;
//   z-index: 1;
//   width: 24px;
//   height: 24px;
// }

// /* .switch:hover */.sun svg {
//   -webkit-animation: rotate 15s linear infinite;
//           animation: rotate 15s linear infinite;
// }

// @-webkit-keyframes rotate {
 
//   0% {
//     -webkit-transform: rotate(0);
//             transform: rotate(0);
//   }

//   100% {
//     -webkit-transform: rotate(360deg);
//             transform: rotate(360deg);
//   }
// }

// @keyframes rotate {
 
//   0% {
//     -webkit-transform: rotate(0);
//             transform: rotate(0);
//   }

//   100% {
//     -webkit-transform: rotate(360deg);
//             transform: rotate(360deg);
//   }
// }

// /* .switch:hover */.moon svg {
//   -webkit-animation: tilt 5s linear infinite;
//           animation: tilt 5s linear infinite;
// }

// @-webkit-keyframes tilt {
 
//   0% {
//     -webkit-transform: rotate(0deg);
//             transform: rotate(0deg);
//   }

//   25% {
//     -webkit-transform: rotate(-10deg);
//             transform: rotate(-10deg);
//   }

//   75% {
//     -webkit-transform: rotate(10deg);
//             transform: rotate(10deg);
//   }

//   100% {
//     -webkit-transform: rotate(0deg);
//             transform: rotate(0deg);
//   }
// }

// @keyframes tilt {
 
//   0% {
//     -webkit-transform: rotate(0deg);
//             transform: rotate(0deg);
//   }

//   25% {
//     -webkit-transform: rotate(-10deg);
//             transform: rotate(-10deg);
//   }

//   75% {
//     -webkit-transform: rotate(10deg);
//             transform: rotate(10deg);
//   }

//   100% {
//     -webkit-transform: rotate(0deg);
//             transform: rotate(0deg);
//   }
// }

// .input:checked + .slider {
//   background-color: #183153;
// }

// .input:focus + .slider {
//   -webkit-box-shadow: 0 0 1px #183153;
//           box-shadow: 0 0 1px #183153;
// }

// .input:checked + .slider:before {
//   -webkit-transform: translateX(30px);
//       -ms-transform: translateX(30px);
//           transform: translateX(30px);
// }