import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { HeadShotImage } from "../../Shared/Images/index";
import {
  LandingBackground,
  LandingHeadshot,
  LandingHeadshotWrapper,
  LandingTagline,
  LandingSubTagline,
  IconWrapper
} from "./Landing-Components";

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
    if (window.scrollY > 0) {
      handleArrowClick();
    }
  };

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
