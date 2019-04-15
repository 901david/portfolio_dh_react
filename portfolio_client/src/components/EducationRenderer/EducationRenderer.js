import React from "react";
import styled from "styled-components";

const EducationItemWrapper = styled.div``;

const TitleWrapper = styled.div``;

const Description = styled.p`
  max-width: 25rem;
`;

const EducationRenderer = ({ title, degree, dates, description }) => (
  <EducationItemWrapper>
    <TitleWrapper>
      <h4>{title}</h4>
      <span>{dates}</span>
    </TitleWrapper>
    <p>{degree}</p>
    <Description>{description}</Description>
  </EducationItemWrapper>
);

export default EducationRenderer;
