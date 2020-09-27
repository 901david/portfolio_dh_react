import React from 'react';
import {
  faTimes,
  faDesktop,
  faVideo,
  faChevronRight,
  faChevronLeft,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faGithub,
  faBitbucket,
  faDocker,
} from '@fortawesome/free-brands-svg-icons';
import { useMappedState } from 'react-use-mapped-state';

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
  TextTitle,
  IconWrapper,
} from './Projects-Components';

const LargeProjectContent = ({
  images,
  githubLink,
  dockerLink,
  liveSite,
  demoLink,
  description,
  technology,
  bitBucketLink,
  projectTitle,
  handleProjectToggle,
  handleArrowClick,
}) => {
  const [{ currentLargeImageIndex }, valueSetter] = useMappedState({
    currentLargeImageIndex: 0,
  });

  const onCloseProject = event => {
    valueSetter('currentLargeImageIndex', 0);
    handleProjectToggle(event);
  };

  return (
    <div className='large-project'>
      <IconWrapper
        amount={1}
        position={'flex-start'}
        hover={true}
        marginTop={15}
      >
        <FontAwesomeIcon onClick={handleArrowClick} icon={faChevronLeft} />
      </IconWrapper>
      <div className='large-project-content'>
        <LargeImageProjectTitle>{projectTitle}</LargeImageProjectTitle>
        <ProjectIconWrapper>
          {githubLink && (
            <StyledLinkContainer>
              <StyledLink target='_blank' href={githubLink}>
                <FontAwesomeIcon
                  title='View GitHub Repository'
                  icon={faGithub}
                />
              </StyledLink>
            </StyledLinkContainer>
          )}
          {dockerLink && (
            <StyledLinkContainer>
              <StyledLink target='_blank' href={dockerLink}>
                <FontAwesomeIcon
                  title='View GitHub Repository'
                  icon={faDocker}
                />
              </StyledLink>
            </StyledLinkContainer>
          )}
          {bitBucketLink && (
            <StyledLinkContainer>
              <StyledLink target='_blank' href={bitBucketLink}>
                <FontAwesomeIcon
                  title='View BitBucket Repository'
                  icon={faBitbucket}
                />
              </StyledLink>
            </StyledLinkContainer>
          )}
          {liveSite && (
            <StyledLinkContainer>
              <StyledLink target='_blank' href={liveSite}>
                <FontAwesomeIcon title='View Live Site' icon={faDesktop} />
              </StyledLink>
            </StyledLinkContainer>
          )}

          {demoLink && (
            <StyledLinkContainer>
              <StyledLink target='_blank' href={demoLink}>
                <FontAwesomeIcon title='View Demo' icon={faVideo} />
              </StyledLink>
            </StyledLinkContainer>
          )}
        </ProjectIconWrapper>

        <CloseContainer>
          <FontAwesomeIcon onClick={onCloseProject} icon={faTimes} />
        </CloseContainer>
        <LargeImageContainer>
          <LargeImage
            src={images[currentLargeImageIndex].url}
            alt={'project view'}
          />
        </LargeImageContainer>
        <PreviewImageContainer>
          {images.map(({ url, key }, index) => (
            <PreviewImage
              key={key}
              loaded={index === currentLargeImageIndex}
              onClick={() => valueSetter('currentLargeImageIndex', index)}
              src={url}
            />
          ))}
        </PreviewImageContainer>
        <TextWrapper>
          <TextTitle>Technologies Used:</TextTitle>
          <Text textAlign={'center'} textWidth={'75%'}>
            {technology.map(t => t.name).join(', ')}
          </Text>
        </TextWrapper>
        <TextWrapper>
          <TextTitle>Project Description:</TextTitle>
          <Text textWidth={'95%'}>{description}</Text>
        </TextWrapper>
      </div>
      <IconWrapper amount={1} position={'flex-end'} hover={true} marginTop={15}>
        <FontAwesomeIcon onClick={handleArrowClick} icon={faChevronRight} />
      </IconWrapper>
    </div>
  );
};

export default LargeProjectContent;
