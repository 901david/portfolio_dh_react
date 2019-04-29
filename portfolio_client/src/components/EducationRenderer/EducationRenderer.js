import React from "react";
import styled from "styled-components";
import { SkillsTitle } from "../../pages/SkillsInfo/SkillsInfo";

const EducationItemWrapper = styled.div`
  width: 75%;
  margin-left: 25%;
`;

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
  <EducationItemWrapper>
    <TitleWrapper>
      <SkillsTitle>{title}</SkillsTitle>
      <span>{dates}</span>
    </TitleWrapper>
    <DegreeWrapper>{degree}</DegreeWrapper>
    <Description>{description}</Description>
  </EducationItemWrapper>
);

export default EducationRenderer;
