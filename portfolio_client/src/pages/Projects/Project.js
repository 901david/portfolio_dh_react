import React, { useState, createRef, useEffect } from "react";
import styled, { keyframes, css } from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faExternalLinkSquareAlt,
  faTimes
} from "@fortawesome/free-solid-svg-icons";

const animateLargeProjectContentIn = ({ top, left }) => keyframes`
  0%{
    width: 0;
    height: 0;
    top: ${top}px;
    left: ${left}px;
    z-index: -1;
  }
  100%{
    position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: 1000;
  }
  `;

const animateLargeProjectContentOut = ({ top, left }) => keyframes`
  0%{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1000;
  }
  100%{
    width: 0;
    height: 0;
    top: ${top}px;
    z-index: -1;
    left: ${left}px;
  }
  `;

const projectLaunch = position => css`
  animation: ${animateLargeProjectContentIn(position)} 0.4s ease-in-out forwards;
`;

const projectClose = position => css`
  animation: ${animateLargeProjectContentOut(position)} 0.4s ease-in-out
    forwards;
`;

const ProjectWrapper = styled.div`
  overflow: hidden;
  height: 35rem;
  padding-top: 2.5rem;

  .card {
    perspective: 150rem;
    -moz-perspective: 150rem;
    width: 30rem;
    height: 30rem;

    &_side {
      background: orangered;
      height: 100%;
      width: 100%;
      transition: all 0.8s ease;
      position: absolute;
      top: 0;
      left: 0;
      backface-visibility: hidden;

      &_front {
        background: black;
        background-image: linear-gradient(
            rgba(0, 0, 0, 0.8),
            rgba(0, 0, 0, 0.8)
          ),
          url(${({ backgroundSrcFront }) => backgroundSrcFront});
        background-size: cover;
        background-position: left 55% bottom 45%;
        display: flex;
        align-items: center;
      }

      &_back {
        background: green;
        transform: rotateY(180deg);
        position: relative;

        svg {
          border-radius: 100px;
          position: absolute;
          right: 12rem;
          transform: scale(1);
          transition: all 0.3s;

          &:hover {
            transform: scale(1.2);
            box-shadow: 0.5rem 0.5rem 0.5rem rgb(0, 0, 0, 0.2);
          }

          &:active {
            transform: scale(1);
            box-shadow: 0.2rem 0.2rem 0.2rem rgb(0, 0, 0, 0.2);
          }
        }
      }
    }

    &:hover .card_side_front {
      transform: rotateY(180deg);
      display: flex;
      align-items: center;
    }

    &:hover .card_side_back {
      transform: rotateY(0);
    }
  }

  .largeProjectContent {
    width: 0;
    height: 0;
    background: white;
    color: black;
    position: fixed;
    display: flex;
    justify-content: flex-end;
    align-items: flex-start;
    ${({ largeContentStartingPosition: { top, left } }) =>
      css`
        top: ${top}px;
        left: ${left}px;
      `};
    z-index: -1;
    overflow: hidden;

    ${({ projectLaunching }) => projectLaunching && projectLaunch}
    ${({ projectClosing }) => projectClosing && projectClose}


    > svg {
      margin-top: 1rem;
      margin-left: 1rem;
      transform: scale(1);

      &:hover {
        transform: scale(1.1);
      }
    }
  }
`;

const ProjectTitle = styled.div`
  font-size: 2.5rem;
  width: 85%;
  whitespace: no-wrap;
  text-align: center;
`;

const ProjectDetails = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 80%;
  justify-content: space-around;
  color: white;
  font-size: 2rem;
`;

const CloseContainer = styled.div`
  padding: 0.2em;
  background: rgb(0, 0, 0, 0.3);
  border-radius: 50%;
  display: inline-block;
`;

const Project = ({
  id,
  projectTitle,
  image,
  githubLink,
  liveSite,
  description,
  technology
}) => {
  const [largeProjectOpen, setLargeProjectOpen] = useState(false);
  const [largeProjectClosed, setLargeProjectClosed] = useState(false);
  const [
    largeContentStartingPosition,
    setLargeContentStartingPosition
  ] = useState({ top: null, left: null });
  const titleRef = createRef();

  const handleProjectToggle = e => {
    console.log(e.target.getBoundingClientRect());

    const { top: startTop, left: startLeft } = e.target.getBoundingClientRect();
    const {
      top: endTop,
      left: endLeft,
      width: endWidth
    } = titleRef.current.getBoundingClientRect();

    if (largeProjectOpen) {
      setLargeContentStartingPosition({
        top: endTop,
        left: endLeft + endWidth / 2
      });
      setLargeProjectOpen(false);
      setLargeProjectClosed(true);
    } else {
      setLargeContentStartingPosition({ top: startTop, left: startLeft });
      setLargeProjectOpen(true);
      setLargeProjectClosed(false);
    }
  };

  return (
    <ProjectWrapper
      projectLaunching={largeProjectOpen}
      projectClosing={largeProjectClosed}
      backgroundSrcFront={image}
      largeContentStartingPosition={largeContentStartingPosition}
    >
      <div class="largeProjectContent">
        <CloseContainer>
          <FontAwesomeIcon onClick={handleProjectToggle} icon={faTimes} />
        </CloseContainer>
      </div>

      <div class="card">
        <div class="card_side card_side_front">
          <ProjectTitle ref={titleRef}>{projectTitle}</ProjectTitle>
        </div>
        <div class="card_side card_side_back">
          <FontAwesomeIcon
            onClick={handleProjectToggle}
            icon={faExternalLinkSquareAlt}
          />
          <ProjectDetails />
        </div>
      </div>
    </ProjectWrapper>
  );
};

export default Project;
