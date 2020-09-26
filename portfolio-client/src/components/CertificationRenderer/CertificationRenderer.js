import React from 'react';

import { ShortenedStandardTitle } from '../../pages/EducationInfo/Education-Components';
import { PROFESSIONAL_CERTS } from '../../Shared/constants';
import {
  DegreeWrapper,
  Description,
  TitleWrapper,
} from './CertificationRenderer-Components';

const CertificationRenderer = ({ title }) => {
  return (
    <>
      <TitleWrapper>
        <ShortenedStandardTitle>{title}</ShortenedStandardTitle>
      </TitleWrapper>
      {PROFESSIONAL_CERTS.map(
        ({ degree, dates, badgeLink, certUrl, skills, key }) => (
          <div key={key}>
            <DegreeWrapper>{degree}</DegreeWrapper>
            <DegreeWrapper>{dates}</DegreeWrapper>
            <Description>
              <span>
                <a href={certUrl} target='_blank' rel='noopener noreferrer'>
                  Validates the following skills:
                </a>
              </span>
              <ul>
                {skills.map(({ skill, key }) => {
                  return <li key={key}>{skill}</li>;
                })}
              </ul>
              <a href={badgeLink} target='_blank' rel='noopener noreferrer'>
                View Badge
              </a>
            </Description>
          </div>
        )
      )}
    </>
  );
};

export default CertificationRenderer;
