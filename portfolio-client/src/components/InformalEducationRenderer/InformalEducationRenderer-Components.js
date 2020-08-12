import styled from 'styled-components';

export const CourseItem = styled.div`
  display: flex;
  font-size: 1rem;
  margin: 3px;
  justify-content: space-between;
  max-width: 30rem;

  > svg {
    font-size: 1.5rem;
s  }

  > a {
    text-decoration: none;
    color: unset;
  }
`;

export const CourseItemsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: space-around;
  height: 100%;
  width: 75%;
  margin-bottom: 6rem;
`;

export const Subtitle = styled.h6`
  font-style: italic;
  margin: 0 0 3% 0;
  font-size: 1rem;
`;

export const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
