import React, { useState } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronRight,
  faChevronLeft
} from "@fortawesome/free-solid-svg-icons";
import Project from "./Project";
import { PROJECTS } from "../../Shared/constants";

const ProjectsWrapper = styled.div`
  background: black;
  width: 95vw;
  height: 80vh;
  display: flex;
  justify-content: center;
  color: white;
`;

const IconWrapper = styled.div`
  flex: ${({ amount }) => amount};
  display: flex;
  justify-content: ${({ position }) => position};
  align-items: center;
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
  flex: 3;
  font-size: 3rem;
`;

const ProjectsTitle = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
`;

const Projects = props => {
  const [projectGroupSelected, setProjectGroup] = useState(0);

  const { title, projects } = PROJECTS[projectGroupSelected];

  const handleArrowClick = type => {
    let currentGroupValue = projectGroupSelected;
    let newIndexValue =
      type === "increment" ? currentGroupValue + 1 : currentGroupValue - 1;

    const testedNewIndexValue =
      newIndexValue > PROJECTS.length
        ? 0
        : newIndexValue < 0
        ? PROJECTS.length - 1
        : newIndexValue;

    setProjectGroup(testedNewIndexValue);
  };
  return (
    <ProjectsWrapper>
      <IconWrapper amount={1} position={"flex-start"} hover={true}>
        <FontAwesomeIcon onClick={handleArrowClick} icon={faChevronLeft} />
      </IconWrapper>
      <ProjectWrapper amount={3} position={"center"} hover={false}>
        <ProjectsTitle>
          <h4>{title}</h4>
          {projects.map(project => (
            <Project {...project} />
          ))}
        </ProjectsTitle>
      </ProjectWrapper>

      <IconWrapper amount={1} position={"flex-end"} hover={true}>
        <FontAwesomeIcon onClick={handleArrowClick} icon={faChevronRight} />
      </IconWrapper>
    </ProjectsWrapper>
  );
};

export default Projects;
