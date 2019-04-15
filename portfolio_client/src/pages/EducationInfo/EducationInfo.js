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
  height: 100vh;
  width: 100vw;
  background: black;
  display: grid;
  color: white;
  grid-template-columns: repeat(12, 1fr);
`;

const FormalEducation = styled.div`
  grid-row: 1 / span 2;
  grid-column: 1 / span 8;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const CertificateEducationWrapper = styled.div`
  grid-row: 1 / span 1;
  grid-column: 8 / span 4;
`;

const OtherEducationWrapper = styled.div`
  grid-row: 2 / span 1;
  grid-column: 8 / span 4;
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
