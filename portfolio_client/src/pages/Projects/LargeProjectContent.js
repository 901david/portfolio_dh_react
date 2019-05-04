import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { faTimes, faDesktop, faVideo } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const CloseContainer = styled.div`
  padding: 0.2em;
  border-radius: 50%;
  display: inline-block;
  position: absolute;
  top: 1rem;
  left: 1rem;
`;

const PreviewImage = styled.img`
  height: 5vh;
  width: auto;
  margin: 1rem;
  border: 2px solid rgba(255, 255, 255, 0.7);
  transform: scale(1);
  opacity: 0.5;

  ${({ loaded }) =>
    loaded &&
    `
      border:2px solid rgba(69, 69, 248, 0.7);
  transform: scale(1.2);
  opacity: 1;

      `};
`;

const PreviewImageContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 60vw;

  > * {
    margin: 3%;
  }
`;

const LargeImage = styled.img`
  height: 25rem;
  width: auto;
`;

const LargeImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 3%;
`;

const LargeImageProjectTitle = styled.div`
  color: black;
  font-size: 2.5rem;
  whitespace: no-wrap;
`;

const Text = styled.p`
  color: black;
  font-size: 1rem;
`;

const StyledLinkContainer = styled.div`
  display: flex;
  justify-content: space-between;

  svg {
    font-size: 2rem;
    transform: scale(1);
    transition: all 0.3s;
  }

  svg:hover {
    transform: scale(1.1);
  }

  svg:active {
    transform: scale(1);
  }
`;
const StyledLink = styled.a`
  text-decoration: none;
  color: black;
  font-size: 1rem;
`;

const LinkContainer = styled.div`
  display: flex;
  justify-content: space-around;
  margin: 1rem 0;
`;
const LargeProjectContent = ({
  images,
  githubLink,
  liveSite,
  demoLink,
  description,
  technology,
  projectTitle,
  handleProjectToggle
}) => {
  const [currentLargeImageIndex, setCurrentLargeImageIndex] = useState(0);

  return (
    <div className="largeProjectContent">
      <LargeImageProjectTitle>
        {projectTitle}
        <LinkContainer>
          <StyledLinkContainer>
            <StyledLink target="_blank" href={githubLink}>
              <FontAwesomeIcon title="View GitHub Repository" icon={faGithub} />
            </StyledLink>
          </StyledLinkContainer>
          <StyledLinkContainer>
            <StyledLink target="_blank" href={liveSite}>
              <FontAwesomeIcon title="View Live Site" icon={faDesktop} />
            </StyledLink>
          </StyledLinkContainer>

          {demoLink && (
            <StyledLinkContainer>
              <StyledLink target="_blank" href={demoLink}>
                <FontAwesomeIcon title="View Demo" icon={faVideo} />
              </StyledLink>
            </StyledLinkContainer>
          )}
        </LinkContainer>
      </LargeImageProjectTitle>

      <CloseContainer>
        <FontAwesomeIcon onClick={handleProjectToggle} icon={faTimes} />
      </CloseContainer>
      <LargeImageContainer>
        <LargeImage src={images[currentLargeImageIndex]} alt={"#"} />
      </LargeImageContainer>
      <PreviewImageContainer>
        {images.map((img, index) => (
          <PreviewImage
            loaded={index === currentLargeImageIndex}
            onClick={() => setCurrentLargeImageIndex(index)}
            src={img}
          />
        ))}
      </PreviewImageContainer>
      <div className="description">
        <Text>{description}</Text>
      </div>
      <div className="technology">
        <Text>{technology.join(", ")}</Text>
      </div>
    </div>
  );
};

export default LargeProjectContent;
