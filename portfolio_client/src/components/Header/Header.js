import React from "react";
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
`;

const HeadShot = styled.img`
  border-radius: 50%;
  height: 80%;
  width: 10%;
`;

const Tagline = styled.p`
  font-size: ${({ fontSize }) => fontSize}rem;
  letter-spacing: ${({ letterSpacing }) => letterSpacing}px;
  white-space: nowrap;
  margin: 2% 0;
  padding: 0;
`;

Tagline.propTypes = {
  fontSize: PropTypes.number.isRequired,
  letterSpacing: PropTypes.number.isRequired
};

const TaglineWrapper = styled.div`
  display: flex;
  flex-direction: column;
  font-family: "Anton", sans-serif;
  margin-left: 8%;
`;

const Header = props => (
  <HeaderWrapper>
    <HeadShot src="./images/headshot_comp.jpg" alt="headshot" />
    <TaglineWrapper>
      <Tagline fontSize={3} letterSpacing={20}>
        David Hammond
      </Tagline>
      <Tagline fontSize={1.5} letterSpacing={15}>
        VDavidHammond@Gmail.com
      </Tagline>
    </TaglineWrapper>
  </HeaderWrapper>
);

export default Header;
