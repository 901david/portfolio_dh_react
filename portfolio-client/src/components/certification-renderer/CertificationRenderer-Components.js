import styled from 'styled-components';

export const TitleWrapper = styled.div`
  font-size: 1.8rem;

  > * {
    margin-bottom: 0;
  }

  > span {
    font-size: 1rem;
    letter-spacing: 0.08rem;
  }
`;

export const DegreeWrapper = styled.p`
  font-style: italic;
  font-size: 1rem;
  margin-bottom: 0;
`;

export const Description = styled.p`
  max-width: 25rem;
  font-size: 1rem;

  a,
  a:hover,
  a:visited,
  a:active {
    color: white;
    margin-left: 5px;
  }
`;
