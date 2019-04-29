import React from "react";
import styled, { keyframes, css } from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import HeaderImage from "../../images/topBar_edited.jpg";
import HeadShotImage from "../../images/headshot_comp.jpg";

import { HeadShot, Tagline } from "../../components/Header/Header";

const arrowVibrate = initialPosition => keyframes`
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

const removeContent = keyframes`
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

const removeContentAddOn = css`
  animation: ${removeContent} 1s forwards;
`;

const LandingBackground = styled.div`
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

const LandingHeadshot = styled(HeadShot)`
  height: 25rem;
`;

const LandingHeadshotWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  height: 100%;
  margin-left: 15%;

  > svg {
    margin-left: 6%;
    color: white;
    font-size: 12rem;
    animation: ${arrowVibrate(-8)} 1.2s infinite;
    cursor: pointer;
    transform: translateY(-15rem);
  }

  @media only screen and (max-width: 800px) {
    align-items: center;

    > svg {
      animation: ${arrowVibrate(0)} 1.2s infinite;
      transform: translateY(0);
    }
  }
`;

const LandingTagline = styled(Tagline)`
  color: black;
  background: white;
  padding: 0.5em;
  font-size: 4rem;
  transform: rotate(-12deg) translate(-8rem, 2rem);

  @media only screen and (max-width: 800px) {
    transform: rotate(0) translate(0, 0);
  }
`;

const LandingSubTagline = styled(LandingTagline)`
  transform: rotate(0) translate(25rem, -15rem);
  font-size: 3.5rem;
  letter-spacing: 0.8rem;

  @media only screen and (max-width: 800px) {
    transform: rotate(0) translate(0, 0);
  }
`;

const Landing = ({
  viewingMainContent,
  setMainContentBeingViewed,
  setLandingViewed
}) => {
  const handleArrowClick = () => {
    setMainContentBeingViewed(true);

    /* 1 second represents the animation time which is triggered here. After the animation we never want to see the landing again. */
    setTimeout(() => {
      setLandingViewed(true);
    }, 1002);
  };

  return (
    <LandingBackground
      removeContentTriggered={viewingMainContent}
      setLandingViewed={setLandingViewed}
    >
      <LandingHeadshotWrapper>
        <LandingTagline fontSize={"5rem"}>David Hammond</LandingTagline>
        <LandingHeadshot src={HeadShotImage} alt="headshot" />
        <LandingSubTagline fontSize={"3rem"}>
          Software Engineer
        </LandingSubTagline>
        <FontAwesomeIcon onClick={handleArrowClick} icon={faChevronDown} />
      </LandingHeadshotWrapper>
    </LandingBackground>
  );
};

export default Landing;
