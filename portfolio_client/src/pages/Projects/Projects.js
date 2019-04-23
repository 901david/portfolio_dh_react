import React, { useState } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronRight,
  faChevronLeft
} from "@fortawesome/free-solid-svg-icons";
import _ from "lodash";

import Project from "./Project";
import { PROJECTS } from "../../Shared/constants";

const ProjectsWrapper = styled.div`
  padding-left: 8vw;
  height: 80vh;
  display: flex;
  justify-content: center;
  color: white;
  background: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),
    url(https://images.unsplash.com/photo-1416339158484-9637228cc908?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1934&q=80);
  background-size: cover;

  @media only screen and (max-width: 800px) {
    height: 75vh;
    width: 100vw;
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
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 10rem 1fr;
  grid-gap: 1.5rem;
  align-items: start;
`;

const ProjectsTitle = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  grid-row: 1 / span 1;
  grid-column: 1 / -1;
`;

const Projects = props => {
  const [projectGroupSelected, setProjectGroup] = useState(0);

  const { title, projects } = PROJECTS[projectGroupSelected];

  const handleArrowClick = type => {
    const currentGroupValue = projectGroupSelected;
    const newIndexValue =
      type === "increment" ? currentGroupValue + 1 : currentGroupValue - 1;

    setProjectGroup(
      newIndexValue >= PROJECTS.length
        ? 0
        : newIndexValue < 0
        ? PROJECTS.length - 1
        : newIndexValue
    );
  };

  return (
    <ProjectsWrapper>
      <IconWrapper amount={1} position={"flex-start"} hover={true}>
        <FontAwesomeIcon
          onClick={() => handleArrowClick("decrement")}
          icon={faChevronLeft}
        />
      </IconWrapper>
      <ProjectWrapper amount={3} position={"center"} hover={false}>
        <ProjectsTitle>
          <h4>{title}</h4>
        </ProjectsTitle>
        {projects.map(project => (
          <Project key={`project-${project.id}`} {...project} />
        ))}
      </ProjectWrapper>

      <IconWrapper amount={1} position={"flex-end"} hover={true}>
        <FontAwesomeIcon
          onClick={() => handleArrowClick("increment")}
          icon={faChevronRight}
        />
      </IconWrapper>
    </ProjectsWrapper>
  );
};

export default Projects;
