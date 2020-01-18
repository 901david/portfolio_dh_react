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
    <DegreeWrapper>{degree}</DegreeWrapper>
    <Description>
      {description}
      <a
        href="https://www.certmetrics.com/amazon/public/badge.aspx?i=5&t=c&d=2020-01-06&ci=AWS01064610"
        target="_blank"
      >
        See Badge
      </a>
    </Description>
    <span>{dates}</span>
  </div>
);

export default CertificationRenderer;
