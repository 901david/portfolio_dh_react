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
  padding-left: 24vw;
  height: 80vh;
  min-height: 80vh;
  overflow: auto;
  color: white;

  @media only screen and (max-width: 800px) {
    background: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),
      url(https://cdn.stocksnap.io/img-thumbs/960w/ANC5ACJ7V0.jpg) black
        repeat-y center center fixed;
    height: 120%;
    width: 100vw;
    padding-left: 0;
  }
`;

const EducationWrapper = styled.div`
  padding-left: 0;
`;

const EducationInfo = props => (
  <EducationInfoWrapper>
    <EducationWrapper>
      {FORMAL_EDUCATION_DATA.slice(0, 1).map(eduItem => {
        return (
          <EducationRenderer key={_.uniqueId("eduRenderer-")} {...eduItem} />
        );
      })}
    </EducationWrapper>
    <EducationWrapper>
      {FORMAL_EDUCATION_DATA.slice(1, 1).map(eduItem => {
        return (
          <EducationRenderer key={_.uniqueId("eduRenderer-")} {...eduItem} />
        );
      })}
    </EducationWrapper>
    <EducationWrapper>
      {FORMAL_EDUCATION_DATA.slice(2).map(eduItem => {
        return (
          <EducationRenderer key={_.uniqueId("eduRenderer-")} {...eduItem} />
        );
      })}
    </EducationWrapper>
    <EducationWrapper>
      <InformalEducationRenderer courseList={INFORMAL_EDUCATION_DATA} />
    </EducationWrapper>
    <EducationWrapper>
      <OtherEducation />
    </EducationWrapper>
  </EducationInfoWrapper>
);

export default EducationInfo;
