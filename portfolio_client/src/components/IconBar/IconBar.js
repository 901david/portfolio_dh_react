import React from "react";
import styled from "styled-components";
import { withRouter } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { iconMap } from "../../Shared/constants";

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

  &:hover > #icon-icon {
    opacity: 0;
  }
`;

const IconBar = props => {
  const handleNavigation = (path, url) => {
    const { history } = props;
    if (path) {
      history.push(path);
    } else {
      window.open(url, "_blank").focus();
    }
  };

  return (
    <IconBarWrapper>
      {iconMap.map(({ id, icon, text, path, url }) => {
        return (
          <NavItemWrapper key={id} onClick={() => handleNavigation(path, url)}>
            <FontAwesomeIcon name={text} id="icon-icon" icon={icon} />
            <IconTextWrapper id="icon-text" text={text} />
          </NavItemWrapper>
        );
      })}
    </IconBarWrapper>
  );
};

export default withRouter(IconBar);
