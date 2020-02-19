import styled, { css } from "styled-components";

import { arrowVibrate, removeContent } from "../../Shared/animations";
import { HeadShot, Tagline } from "../../components/Header/Header";

const HeaderImage = "../../images/topBar_edited.jpg";
const removeContentAddOn = css`
  animation: ${removeContent} 1s forwards;
`;

export const LandingBackground = styled.div`
  width: 100vw;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  background: url(${HeaderImage}) black;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  z-index: 1000;
  color: white;
  transform: scale(1);

  ${({ landingViewedOnce }) => landingViewedOnce && `top:-100vh;`}
  ${({ removeContentTriggered }) =>
    removeContentTriggered && removeContentAddOn}
`;

export const LandingHeadshot = styled(HeadShot)`
  height: 20rem;
  border: 3px solid white;
`;

export const LandingHeadshotWrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  //HERE
`;

export const LandingTagline = styled(Tagline)`
  color: black;
  background: white;
  padding: 0.5em;
  font-size: 4rem;
  letter-spacing: 0.8rem;

  @media only screen and (max-width: 800px) {
    font-size: 3rem;
  }
`;

export const LandingSubTagline = styled(LandingTagline)`
  font-size: 4rem;
  letter-spacing: 0.8rem;

  @media only screen and (max-width: 800px) {
    font-size: 3rem;
  }
`;

export const IconWrapper = styled.div`
  > svg {
    color: white;
    font-size: 12rem;
    animation: ${arrowVibrate(0)} 1.2s infinite;
    cursor: pointer;
  }

  @media only screen and (max-width: 800px) {
    > svg {
      font-size: 9rem;
      animation: ${arrowVibrate(0)} 1.2s infinite;
    }
  }
`;
