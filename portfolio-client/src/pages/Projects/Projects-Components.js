import styled, { css } from 'styled-components';

import {
  animateLargeProjectContentIn,
  animateLargeProjectContentOut,
} from '../../Shared/animations';

export const CloseContainer = styled.div`
  padding: 0.2em;
  border-radius: 50%;
  display: inline-block;
  position: absolute;
  top: 1rem;
  right: 1rem;
  transform: scale(1);
  transition: all 0.5s;
  cursor: pointer;

  &:hover {
    transform: scale(1.1);
  }

  &:active {
    transform: scale(1);
  }
`;

export const PreviewImage = styled.img`
  width: 10vw;
  max-height: 6vw;
  margin: 1rem;
  border: 2px solid rgba(255, 255, 255, 0.7);
  transform: scale(1);
  opacity: 0.5;
  border-radius: 5px;

  ${({ loaded }) =>
    loaded &&
    `
      border:2px solid rgba(69, 69, 248, 0.7);
  transform: scale(1.2);
  opacity: 1;

      `};
`;

export const PreviewImageContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 45vw;
  justify-content: center;

  > * {
    margin: 3%;
  }
`;

export const LargeImage = styled.img`
  height: 25rem;
  width: auto;
  border-radius: 5px;
`;

export const LargeImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 3%;
`;

export const LargeImageProjectTitle = styled.div`
  color: black;
  font-size: 2.5rem;
  whitespace: no-wrap;
  width: 45vw;
  margin: 1.5rem 0;
  padding-bottom: 0.3rem;
  text-align: center;
`;
export const ProjectIconWrapper = styled.div`
  display: flex;
  justify-content: center;

  svg {
    font-size: 1.5rem;
    margin: 0 2rem 2rem 2rem;
  }
`;

export const Text = styled.p`
  color: black;
  font-size: 1.5rem;
  line-height: 1.8rem;
  width: ${({ textWidth }) => (textWidth ? textWidth : '100%')};
  ${({ textAlign }) => textAlign && `text-align: ${textAlign}`}
`;

export const StyledLinkContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const StyledLink = styled.a`
  text-decoration: none;
  color: black;
  font-size: 1rem;
`;

export const TextWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-size: 1.8rem;

  > p:first-child {
    margin: 0;
    padding: 0;
    font-size: 1.5rem;
  }
`;

export const TextTitle = styled.p`
  font-weight: bold;
`;

const projectLaunch = position => css`
  animation: ${animateLargeProjectContentIn(position)} 0.2s ease forwards;
`;

const projectClose = position => css`
  animation: ${animateLargeProjectContentOut(position)} 0.2s ease forwards;
`;

export const ProjectWrapper = styled.div`
  overflow: hidden;
  height: auto;
  padding-top: 2.5rem;

  .card {
    perspective: 150rem;
    -moz-perspective: 150rem;
    width: 42rem;
    height: 30rem;

    &_side {
      background: ${({ cardBackground }) => cardBackground};
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
        background-size: contain;
        background-position: left 55% bottom 45%;
        display: flex;
        align-items: center;
        justify-content: center;
        background-repeat: no-repeat;
      }

      &_back {
        background: ${({ cardBackground }) => cardBackground};
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
            transform: scale(1.05);
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
      cursor: pointer;
    }
  }

  .large-project {
    display: flex;
    width: 0;
    height: 0;
    background: white;
    color: black;
    position: absolute;
    overflow-x: scroll;
    align-items: flex-start;

    ${({ largeContentStartingPosition: { top, left } }) =>
      css`
        top: ${top}px;
        left: ${left}px;
      `};
    // z-index: -1;
    z-index: 100;

    ${({ projectLaunching }) => projectLaunching && projectLaunch}
    ${({ projectClosing }) => projectClosing && projectClose}


    

    .large-project-content {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
    }

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

export const ProjectDetails = styled.div`
  font-size: 2rem;
  text-align: center;
  color: white;
  height: 100%;
  z-index: 6;
  background: ${({ cardBackground }) => cardBackground}

  > p:first-child {
    text-decoration: underline;
  }

  > p:nth-child(2) {
    line-height: 4rem;
  }
`;

export const ProjectTitleWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 2px solid lightgray;
  position: relative;
  z-index: 17;
  background: white;

  > svg {
    position: absolute;
    top: 0;
    right: 0;
    margin-right: 2%;
  }
`;

export const BackCardBackgroundImage = styled.div`
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

export const ProjectsWrapper = styled.div`
  padding-left: 8vw;
  height: 80vh;
  display: flex;
  justify-content: center;
  color: white;
  // background: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),
  //   url(https://images.unsplash.com/photo-1416339158484-9637228cc908?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1934&q=80)
  //     black;
  // background-size: cover;

  @media only screen and (max-width: 800px) {
    // background-attachment: fixed;
    // height: 120%;
    width: 100vw;
    padding-left: 0;
  }
`;

export const IconWrapper = styled.div`
  flex: ${({ amount }) => amount};
  display: flex;
  justify-content: ${({ position }) => position};
  align-items: center;
  font-size: 8rem;
  padding: 1rem;
  ${({ marginTop }) =>
    marginTop !== undefined
      ? css`
          margin-top: ${marginTop}rem;
        `
      : ''};

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

export const IndividualProjectWrapper = styled.div`
  font-size: 3rem;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
  align-items: center;
`;
