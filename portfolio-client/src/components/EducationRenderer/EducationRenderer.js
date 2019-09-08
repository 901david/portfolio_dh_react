import React from "react";
import styled from "styled-components";

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
`;

const EducationRenderer = ({ title, degree, dates, description }) => (
  <div>
    <TitleWrapper>
      <div>{title}</div>
      <span>{dates}</span>
    </TitleWrapper>
    <DegreeWrapper>{degree}</DegreeWrapper>
    <Description>{description}</Description>
  </div>
);

export default EducationRenderer;
