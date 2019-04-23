import React from "react";
import styled from "styled-components";

const ProjectWrapper = styled.div`
  .card {
    perspective: 150rem;
    -moz-perspective: 150rem;
    // position: relative;
    width: 30rem;
    height: 30rem;

    &_side {
      background: orangered;
      height: 100%;
      transition: all 0.8s ease;
      position: absolute;
      top: 0;
      left: 0;
      backface-visibility: hidden;
      width: 100%;

      &_front {
        background: purple;
      }

      &_back {
        background: green;
        transform: rotateY(180deg);
      }
    }

    &:hover .card_side_front {
      transform: rotateY(-180deg);
    }

    &:hover .card_side_back {
      transform: rotateY(0);
    }
  }
`;

const Project = ({
  id,
  projectTitle,
  image,
  githubLink,
  liveSite,
  description,
  technology
}) => (
  <ProjectWrapper>
    <div class="card">
      <div class="card_side card_side_front">hi</div>
      <div class="card_side card_side_back">hi 2</div>
    </div>
  </ProjectWrapper>
);

export default Project;
