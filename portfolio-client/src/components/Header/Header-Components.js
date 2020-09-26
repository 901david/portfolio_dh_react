import styled from 'styled-components';
import PropTypes from 'prop-types';

export const HeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  background: black;
  color: ${({ theme }) => theme.$white};
  background-size: cover;
  grid-row: header-start / header-end;
  grid-column: sideBar-start / -1;

  @media only screen and (max-width: ${({ theme }) => theme.sizes.md}) {
    grid-row: 1 / span 1;
  }
`;

export const IconShifter = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: space-around;
  justify-content: center;

  .icons {
    position: relative;
    color: ${({ theme }) => theme.$white};
  }

  .icon-wrapper {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
  }
`;

export const MovableIcon = styled.div`
  position: absolute;
  left: ${({ left }) => left}px;
  top: ${({ top }) => top}px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  transition: all 2.5s;

  svg {
    height: ${({ heightNum }) => heightNum}px !important;
    width: ${({ widthNum }) => widthNum}px !important;
    transition: all 0.5s;
  }

  span {
    font-size: ${({ theme }) => theme['$font-size-regular']};
    opacity: ${({ active }) => (active ? 1 : 0)};
    transition: all 0.5s;
  }
`;

export const HeadShot = styled.img`
  border-radius: 50%;
  height: 8rem;
  width: auto;
  margin-left: 3%;
  border: 1px solid ${({ theme }) => theme.$white};
`;

export const Tagline = styled.p`
  font-size: ${({ fontSize }) => fontSize}rem;
  letter-spacing: ${({ letterSpacing }) => letterSpacing}px;
  white-space: nowrap;
  margin: 0 0;
  padding: 0;

  ${({ cursor }) =>
    cursor &&
    `
    cursor: ${cursor};
  `}

  @media only screen and (max-width: ${({ theme }) => theme.sizes.md}) {
    font-size: ${({ fontSizeMD, fontSize }) => fontSizeMD || fontSize}rem;
    letter-spacing: ${({ letterSpacingMD, letterSpacing }) =>
      letterSpacingMD || letterSpacing}px;
  }

  @media only screen and (max-width: ${({ theme }) => theme.sizes.sm}) {
    font-size: ${({ fontSizeMD, fontSizeSM, fontSize }) =>
      fontSizeSM || fontSizeMD || fontSize}rem;
    letter-spacing: ${({ letterSpacingMD, letterSpacingSM, letterSpacing }) =>
      letterSpacingSM || letterSpacingMD || letterSpacing}px;
  }
`;

Tagline.defaultProps = {
  cursor: null,
};

Tagline.propTypes = {
  cursor: PropTypes.string,
};

export const TaglineWrapper = styled.div`
  display: flex;
  flex-direction: column;
  font-family: ${({ theme }) => theme['$font-crimson']};
  margin-left: 8%;
`;
