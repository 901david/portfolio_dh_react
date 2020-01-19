import React from "react";
import { faTimes, faDesktop, faVideo } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faBitbucket } from "@fortawesome/free-brands-svg-icons";
import _ from "lodash";
import { useMappedState } from "react-use-mapped-state";

import {
  CloseContainer,
  PreviewImage,
  PreviewImageContainer,
  LargeImage,
  LargeImageContainer,
  LargeImageProjectTitle,
  ProjectIconWrapper,
  Text,
  StyledLinkContainer,
  StyledLink,
  TextWrapper,
  TextTitle
} from "./Projects-Components";

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
  const [{ currentLargeImageIndex }, valueSetter] = useMappedState({
    currentLargeImageIndex: 0
  });

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
            key={_.uniqueId("prev-img-")}
            loaded={index === currentLargeImageIndex}
            onClick={() => valueSetter("currentLargeImageIndex", index)}
            src={img}
          />
        ))}
      </PreviewImageContainer>
      <TextWrapper>
        <TextTitle>Technologies Used:</TextTitle>
        <Text textAlign={"center"} textWidth={"75%"}>
          {technology.join(", ")}
        </Text>
      </TextWrapper>
      <TextWrapper>
        <TextTitle>Project Description:</TextTitle>
        <Text textWidth={"45%"}>{description}</Text>
      </TextWrapper>
    </div>
  );
};

export default LargeProjectContent;
