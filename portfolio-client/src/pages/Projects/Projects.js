import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronRight,
  faChevronLeft
} from "@fortawesome/free-solid-svg-icons";

import Project from "./Project";
import { PROJECTS } from "../../Shared/constants";

const ProjectsWrapper = styled.div`
  padding-left: 8vw;
  height: 80vh;
  display: flex;
  justify-content: center;
  color: white;
  background: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),
    url(https://images.unsplash.com/photo-1416339158484-9637228cc908?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1934&q=80)
      black;
  background-size: cover;

  @media only screen and (max-width: 800px) {
    background-attachment: fixed;
    height: 120%;
    width: 100vw;
    padding-left: 0;
  }
`;

const IconWrapper = styled.div`
  flex: ${({ amount }) => amount};
  display: flex;
  justify-content: ${({ position }) => position};
  align-items: flex-start;
  font-size: 8rem;
  padding: 2rem;

  & > svg {
    transform: scale(1);
    transition: all 0.5s;
  }

  ${({ hover }) =>
    hover &&
    `& > svg:hover {
    transform: scale(1.15);
  }`}
`;

const ProjectWrapper = styled.div`
  font-size: 3rem;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 10rem 1fr;
  grid-gap: 1.5rem;
  align-items: start;

  @media only screen and (max-width: 800px) {
    grid-template-columns: 1fr;
    grid-template-rows: 10rem repeat(3, 1fr);
    grid-gap: 0;
  }
`;

const ProjectsTitle = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  grid-row: 1 / span 1;
  grid-column: 1 / -1;
`;

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
      <ProjectWrapper amount={3} position={"center"} hover={false}>
        <ProjectsTitle>
          <h4>Projects</h4>
        </ProjectsTitle>
        {projects.length > 0 && (
          <Project
            key={`project-${projects[currentIndex]._id}`}
            {...projects[currentIndex]}
          />
        )}
      </ProjectWrapper>

      <IconWrapper amount={1} position={"flex-end"} hover={true}>
        <FontAwesomeIcon onClick={handleArrowClick} icon={faChevronRight} />
      </IconWrapper>
    </ProjectsWrapper>
  );
};

export default Projects;
