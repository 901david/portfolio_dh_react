import React from "react";
import styled, { keyframes, css } from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import HeaderImage from "../../images/topBar_edited.jpg";
import HeadShotImage from "../../images/head_edited.JPG";

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
  height: 20rem;
  border:3px solid white;
`;

const LandingHeadshotWrapper = styled.div`
  height: 100%;
  display:flex;
  flex-direction:column;
  align-items:center;
  justify-content:center;
`;

const LandingTagline = styled(Tagline)`
  color: black;
  background: white;
  padding: 0.5em;
  font-size: 4rem;
  letter-spacing: 0.8rem;


  @media only screen and (max-width: 800px) {
      font-size: 3rem;

  }
`;

const LandingSubTagline = styled(LandingTagline)`
  font-size: 4rem;
  letter-spacing: 0.8rem;

  @media only screen and (max-width: 800px) {
    font-size: 3rem;

  }
`;

const IconWrapper = styled.div`
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
  }`;


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

  const handleScroll = () => {
    if(window.scrollY > 0){
      handleArrowClick();
    }
  }

  return (
    <LandingBackground
      removeContentTriggered={viewingMainContent}
      setLandingViewed={setLandingViewed}
    >
      <LandingHeadshotWrapper onWheel={handleScroll}>
        <LandingTagline fontSize={"5rem"}>David Hammond</LandingTagline>
        <LandingHeadshot src={HeadShotImage} alt="headshot" />
        <LandingSubTagline fontSize={"3rem"}>
          Software Engineer
        </LandingSubTagline>
      <IconWrapper>
        <FontAwesomeIcon onClick={handleArrowClick} icon={faChevronDown} />
      </IconWrapper>
      </LandingHeadshotWrapper>
    </LandingBackground>
  );
};

export default Landing;
