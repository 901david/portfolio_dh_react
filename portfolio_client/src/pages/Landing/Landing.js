import React from "react";
import styled, { keyframes, css } from "styled-components";
import { withRouter } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

import { HeadShot, Tagline } from "../../components/Header/Header";

const arrowVibrate = keyframes`
0%{
    top: 44rem;
}
50%{
    top: 42rem;
}
100%{
    top: 44rem;
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
  background: black;
  z-index: 1000;
  color: white;
  transform: scale(1);
  ${({ removeContentTriggered }) =>
    removeContentTriggered && removeContentAddOn}
`;

const LandingHeadshot = styled(HeadShot)`
  height: 25rem;
`;

const LandingHeadshotWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;

  > svg {
    position: absolute;
    top: 44rem;
    left: 33rem;
    color: white;
    font-size: 12rem;
    animation: ${arrowVibrate} 1.2s infinite;
    cursor: pointer;
  }
`;

const LandingTagline = styled(Tagline)`
  color: white;
  position: absolute;
  top: 0;
`;

const Landing = ({
  history,
  viewingMainContent,
  setMainContentBeingViewed
}) => {
  const handleArrowClick = () => {
    setMainContentBeingViewed(true);
    history.push("/skills");
  };

  return (
    <LandingBackground removeContentTriggered={viewingMainContent}>
      <LandingHeadshotWrapper>
        <LandingHeadshot src="./images/headshot_comp.jpg" alt="headshot" />
        <FontAwesomeIcon onClick={handleArrowClick} icon={faChevronDown} />
      </LandingHeadshotWrapper>
      <LandingTagline fontSize={"5rem"}>David Hammond</LandingTagline>
      <LandingTagline fontSize={"3rem"}>vdavidhammond@gmail.com</LandingTagline>
    </LandingBackground>
  );
};

export default withRouter(Landing);
