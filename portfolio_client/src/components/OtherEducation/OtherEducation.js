import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faJs } from "@fortawesome/free-brands-svg-icons";

import {
  CourseItemsWrapper,
  CourseItem
} from "../InformalEducationRenderer/InformalEducationRenderer";

const CourseItemsWrapperOtherEducation = styled(CourseItemsWrapper)`
  > p {
    font-size: 1.8rem;
  }
`;

const OtherEducation = props => (
  <CourseItemsWrapperOtherEducation>
    <p>Other Education</p>
    <CourseItem>
      <FontAwesomeIcon icon={faJs} />
      <span>Testing Javascrispant - Kent C. Dodds</span>
    </CourseItem>
  </CourseItemsWrapperOtherEducation>
);

export default OtherEducation;
