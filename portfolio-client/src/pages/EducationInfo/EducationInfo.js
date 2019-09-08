import React from "react";
import _ from "lodash";

import EducationRenderer from "../../components/EducationRenderer";
import {
  FORMAL_EDUCATION_DATA,
  INFORMAL_EDUCATION_DATA
} from "../../Shared/constants";
import InformalEducationRenderer from "../../components/InformalEducationRenderer/InformalEducationRenderer";
import OtherEducation from "../../components/OtherEducation/OtherEducation";
import { EducationInfoWrapper, EducationWrapper } from "./Education-Components";

const EducationInfo = () => (
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
