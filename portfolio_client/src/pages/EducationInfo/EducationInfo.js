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
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  padding-left: 8vw;
  height: 80vh;
  display: grid;
  color: white;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(auto-fill, 1fr);


  @media only screen and (max-width: 800px) {
  background: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),
    url(https://cdn.stocksnap.io/img-thumbs/960w/ANC5ACJ7V0.jpg) black repeat-y center center fixed;
    grid-template-columns: 1fr;
    height: 120%;
    width: 100vw;
    padding-left: 0;

  }
`;

const FormalEducation = styled.div`
  grid-row: 1 / span 2;
  grid-column: 1 / span 2;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  
   @media only screen and (max-width: 800px) {
     grid-row: 1 / span 1;
    grid-column: 1 / -1;
    margin-top:5vh;
    padding-left: 0;


  }
`;

const CertificateEducationWrapper = styled.div`
  grid-row: 1 / span 2;
  grid-column: 3 / span 1;
  align-self: start;
  
  @media only screen and (max-width: 800px) {
    justify-self: center;
    grid-column: 1 / -1;
    grid-row: 2 / span 1;


  }
`;

const OtherEducationWrapper = styled.div`
  grid-row: 3 / span 1;
  grid-column: 3 / span 1;
  align-self: start;
  
  @media only screen and (max-width: 800px) {
    justify-self: center;
    grid-column: 1 / -1;
    grid-row: 3 / span 1;


  }
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
