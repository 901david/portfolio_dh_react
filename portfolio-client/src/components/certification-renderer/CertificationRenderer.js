import React from "react";
import styled from "styled-components";
import { ShortenedStandardTitle } from "../../pages/EducationInfo/Education-Components";

export const TitleWrapper = styled.div`
  font-size: 1.8rem;

  > * {
    margin-bottom: 0;
  }

  > span {
    font-size: 1rem;
    letter-spacing: 0.08rem;
  }
`;

const DegreeWrapper = styled.p`
  font-style: italic;
  font-size: 1rem;
  margin-bottom: 0;
`;

const Description = styled.p`
  max-width: 25rem;
  font-size: 1rem;

  a,
  a:hover,
  a:visited,
  a:active {
    color: white;
    margin-left: 5px;
  }
`;

const CertificationRenderer = ({ title, degree, dates, description }) => (
  <div>
    <TitleWrapper>
      <ShortenedStandardTitle>{title}</ShortenedStandardTitle>
    </TitleWrapper>
    <DegreeWrapper>{dates}</DegreeWrapper>
    <DegreeWrapper>{degree}</DegreeWrapper>
    <Description>
      <span>
        <a
          href="httspans://aws.amazon.com/certification/certified-devops-engineer-professional/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Validates the following skills:
        </a>
      </span>
      <ul>
        <li>
          Implement and manage continuous delivery systems and methodologies on
          AWS
        </li>
        <li>
          Implement and automate security controls, governance processes, and
          compliance validation
        </li>
        <li>
          Define and deploy monitoring, metrics, and logging systems on AWS
        </li>
        <li>
          Implement systems that are highly available, scalable, and
          self-healing on the AWS platform
        </li>
        <li>
          Design, manage, and maintain tools to automate operational processes
        </li>
      </ul>
      <a
        href="https://www.certmetrics.com/amazon/public/badge.aspx?i=5&t=c&d=2020-01-06&ci=AWS01064610"
        target="_blank"
        rel="noopener noreferrer"
      >
        View Badge
      </a>
    </Description>
  </div>
);

export default CertificationRenderer;
