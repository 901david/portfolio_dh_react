import React, { createRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLinkSquareAlt } from '@fortawesome/free-solid-svg-icons';
import { useMappedState } from 'react-use-mapped-state';

import LargeProjectContent from './LargeProjectContent';
import {
  ProjectWrapper,
  ProjectTitle,
  ProjectDetails,
  ProjectTitleWrapper,
  BackCardBackgroundImage,
} from './Projects-Components';

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
  technology,
  cardBackground,
  dockerLink,
  handleArrowClick,
}) => {
  const [
    { largeProjectOpen, largeProjectClosed, largeContentStartingPosition },
    valueSetter,
  ] = useMappedState({
    largeProjectOpen: false,
    largeProjectClosed: false,
    largeContentStartingPosition: { top: null, left: null },
  });
  const titleRef = createRef();

  const handleProjectToggle = e => {
    const { top: startTop, left: startLeft } = e.target.getBoundingClientRect();
    const {
      top: endTop,
      left: endLeft,
      width: endWidth,
    } = titleRef.current.getBoundingClientRect();

    if (largeProjectOpen) {
      valueSetter('largeContentStartingPosition', {
        top: endTop,
        left: endLeft + endWidth / 2,
      });
      valueSetter('largeProjectOpen', false);
      valueSetter('largeProjectClosed', true);
    } else {
      valueSetter('largeContentStartingPosition', {
        top: startTop,
        left: startLeft,
      });
      valueSetter('largeProjectOpen', true);
      valueSetter('largeProjectClosed', false);
    }
  };

  const largeDisplayProps = {
    images,
    githubLink,
    liveSite,
    dockerLink,
    description,
    technology,
    projectTitle,
    handleProjectToggle,
    demoLink,
    bitBucketLink,
  };

  return (
    <ProjectWrapper
      projectLaunching={largeProjectOpen}
      projectClosing={largeProjectClosed}
      backgroundSrcFront={imageFront}
      largeContentStartingPosition={largeContentStartingPosition}
      cardBackground={cardBackground}
    >
      <LargeProjectContent
        {...largeDisplayProps}
        handleArrowClick={handleArrowClick}
      />

      <div className='card'>
        <div className='card_side card_side_front'>
          <ProjectTitle ref={titleRef}>{projectTitle}</ProjectTitle>
        </div>
        <div onClick={handleProjectToggle} className='card_side card_side_back'>
          <ProjectTitleWrapper>
            <ProjectTitle>{projectTitle}</ProjectTitle>
            <FontAwesomeIcon
              onClick={handleProjectToggle}
              icon={faExternalLinkSquareAlt}
            />
          </ProjectTitleWrapper>
          <ProjectDetails cardBackground={cardBackground}>
            <BackCardBackgroundImage imageBack={imageBack} />
            <p>Tech Used:</p>
            {technology.map(({ name, key }) => (
              <p key={key}>{name}</p>
            ))}
          </ProjectDetails>
        </div>
      </div>
    </ProjectWrapper>
  );
};

export default Project;
