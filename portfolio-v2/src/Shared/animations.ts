import { keyframes } from "styled-components";

export const arrowVibrate: (initialPosition: number) => object = initialPosition => keyframes`
0%{
    transform: translateY(${initialPosition}rem);
    
}
50%{
  transform: translateY(${initialPosition - 2}rem);

}
100%{
    transform: translateY(${initialPosition}rem);
}
`;

export const removeContent = keyframes`
0%{
    top: 0;
}
15%{
    top: 5vh;
    transform:scale(1.1);
}
100%{
    top: -100vh;
}
`;

export const animateLargeProjectContentIn: (args: { top: number, left: number }) => object = ({ top, left }) => keyframes`
  0%{
    width: 0;
    height: 0;
    top: ${top}px;
    left: ${left}px;
    // z-index: -1;
  }
  100%{
    position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: auto;
      // z-index: 1000;
  }
  `;

export const animateLargeProjectContentOut: (args: { top: number, left: number }) => object = ({ top, left }) => keyframes`
  0%{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: auto;
    // z-index: 1000;
  }
  100%{
    width: 0;
    height: 0;
    top: ${top}px;
    // z-index: -1;
    left: ${left}px;
  }
  `;
