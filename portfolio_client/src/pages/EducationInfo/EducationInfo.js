import React from "react";
import styled from "styled-components";
import _ from "lodash";

import EducationRenderer from "../../components/EducationRenderer";
import {
  FORMAL_EDUCATION_DATA,
  INFORMAL_EDUCATION_DATA
} from "../../Shared/constants";
import InformalEducationRenderer from "../../components/InformalEducationRenderer/InformalEducationRenderer";
import OtherEducation from "../../components/OtherEducation/OtherEducation";

const EducationInfoWrapper = styled.div`
  background: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),
    url(https://cdn.stocksnap.io/img-thumbs/960w/ANC5ACJ7V0.jpg) black;
  background-size: cover;
  padding-left: 8vw;
  height: 80vh;
  display: grid;
  color: white;
  grid-template-columns: repeat(3, 1fr);
  overflow: auto;

  @media only screen and (max-width: 800px) {
    height: 75vh;
    width: 100vw;
  }
`;

const FormalEducation = styled.div`
  grid-row: 1 / span 2;
  grid-column: 1 / span 2;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const CertificateEducationWrapper = styled.div`
  grid-row: 1 / span 2;
  grid-column: 3 / span 1;
  align-self: start;
`;

const OtherEducationWrapper = styled.div`
  grid-row: 3 / span 1;
  grid-column: 3 / span 1;
  align-self: start;
`;

const EducationInfo = props => (
  <EducationInfoWrapper>
    <FormalEducation>
      {FORMAL_EDUCATION_DATA.map(eduItem => {
        return (
          <EducationRenderer key={_.uniqueId("eduRenderer-")} {...eduItem} />
        );
      })}
    </FormalEducation>
    <CertificateEducationWrapper>
      <InformalEducationRenderer courseList={INFORMAL_EDUCATION_DATA} />
    </CertificateEducationWrapper>
    <OtherEducationWrapper>
      <OtherEducation />
    </OtherEducationWrapper>
  </EducationInfoWrapper>
);

export default EducationInfo;
