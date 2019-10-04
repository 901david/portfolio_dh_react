import React from "react";
import { withRouter } from "react-router-dom";
import styled from "styled-components";
import PropTypes from "prop-types";

const HeaderImage = "../../images/topBar_edited.jpg";
const HeadShotImage = "../../images/head_edited.jpg";

const HeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  background: url(${HeaderImage}) black;
  color: white;
  background-size: cover;
  grid-row: header-start / header-end;
  grid-column: sideBar-start / -1;

  @media only screen and (max-width: 800px) {
    grid-row: 1 / span 1;
  }
`;

export const HeadShot = styled.img`
  border-radius: 50%;
  height: 8rem;
  width: auto;
  margin-left: 3%;
  border: 1px solid white;
`;

export const Tagline = styled.p`
  font-size: ${({ fontSize }) => fontSize}rem;
  letter-spacing: ${({ letterSpacing }) => letterSpacing}px;
  white-space: nowrap;
  margin: 2% 0;
  padding: 0;

  ${({ cursor }) =>
    cursor &&
    `
    cursor: ${cursor};
  `}

  @media only screen and (max-width: 800px) {
    font-size: ${({ fontSizeMD, fontSize }) => fontSizeMD || fontSize}rem;
    letter-spacing: ${({ letterSpacingMD, letterSpacing }) =>
      letterSpacingMD || letterSpacing}px;
  }

  @media only screen and (max-width: 600px) {
    font-size: ${({ fontSizeMD, fontSizeSM, fontSize }) =>
      fontSizeSM || fontSizeMD || fontSize}rem;
    letter-spacing: ${({ letterSpacingMD, letterSpacingSM, letterSpacing }) =>
      letterSpacingSM || letterSpacingMD || letterSpacing}px;
  }
`;

Tagline.defaultProps = {
  cursor: null
};

Tagline.propTypes = {
  cursor: PropTypes.string
};

const TaglineWrapper = styled.div`
  display: flex;
  flex-direction: column;
  font-family: "Anton", sans-serif;
  margin-left: 8%;
`;

const Header = ({ history }) => {
  const handleContactNavigation = () => {
    history.push("/contact");
  };

  return (
    <HeaderWrapper>
      <HeadShot src={HeadShotImage} />
      <TaglineWrapper>
        <Tagline
          fontSize={3}
          letterSpacing={20}
          fontSizeMD={2}
          letterSpacingMD={15}
          fontSizeSM={1}
          letterSpacingSM={10}
        >
          David Hammond
        </Tagline>
        <Tagline
          onClick={handleContactNavigation}
          cursor={"pointer"}
          fontSize={1.5}
          letterSpacing={15}
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
