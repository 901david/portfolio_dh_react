import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faJs } from '@fortawesome/free-brands-svg-icons';

import StandardTitle from '../../Shared/StandardTitle';
import { CourseItemsWrapperOtherEducation } from './OtherEducation-Components';
import { CourseItem } from '../InformalEducationRenderer/InformalEducationRenderer-Components';

const OtherEducation = props => (
  <CourseItemsWrapperOtherEducation>
    <StandardTitle>Other Education</StandardTitle>
    <CourseItem>
      <FontAwesomeIcon icon={faJs} />
      <span>Testing Javascript - Kent C. Dodds</span>
    </CourseItem>
  </CourseItemsWrapperOtherEducation>
);

export default OtherEducation;
