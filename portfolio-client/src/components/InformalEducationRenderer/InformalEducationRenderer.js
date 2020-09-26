import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import StandardTitle from '../../Shared/StandardTitle';
import {
  CourseItem,
  CourseItemsWrapper,
  Subtitle,
  TitleWrapper,
} from './InformalEducationRenderer-Components';

const InformalEducationRenderer = ({ courseList }) => (
  <CourseItemsWrapper>
    <TitleWrapper>
      <StandardTitle>Udemy</StandardTitle>
      <Subtitle>Certificate of Completion</Subtitle>
    </TitleWrapper>
    {courseList.map(({ name, icon, url, key }) => {
      return (
        <CourseItem key={key}>
          <a target='_blank' rel='noreferrer noopener' href={url}>
            <span>{name}</span>
          </a>
          <FontAwesomeIcon icon={icon} />
        </CourseItem>
      );
    })}
  </CourseItemsWrapper>
);

export default InformalEducationRenderer;
