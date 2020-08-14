import {
  faChalkboardTeacher,
  faCode,
  faGraduationCap,
  faInfinity,
  faVials,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState, useRef, useEffect } from 'react';
import { withRouter } from 'react-router-dom';

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
  const [iconPositionConfig, setIconPositionConfig] = useState([
    {
      active: false,
      boundLength: '25',
      top: '-80',
      left: '87',
    },
    {
      active: false,
      boundLength: '40',
      top: '-48',
      left: '31',
    },
    {
      active: true,
      boundLength: '64',
      top: '-30',
      left: '100',
    },
    {
      active: false,
      boundLength: '40',
      top: '-48',
      left: '213',
    },
    {
      active: false,
      boundLength: '25',
      top: '-80',
      left: '165',
    },
  ]);

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
          <MovableIcon
            active={iconPositionConfig[0].active}
            heightNum={iconPositionConfig[0].boundLength}
            widthNum={iconPositionConfig[0].boundLength}
            top={iconPositionConfig[0].top}
            left={iconPositionConfig[0].left}
          >
            <FontAwesomeIcon icon={faChalkboardTeacher} />
            <span>Teach</span>
          </MovableIcon>
          <MovableIcon
            active={iconPositionConfig[1].active}
            heightNum={iconPositionConfig[1].boundLength}
            widthNum={iconPositionConfig[1].boundLength}
            top={iconPositionConfig[1].top}
            left={iconPositionConfig[1].left}
          >
            <FontAwesomeIcon icon={faInfinity} />
            <span>Repeat</span>
          </MovableIcon>
          <MovableIcon
            active={iconPositionConfig[2].active}
            heightNum={iconPositionConfig[2].boundLength}
            widthNum={iconPositionConfig[2].boundLength}
            top={iconPositionConfig[2].top}
            left={iconPositionConfig[2].left}
          >
            <FontAwesomeIcon icon={faVials} />
            <span>Experiment</span>
          </MovableIcon>
          <MovableIcon
            active={iconPositionConfig[3].active}
            heightNum={iconPositionConfig[3].boundLength}
            widthNum={iconPositionConfig[3].boundLength}
            top={iconPositionConfig[3].top}
            left={iconPositionConfig[3].left}
          >
            <FontAwesomeIcon icon={faCode} />
            <span>Code</span>
          </MovableIcon>
          <MovableIcon
            active={iconPositionConfig[4].active}
            heightNum={iconPositionConfig[4].boundLength}
            widthNum={iconPositionConfig[4].boundLength}
            top={iconPositionConfig[4].top}
            left={iconPositionConfig[4].left}
          >
            <FontAwesomeIcon icon={faGraduationCap} />
            <span>Learn</span>
          </MovableIcon>
        </div>
      </IconShifter>
    </HeaderWrapper>
  );
};

export default withRouter(Header);
