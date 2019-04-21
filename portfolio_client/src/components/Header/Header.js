import React from "react";
import { withRouter } from "react-router-dom";
import styled from "styled-components";
import PropTypes from "prop-types";

const HeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  background-image: url("./images/topBar_edited.jpg");
  color: white;
  background-size: cover;
  grid-row: header-start / header-end;
  grid-column: sideBar-start / -1;

  @media only screen and (max-width: 800px) {
    grid-column: 1 / -1;
    grid-row: 1 / span 1;
  }
`;

export const HeadShot = styled.img`
  border-radius: 50%;
  height: 10rem;
  width: auto;
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
`;

Tagline.defaultProps = {
  cursor: null
};

Tagline.propTypes = {
  fontSize: PropTypes.number.isRequired,
  letterSpacing: PropTypes.number.isRequired,
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
      <HeadShot src="./images/headshot_comp.jpg" alt="headshot" />
      <TaglineWrapper>
        <Tagline fontSize={3} letterSpacing={20}>
          David Hammond
        </Tagline>
        <Tagline
          onClick={handleContactNavigation}
          cursor={"pointer"}
          fontSize={1.5}
          letterSpacing={15}
        >
          VDavidHammond@Gmail.com
        </Tagline>
      </TaglineWrapper>
    </HeaderWrapper>
  );
};

export default withRouter(Header);
