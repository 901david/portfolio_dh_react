import styled, { keyframes, css } from 'styled-components';

export const slideNavInDesktop = keyframes`
0%{
  transform:translateX(-10vw);
}
100%{
  transform:translateX(0);

}
`;

export const slideNavInTablet = keyframes`
0%{
  transform:translateX(-100vw);
}
100%{
  transform:translateX(3vw);

}
`;

export const triggerIconBarSlideDesktop = css`
  animation: ${slideNavInDesktop} 1s 1s forwards;
`;

export const triggerIconBarSlideTablet = css`
  animation: ${slideNavInTablet} 1s 1s forwards;
`;

export const IconBarWrapper = styled.div`
  grid-row: body-start / body-end;
  grid-column: sideBar-start / sideBar-end;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  background: black;
  color: white;
  font-size: 1.3rem;
  position: relative;
  z-index: 100;

  @media only screen and (min-width: 801px) {
    transform: translateX(-10vw);
    ${({ mainContentBeingViewed }) =>
      mainContentBeingViewed && triggerIconBarSlideDesktop}
  }

  @media only screen and (max-width: 800px) {
    grid-row: 2 / span 1;
    grid-column: 1 / span 12;
    width: 100vw;
    justify-content: space-around;
    align-items: center;
    flex-direction: row;
    transform: translateX(-100vw);
    ${({ mainContentBeingViewed }) =>
      mainContentBeingViewed && triggerIconBarSlideTablet}
  }

  @media only screen and (max-width: 600px) {
    width: 70vw;
    justify-content: flex-start;
  }
`;

export const IconTextWrapper = styled.div`
opacity:0;
transition:all 0.5s;
transform:translate(0,-1.7rem);
${({ selected }) =>
  selected &&
  `
  opacity: 1;
  `}


&::after {
  content: "${({ text }) => text}";
font-size: 1rem;
white-space: nowrap;
color: white;
${({ selected }) =>
  selected &&
  `
  padding-bottom:0;
border-bottom:3px solid white;
  `}

} 

@media only screen and (max-width: 800px) {
transform: translate(-3rem,-0.25rem);
  
}
`;

export const NavItemWrapper = styled.div`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;

  & > #icon-icon {
    transition: all 0.8s;

    ${({ selected }) =>
      selected &&
      `
  opacity: 0;
  `}
  }

  &:hover > #icon-text {
    opacity: 1;
  }

  &:active > #icon-text {
    opacity: 1;
  }

  &:hover > #icon-icon {
    opacity: 0;
  }

  @media only screen and (max-width: 800px) {
    padding: 0;
    margin-left: 10px;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;

    &:hover > #icon-text {
      opacity: 1;
    }

    &:active > #icon-text {
      opacity: 1;
    }
  }

  @media only screen and (max-width: 600px) {
    justify-content: flex-start;
  }
`;
