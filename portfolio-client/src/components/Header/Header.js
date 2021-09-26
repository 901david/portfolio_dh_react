import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import {
  iconAnimationConfig,
  iconAnimationStarterState,
} from '../../Shared/constants';

import {
  HeaderWrapper,
  HeadShot,
  IconShifter,
  MovableIcon,
  Tagline,
  TaglineWrapper,
} from './Header-Components';
const HeadShotImage = '../images/head_edited.jpg';

const Header = ({ history }) => {
  const handleContactNavigation = () => {
    history.push('/contact');
  };
  const [iconPositionConfig, setIconPositionConfig] = useState(
    iconAnimationStarterState
  );

  useEffect(() => {
    const interval = setInterval(() => {
      const updated = [...iconPositionConfig];
      const removed = updated.pop();
      setIconPositionConfig([removed].concat(updated));
    }, 2500);
    return () => {
      clearInterval(interval);
    };
  }, [iconPositionConfig]);

  return (
    <HeaderWrapper>
      <HeadShot src={HeadShotImage} />
      <TaglineWrapper>
        <Tagline
          fontSize={3.5}
          letterSpacing={14}
          fontSizeMD={2}
          letterSpacingMD={15}
          fontSizeSM={1}
          letterSpacingSM={10}
        >
          David Hammond
        </Tagline>
        <Tagline
          onClick={handleContactNavigation}
          cursor={'pointer'}
          fontSize={1.5}
          letterSpacing={10}
          fontSizeMD={1}
          letterSpacingMD={10}
          fontSizeSM={1}
          letterSpacingSM={10}
        >
          VDavidHammond@Gmail.com
        </Tagline>
      </TaglineWrapper>
      <IconShifter>
        <div className='icons'>
          {iconAnimationConfig.map(({ icon: Icon, title, key }, idx) => {
            return (
              <MovableIcon
                key={key}
                active={iconPositionConfig[idx].active}
                heightNum={iconPositionConfig[idx].boundLength}
                widthNum={iconPositionConfig[idx].boundLength}
                top={iconPositionConfig[idx].top}
                left={iconPositionConfig[idx].left}
              >
                {Icon}
                <span>{title}</span>
              </MovableIcon>
            );
          })}
        </div>
      </IconShifter>
    </HeaderWrapper>
  );
};

export default withRouter(Header);
