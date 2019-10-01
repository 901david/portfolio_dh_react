import React, { useState, createRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExternalLinkSquareAlt } from "@fortawesome/free-solid-svg-icons";
import LargeProjectContent from "./LargeProjectContent";
import {
  ProjectWrapper,
  ProjectTitle,
  ProjectDetails,
  ProjectTitleWrapper,
  BackCardBackgroundImage
} from "./Projects-Components";

const Project = ({
  projectTitle,
  imageFront,
  imageBack,
  images,
  bitBucketLink,
  demoLink,
  githubLink,
  liveSite,
  description,
  technology
}) => {
  const [largeProjectOpen, setLargeProjectOpen] = useState(false);
  const [largeProjectClosed, setLargeProjectClosed] = useState(false);
  const [
    largeContentStartingPosition,
    setLargeContentStartingPosition
  ] = useState({ top: null, left: null });
  const titleRef = createRef();

  const handleProjectToggle = e => {
    console.log(e.target.getBoundingClientRect());

    const { top: startTop, left: startLeft } = e.target.getBoundingClientRect();
    const {
      top: endTop,
      left: endLeft,
      width: endWidth
    } = titleRef.current.getBoundingClientRect();

    if (largeProjectOpen) {
      setLargeContentStartingPosition({
        top: endTop,
        left: endLeft + endWidth / 2
      });
      setLargeProjectOpen(false);
      setLargeProjectClosed(true);
    } else {
      setLargeContentStartingPosition({ top: startTop, left: startLeft });
      setLargeProjectOpen(true);
      setLargeProjectClosed(false);
    }
  };

  const largeDisplayProps = {
    images,
    githubLink,
    liveSite,
    description,
    technology,
    projectTitle,
    handleProjectToggle,
    demoLink,
    bitBucketLink
  };

  return (
    <ProjectWrapper
      projectLaunching={largeProjectOpen}
      projectClosing={largeProjectClosed}
      backgroundSrcFront={imageFront}
      largeContentStartingPosition={largeContentStartingPosition}
    >
      <LargeProjectContent {...largeDisplayProps} />

      <div className="card">
        <div className="card_side card_side_front">
          <ProjectTitle ref={titleRef}>{projectTitle}</ProjectTitle>
        </div>
        <div onClick={handleProjectToggle} className="card_side card_side_back">
          <ProjectTitleWrapper>
            <ProjectTitle>{projectTitle}</ProjectTitle>
            <FontAwesomeIcon
              onClick={handleProjectToggle}
              icon={faExternalLinkSquareAlt}
            />
          </ProjectTitleWrapper>
          <ProjectDetails>
            <BackCardBackgroundImage imageBack={imageBack} />
            <p>Tech Used:</p>
            <p>{technology.join(", ")}</p>
          </ProjectDetails>
        </div>
      </div>
    </ProjectWrapper>
  );
};

export default Project;
