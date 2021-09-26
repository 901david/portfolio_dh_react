import React from 'react';

import { ShortenedStandardTitle } from '../../pages/EducationInfo/Education-Components';
import { PROFESSIONAL_CERTS } from '../../Shared/constants';
import {
  DegreeWrapper,
  Description,
  TitleWrapper,
} from './CertificationRenderer-Components';

const CertificationRenderer = ({ certifications, title }) => {
  return (
    <>
      <TitleWrapper>
        <ShortenedStandardTitle>{title}</ShortenedStandardTitle>
      </TitleWrapper>
      {PROFESSIONAL_CERTS.map(
        ({ title, degree, dates, badgeLink, certUrl, skills }) => (
          <div>
            <DegreeWrapper>{degree}</DegreeWrapper>
            <DegreeWrapper>{dates}</DegreeWrapper>
            <Description>
              <span>
                <a href={certUrl} target='_blank' rel='noopener noreferrer'>
                  Validates the following skills:
                </a>
              </span>
              <ul>
                {skills.map((skill, i) => {
                  return <li key={i}>{skill}</li>;
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

/* <div>
        <TitleWrapper>
          <ShortenedStandardTitle>{title}</ShortenedStandardTitle>
        </TitleWrapper>
        <DegreeWrapper>{dates}</DegreeWrapper>
        <DegreeWrapper>{degree}</DegreeWrapper>
        <Description>
          <span>
            <a
              href='httspans://aws.amazon.com/certification/certified-devops-engineer-professional/'
              target='_blank'
              rel='noopener noreferrer'
            >
              Validates the following skills:
            </a>
          </span>
          <ul>
            <li>
              Implement and manage continuous delivery systems and methodologies
              on AWS
            </li>
            <li>
              Implement and automate security controls, governance processes,
              and compliance validation
            </li>
            <li>
              Define and deploy monitoring, metrics, and logging systems on AWS
            </li>
            <li>
              Implement systems that are highly available, scalable, and
              self-healing on the AWS platform
            </li>
            <li>
              Design, manage, and maintain tools to automate operational
              processes
            </li>
          </ul>
          <a
            href='https://www.certmetrics.com/amazon/public/badge.aspx?i=5&t=c&d=2020-01-06&ci=AWS01064610'
            target='_blank'
            rel='noopener noreferrer'
          >
            View Badge
          </a>
        </Description>
      </div> */

export default CertificationRenderer;
