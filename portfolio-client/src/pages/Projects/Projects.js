import React, { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChevronRight,
  faChevronLeft,
} from '@fortawesome/free-solid-svg-icons';
import { useMappedState } from 'react-use-mapped-state';
import { useSelector, useDispatch } from 'react-redux';
import { toggleProjectIdx } from '../../Ducks/Projects/projects.slice';

import Project from './Project';
import {
  ProjectsWrapper,
  IconWrapper,
  IndividualProjectWrapper,
} from './Projects-Components';

const Projects = ({ portfolioData }) => {
  const [{ projects }, valueSetter] = useMappedState({
    projects: [],
  });
  const dispatch = useDispatch();

  const selectedProjectIndex = useSelector(
    ({ projects }) => projects.selectedProject
  );

  useEffect(() => {
    if (portfolioData) valueSetter('projects', portfolioData);
  }, [portfolioData, valueSetter]);

  const handleArrowClick = () => {
    let nextIndex = selectedProjectIndex;
    if (selectedProjectIndex + 1 === projects.length) nextIndex = 0;
    else nextIndex++;
    dispatch(toggleProjectIdx(nextIndex));
  };

  return (
    <ProjectsWrapper>
      <IconWrapper amount={1} position={'flex-start'} hover={true}>
        <FontAwesomeIcon onClick={handleArrowClick} icon={faChevronLeft} />
      </IconWrapper>
      <IndividualProjectWrapper amount={3} position={'center'} hover={false}>
        {projects.length > 0 ? (
          <Project
            key={projects[selectedProjectIndex].key}
            {...projects[selectedProjectIndex]}
            handleArrowClick={handleArrowClick}
          />
        ) : null}
      </IndividualProjectWrapper>

      <IconWrapper amount={1} position={'flex-end'} hover={true}>
        <FontAwesomeIcon onClick={handleArrowClick} icon={faChevronRight} />
      </IconWrapper>
    </ProjectsWrapper>
  );
};

export default Projects;
