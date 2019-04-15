import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { withRouter } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { iconMap, PATH_MAP } from "../../Shared/constants";

const IconBarWrapper = styled.div`
  grid-row: body-start / body-end;
  grid-column: sideBar-start / sideBar-end;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  background: black;
  color: white;
  font-size: 2rem;
`;

const IconTextWrapper = styled.div`
  opacity:0;
  position:absolute;
  transition:all 1s;
  ${({ selected }) =>
    selected &&
    `
    opacity: 1;
    `}
  

  &::after {
    position:absolute;
    content: "${({ text }) => text}";
  font-size: 1.2rem;
  white-space: nowrap;
  color: white;
  transform:translate(5px,-35px);

  
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

const IconBar = ({ history, location: { pathname } }) => {
  const [currentlySelectedIcon, setIconState] = useState(0);

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
    <IconBarWrapper>
      {iconMap.map(({ id, icon, text, path, url }, index) => {
        return (
          <NavItemWrapper
            selected={currentlySelectedIcon === index}
            key={id}
            onClick={() => handleNavigation(path, url)}
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
  );
};

export default withRouter(IconBar);
