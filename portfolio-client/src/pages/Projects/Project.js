import React, { useState, createRef, useEffect } from "react";
import styled, { keyframes, css } from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faExternalLinkSquareAlt,
  faTimes
} from "@fortawesome/free-solid-svg-icons";
import LargeProjectContent from "./LargeProjectContent";

const animateLargeProjectContentIn = ({ top, left }) => keyframes`
  0%{
    width: 0;
    height: 0;
    top: ${top}px;
    left: ${left}px;
    z-index: -1;
  }
  100%{
    position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: auto;
      z-index: 1000;
  }
  `;

const animateLargeProjectContentOut = ({ top, left }) => keyframes`
  0%{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: auto;
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
  animation: ${animateLargeProjectContentIn(position)} 0.2s ease-in-out forwards;
`;

const projectClose = position => css`
  animation: ${animateLargeProjectContentOut(position)} 0.2s ease-in-out
    forwards;
`;

const ProjectWrapper = styled.div`
  overflow: hidden;
  height: auto;
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
        background-image: linear-gradient(
            rgba(0, 0, 0, 0.8),
            rgba(0, 0, 0, 0.8)
          ),
          url(${({ backgroundSrcFront }) => backgroundSrcFront});
        background-size: cover;
        background-position: left 55% bottom 45%;
        display: flex;
        align-items: center;
        justify-content: center;
      }

      &_back {
        background: white;
        color: black;
        transform: rotateY(180deg);
        position: relative;
        display: flex;
        flex-direction: column;
        z-index: 1;
        background: black;

        svg {
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
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    overflow-x: scroll;

    ${({ largeContentStartingPosition: { top, left } }) =>
      css`
        top: ${top}px;
        left: ${left}px;
      `};
    z-index: -1;

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

export const ProjectTitle = styled.div`
  font-size: 2.5rem;
  whitespace: no-wrap;
`;

const ProjectDetails = styled.div`
  font-size: 2rem;
  text-align: center;
  color: white;
  height: 100%;
  z-index: 6;

  > p:first-child {
    text-decoration: underline;
  }

  > p:nth-child(2) {
    line-height: 4rem;
  }
`;

const ProjectTitleWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 2px solid lightgray;
  position: relative;
  z-index: 17;
  background: white;

  > svg {
    margin-left: 5%;
  }
`;

const BackCardBackgroundImage = styled.div`
  height: 100%;
  width: 100%;
  z-index: -1;
  position: absolute;
  top: 0;
  left: 0;
  background-image: linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)),
    url(${({ imageBack }) => imageBack});
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
`;

const Project = ({
  _id,
  projectTitle,
  imageFront,
  imageBack,
  images,
  bitBucketLink,
  demoLink,
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

  const largeDisplayProps = {
    images,
    githubLink,
    liveSite,
    description,
    technology,
    projectTitle,
    handleProjectToggle,
    demoLink,
    bitBucketLink
  };

  return (
    <ProjectWrapper
      projectLaunching={largeProjectOpen}
      projectClosing={largeProjectClosed}
      backgroundSrcFront={imageFront}
      largeContentStartingPosition={largeContentStartingPosition}
    >
      <LargeProjectContent {...largeDisplayProps} />

      <div className="card">
        <div className="card_side card_side_front">
          <ProjectTitle ref={titleRef}>{projectTitle}</ProjectTitle>
        </div>
        <div className="card_side card_side_back">
          <ProjectTitleWrapper>
            <ProjectTitle>{projectTitle}</ProjectTitle>
            <FontAwesomeIcon
              onClick={handleProjectToggle}
              icon={faExternalLinkSquareAlt}
            />
          </ProjectTitleWrapper>
          <ProjectDetails>
            <BackCardBackgroundImage imageBack={imageBack} />
            <p>Tech Used:</p>
            <p>{technology.join(", ")}</p>
          </ProjectDetails>
        </div>
      </div>
    </ProjectWrapper>
  );
};

export default Project;
