import {
  faChalkboardTeacher,
  faCloud,
  faCode,
  faGraduationCap,
  faVials,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState, useRef, useEffect } from 'react';
import { withRouter } from 'react-router-dom';

import {
  HeaderWrapper,
  HeadShot,
  IconShifter,
  Tagline,
  TaglineWrapper,
} from './Header-Components';
const HeadShotImage = '../images/head_edited.jpg';

const Header = ({ history }) => {
  const handleContactNavigation = () => {
    history.push('/contact');
  };
  const order = ['experiment', 'teach', 'learn', 'cloud', 'code'];
  const [selectedIcon, setSelectedIcon] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      const next = selectedIcon + 1 >= order.length ? 0 : selectedIcon + 1;
      setSelectedIcon(next);
    }, 2500);
    return () => {
      clearInterval(interval);
    };
  }, [selectedIcon]);

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
          <div className='icon-wrapper'>
            <FontAwesomeIcon
              className={`header-icon ${
                order[selectedIcon] === 'experiment' ? 'header-icon__fore' : ''
              }`}
              icon={faVials}
            />
            <span
              className={
                order[selectedIcon] === 'experiment' ? 'visible' : 'hidden'
              }
            >
              Experiment
            </span>
          </div>
          <div className='icon-wrapper'>
            <FontAwesomeIcon
              className={`header-icon ${
                order[selectedIcon] === 'teach' ? 'header-icon__fore' : ''
              }`}
              icon={faChalkboardTeacher}
            />
            <span
              className={order[selectedIcon] === 'teach' ? 'visible' : 'hidden'}
            >
              Teach
            </span>
          </div>
          <div className='icon-wrapper'>
            <FontAwesomeIcon
              className={`header-icon ${
                order[selectedIcon] === 'learn' ? 'header-icon__fore' : ''
              }`}
              icon={faGraduationCap}
            />
            <span
              className={order[selectedIcon] === 'learn' ? 'visible' : 'hidden'}
            >
              Learn
            </span>
          </div>
          <div className='icon-wrapper'>
            <FontAwesomeIcon
              className={`header-icon ${
                order[selectedIcon] === 'cloud' ? 'header-icon__fore' : ''
              }`}
              icon={faCloud}
            />
            <span
              className={order[selectedIcon] === 'cloud' ? 'visible' : 'hidden'}
            >
              Cloud First
            </span>
          </div>
          <div className='icon-wrapper'>
            <FontAwesomeIcon
              className={`header-icon ${
                order[selectedIcon] === 'code' ? 'header-icon__fore' : ''
              }`}
              icon={faCode}
            />
            <span
              className={order[selectedIcon] === 'code' ? 'visible' : 'hidden'}
            >
              Code
            </span>
          </div>
        </div>
      </IconShifter>
    </HeaderWrapper>
  );
};

export default withRouter(Header);
