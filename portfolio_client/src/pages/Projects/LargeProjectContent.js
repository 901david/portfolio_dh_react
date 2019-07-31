import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { faTimes, faDesktop, faVideo } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faBitbucket } from "@fortawesome/free-brands-svg-icons";

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
  border-radius: 5px;

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
  width: 45vw;

  > * {
    margin: 3%;
  }
`;

const LargeImage = styled.img`
  height: 25rem;
  width: auto;
  border-radius: 5px;
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
  width: 45vw;
  margin: 1.5rem 0;
  padding-bottom: 0.3rem;
`;
const ProjectIconWrapper = styled.div`
  display: flex;
  justify-content: center;

  svg {
    font-size: 1.5rem;
    margin: 0 2rem 2rem 2rem;
  }
`;

const Text = styled.p`
  color: black;
  font-size: 1.5rem;
  line-height: 1.8rem;
  width: ${({ textWidth }) => (textWidth ? textWidth : "100%")};
`;

const StyledLinkContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const StyledLink = styled.a`
  text-decoration: none;
  color: black;
  font-size: 1rem;
`;

const TextWrapper = styled.div`
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

const TextTitle = styled.p`
  font-weight: bold;
`;

const LargeProjectContent = ({
  images,
  githubLink,
  liveSite,
  demoLink,
  description,
  technology,
  bitBucketLink,
  projectTitle,
  handleProjectToggle
}) => {
  const [currentLargeImageIndex, setCurrentLargeImageIndex] = useState(0);

  return (
    <div className="largeProjectContent">
      <LargeImageProjectTitle>{projectTitle}</LargeImageProjectTitle>
      <ProjectIconWrapper>
        {githubLink && (
          <StyledLinkContainer>
            <StyledLink target="_blank" href={githubLink}>
              <FontAwesomeIcon title="View GitHub Repository" icon={faGithub} />
            </StyledLink>
          </StyledLinkContainer>
        )}
        {bitBucketLink && (
          <StyledLinkContainer>
            <StyledLink target="_blank" href={bitBucketLink}>
              <FontAwesomeIcon
                title="View BitBucket Repository"
                icon={faBitbucket}
              />
            </StyledLink>
          </StyledLinkContainer>
        )}
        {liveSite && (
          <StyledLinkContainer>
            <StyledLink target="_blank" href={liveSite}>
              <FontAwesomeIcon title="View Live Site" icon={faDesktop} />
            </StyledLink>
          </StyledLinkContainer>
        )}

        {demoLink && (
          <StyledLinkContainer>
            <StyledLink target="_blank" href={demoLink}>
              <FontAwesomeIcon title="View Demo" icon={faVideo} />
            </StyledLink>
          </StyledLinkContainer>
        )}
      </ProjectIconWrapper>

      <CloseContainer>
        <FontAwesomeIcon onClick={handleProjectToggle} icon={faTimes} />
      </CloseContainer>
      <LargeImageContainer>
        <LargeImage src={images[currentLargeImageIndex]} alt={"project view"} />
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
      <TextWrapper>
        <TextTitle>Technologies Used:</TextTitle>
        <Text textWidth={"75%"}>{technology.join(", ")}</Text>
      </TextWrapper>
      <TextWrapper>
        <TextTitle>Project Description:</TextTitle>
        <Text textWidth={"45%"}>{description}</Text>
      </TextWrapper>
    </div>
  );
};

export default LargeProjectContent;
