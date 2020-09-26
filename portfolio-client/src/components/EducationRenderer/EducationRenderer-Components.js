import styled from 'styled-components';

export const TitleWrapper = styled.div`
  font-size: ${({ theme }) => theme['$font-size-large']};

  > * {
    margin-bottom: 0;
  }
`;

export const DegreeWrapper = styled.p`
  font-style: italic;
  font-size: ${({ theme }) => theme['$font-size-regular']};
  margin-bottom: 0;
`;

export const Description = styled.p`
  max-width: ${({ theme }) => theme['$description-max-width']};
  font-size: ${({ theme }) => theme['$font-size-regular']};
`;
