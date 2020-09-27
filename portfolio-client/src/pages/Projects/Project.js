import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLinkSquareAlt } from '@fortawesome/free-solid-svg-icons';
import { useDispatch } from 'react-redux';

import {
  ProjectWrapper,
  ProjectTitle,
  ProjectDetails,
  ProjectTitleWrapper,
  BackCardBackgroundImage,
  TechColumnWrapper,
  TechColumn,
} from './Projects-Components';

const Project = ({
  projectTitle,
  imageFront,
  imageBack,
  technology,
  cardBackground,
  handleProjectToggle,
}) => {
  return (
    <ProjectWrapper
      backgroundSrcFront={imageFront}
      cardBackground={cardBackground}
    >
      <div className='card'>
        <div className='card_side card_side_front'>
          <ProjectTitle>{projectTitle}</ProjectTitle>
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
            <TechColumnWrapper>
              <TechColumn>
                {technology.map(
                  ({ name, key }, idx) =>
                    idx % 2 === 0 && <li key={key}>{name}</li>
                )}
              </TechColumn>
              <TechColumn>
                {technology.map(
                  ({ name, key }, idx) =>
                    idx % 2 !== 0 && <li key={key}>{name}</li>
                )}
              </TechColumn>
            </TechColumnWrapper>
          </ProjectDetails>
        </div>
      </div>
    </ProjectWrapper>
  );
};

export default Project;
