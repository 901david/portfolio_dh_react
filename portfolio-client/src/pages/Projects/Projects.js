import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChevronRight,
  faChevronLeft,
} from '@fortawesome/free-solid-svg-icons';
import { useSelector, useDispatch } from 'react-redux';

import {
  toggleProjectIdx,
  addProjects,
  toggleLargeDisplay,
} from '../../Ducks/Projects/projects.slice';

import Project from './Project';
import {
  ProjectsWrapper,
  IconWrapper,
  IndividualProjectWrapper,
} from './Projects-Components';
import axios from 'axios';
import LargeProjectContent from './LargeProjectContent';

const Projects = () => {
  const dispatch = useDispatch();
  const {
    selectedProject: selectedProjectIndex,
    projects,
    largeDisplayOpen,
  } = useSelector(({ projects }) => projects);

  const { url: baseUrl } = useSelector(({ apiurl }) => apiurl);

  React.useEffect(() => {
    axios
      .get(`${baseUrl}/projects`)
      .then(res => {
        dispatch(addProjects(res.data.projects));
      })
      .catch(err => {
        //handle with  redux
        console.log(err);
      });
  }, []);

  const handleArrowClick = () => {
    let nextIndex = selectedProjectIndex;
    if (selectedProjectIndex + 1 === projects.length) nextIndex = 0;
    else nextIndex++;
    dispatch(toggleProjectIdx(nextIndex));
  };

  const handleProjectToggle = () => {
    dispatch(toggleLargeDisplay(!largeDisplayOpen));
  };

  return (
    <>
      <ProjectsWrapper>
        <IconWrapper amount={1} position={'flex-start'} hover={true}>
          <FontAwesomeIcon onClick={handleArrowClick} icon={faChevronLeft} />
        </IconWrapper>
        <IndividualProjectWrapper amount={3} position={'center'} hover={false}>
          {projects && projects.length > 0 ? (
            <Project
              handleProjectToggle={handleProjectToggle}
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
      {projects[selectedProjectIndex] !== undefined && (
        <LargeProjectContent
          isOpen={largeDisplayOpen}
          handleProjectToggle={handleProjectToggle}
          {...projects[selectedProjectIndex]}
          handleArrowClick={handleArrowClick}
        />
      )}
    </>
  );
};

export default Projects;
