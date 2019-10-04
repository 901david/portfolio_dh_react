import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faJs } from "@fortawesome/free-brands-svg-icons";

import {
  CourseItemsWrapper,
  CourseItem
} from "../InformalEducationRenderer/InformalEducationRenderer";
import StandardTitle from "../../Shared/StandardTitle";

const CourseItemsWrapperOtherEducation = styled(CourseItemsWrapper)`
  margin-top: -6.4rem;

  > p {
    font-size: 1.8rem;
  }
`;

const OtherEducation = props => (
  <CourseItemsWrapperOtherEducation>
    <StandardTitle>Other Education</StandardTitle>
    <CourseItem>
      <FontAwesomeIcon icon={faJs} />
      <span>Testing Javascrispant - Kent C. Dodds</span>
    </CourseItem>
  </CourseItemsWrapperOtherEducation>
);

export default OtherEducation;
