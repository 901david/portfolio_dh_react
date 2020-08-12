import React from 'react';
import { withRouter } from 'react-router-dom';

import {
  HeaderWrapper,
  HeadShot,
  Tagline,
  TaglineWrapper,
} from './Header-Components';
const HeadShotImage = '../images/head_edited.jpg';

const Header = ({ history }) => {
  const handleContactNavigation = () => {
    history.push('/contact');
  };

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
    </HeaderWrapper>
  );
};

export default withRouter(Header);
