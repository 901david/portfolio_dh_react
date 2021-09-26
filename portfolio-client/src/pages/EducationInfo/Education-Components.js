import styled from 'styled-components';
import StandardTitle from '../../Shared/StandardTitle';

export const ShortenedStandardTitle = styled(StandardTitle)`
  width: 60%;
`;

export const EducationInfoWrapper = styled.div`
  // background: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),
  //   url(https://cdn.stocksnap.io/img-thumbs/960w/ANC5ACJ7V0.jpg) black;
  // -webkit-background-size: cover;
  // -moz-background-size: cover;
  // -o-background-size: cover;
  // background-size: cover;
  padding-left: 24vw;
  height: 80vh;
  min-height: 80vh;
  overflow: auto;
  color: white;

  @media only screen and (max-width: 800px) {
    // background: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),
    //   url(https://cdn.stocksnap.io/img-thumbs/960w/ANC5ACJ7V0.jpg) black
    //     repeat-y center center fixed;
    // height: 120%;
    width: 100vw;
    padding-left: 0;
  }
`;

export const EducationWrapper = styled.div`
  padding-left: 0;
`;
