import React, { useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useMappedState } from 'react-use-mapped-state';

import { iconMap, PATH_MAP } from '../../Shared/constants';
import {
  IconBarWrapper,
  IconTextWrapper,
  NavItemWrapper,
} from './IconBar-Components';

const IconBar = ({ history, location: { pathname }, viewingMainContent }) => {
  const [{ currentlySelectedIcon }, valueSetter] = useMappedState({
    currentlySelectedIcon: pathname || 0,
  });

  const handleNavigation = (path, url) => {
    if (path) {
      history.push(path);
      return;
    }
    window.open(url, '_blank').focus();
  };

  useEffect(() => {
    const areWeStillOnSamePage = currentlySelectedIcon === PATH_MAP[pathname];
    if (!areWeStillOnSamePage) {
      valueSetter('currentlySelectedIcon', PATH_MAP[pathname]);
    }
  }, [pathname, PATH_MAP, currentlySelectedIcon, valueSetter]);

  return (
    <>
      <IconBarWrapper mainContentBeingViewed={viewingMainContent}>
        {iconMap.map(({ key, icon, text, path, url }, index) => {
          return (
            <NavItemWrapper
              selected={currentlySelectedIcon === index}
              key={key}
              onClick={
                currentlySelectedIcon !== index
                  ? () => handleNavigation(path, url)
                  : null
              }
            >
              <FontAwesomeIcon name={text} id='icon-icon' icon={icon} />
              <IconTextWrapper
                selected={currentlySelectedIcon === index}
                id='icon-text'
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
