import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronRight,
  faChevronLeft
} from "@fortawesome/free-solid-svg-icons";

import Project from "./Project";
import {
  ProjectsWrapper,
  IconWrapper,
  IndividualProjectWrapper
} from "./Projects-Components";

const Projects = ({ portfolioData }) => {
  const [projects, setProjectData] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (portfolioData) setProjectData(portfolioData);
  }, [portfolioData]);

  const handleArrowClick = () => {
    let nextIndex = currentIndex;
    if (currentIndex + 1 === projects.length) nextIndex = 0;
    else nextIndex++;
    setCurrentIndex(nextIndex);
  };
  return (
    <ProjectsWrapper>
      <IconWrapper amount={1} position={"flex-start"} hover={true}>
        <FontAwesomeIcon onClick={handleArrowClick} icon={faChevronLeft} />
      </IconWrapper>
      <IndividualProjectWrapper amount={3} position={"center"} hover={false}>
        {projects.length > 0 && (
          <Project
            key={`project-${projects[currentIndex]._id}`}
            {...projects[currentIndex]}
          />
        )}
      </IndividualProjectWrapper>

      <IconWrapper amount={1} position={"flex-end"} hover={true}>
        <FontAwesomeIcon onClick={handleArrowClick} icon={faChevronRight} />
      </IconWrapper>
    </ProjectsWrapper>
  );
};

export default Projects;
