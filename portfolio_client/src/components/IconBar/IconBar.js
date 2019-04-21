import React, { useState, useEffect } from "react";
import styled, { keyframes, css } from "styled-components";
import { withRouter } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { iconMap, PATH_MAP } from "../../Shared/constants";

const slideNavInDesktop = keyframes`
  0%{
    transform:translateX(-8vw);
  }
  100%{
    transform:translateX(0);

  }
`;

const triggerIconBarSlide = css`
  animation: ${slideNavInDesktop} 1s 1s forwards;
`;

const IconBarWrapper = styled.div`
  grid-row: body-start / body-end;
  grid-column: sideBar-start / sideBar-end;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  background: rgb(0, 0, 0, 1);
  color: white;
  font-size: 1.3rem;
  position: relative;
  z-index: 100;
  transform: translateX(-8vw);
  ${({ mainContentBeingViewed }) =>
    mainContentBeingViewed && triggerIconBarSlide}

  @media only screen and (max-width: 800px) {
    grid-row: 2 / span 1;
    grid-column: 1 / span 12;
    flex-direction: row;
    width: 100%;
    width: 100vw;
  }
`;

const IconTextWrapper = styled.div`
  opacity:0;
  position:absolute;
  transition:all 0.5s;
  ${({ selected }) =>
    selected &&
    `
    opacity: 1;
    `}


  &::after {
    position:absolute;
    content: "${({ text }) => text}";
  font-size: 1rem;
  white-space: nowrap;
  color: white;
  transform:translate(5px,-35px);
  ${({ selected }) =>
    selected &&
    `
    padding-bottom:0.2rem;
  border-bottom:3px solid white;
    `}
  
  }
`;

const NavItemWrapper = styled.div`
  position: relative;
  width: 100%;
  padding: 1rem;

  & > #icon-icon {
    transition: all 0.8s;
    transform: translate(25px, 0);

    ${({ selected }) =>
      selected &&
      `
    opacity: 0;
    `}
  }

  & > #icon-icon[name="Projects"] {
    transform: translate(20px, 0);
  }

  & > #icon-icon[name="Github"] {
    transform: translate(23px, 0);
  }

  &:hover > #icon-text {
    opacity: 1;
  }

  &:active > #icon-text {
    opacity: 1;
    transform: translate(10px, 0);
  }

  &:hover > #icon-icon {
    opacity: 0;
    transform: translate(25px, 0);
  }
`;

const IconBar = ({ history, location: { pathname }, viewingMainContent }) => {
  const [currentlySelectedIcon, setIconState] = useState(pathname || 0);

  const handleNavigation = (path, url) => {
    if (path) {
      history.push(path);
    } else {
      window.open(url, "_blank").focus();
    }
  };

  useEffect(() => {
    const areWeStillOnSamePage = currentlySelectedIcon === PATH_MAP[pathname];
    if (!areWeStillOnSamePage) {
      setIconState(PATH_MAP[pathname]);
    }
  }, [pathname, PATH_MAP, currentlySelectedIcon, setIconState]);

  return (
    <>
      <IconBarWrapper mainContentBeingViewed={viewingMainContent}>
        {iconMap.map(({ id, icon, text, path, url }, index) => {
          return (
            <NavItemWrapper
              selected={currentlySelectedIcon === index}
              key={id}
              onClick={
                currentlySelectedIcon !== index
                  ? () => handleNavigation(path, url)
                  : null
              }
            >
              <FontAwesomeIcon name={text} id="icon-icon" icon={icon} />
              <IconTextWrapper
                selected={currentlySelectedIcon === index}
                id="icon-text"
                text={text}
              />
            </NavItemWrapper>
          );
        })}
      </IconBarWrapper>
    </>
  );
};

export default withRouter(IconBar);
