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
} from '../../Ducks/Projects/projects.slice';

import Project from './Project';
import {
  ProjectsWrapper,
  IconWrapper,
  IndividualProjectWrapper,
} from './Projects-Components';
import axios from 'axios';

const Projects = () => {
  const dispatch = useDispatch();
  const { selectedProject: selectedProjectIndex, projects } = useSelector(
    ({ projects }) => projects
  );

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

  return (
    <ProjectsWrapper>
      <IconWrapper amount={1} position={'flex-start'} hover={true}>
        <FontAwesomeIcon onClick={handleArrowClick} icon={faChevronLeft} />
      </IconWrapper>
      <IndividualProjectWrapper amount={3} position={'center'} hover={false}>
        {projects && projects.length > 0 ? (
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
