import React from 'react';
import {
  DegreeWrapper,
  Description,
  TitleWrapper,
} from './EducationRenderer-Components';

const EducationRenderer = ({ title, degree, dates, description }) => (
  <div>
    <TitleWrapper>
      <div>{title}</div>
      <DegreeWrapper>{dates}</DegreeWrapper>
    </TitleWrapper>
    <DegreeWrapper>{degree}</DegreeWrapper>
    <Description>{description}</Description>
  </div>
);

export default EducationRenderer;
