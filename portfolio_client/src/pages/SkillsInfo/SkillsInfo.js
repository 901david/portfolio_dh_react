import React from "react";
import styled from "styled-components";

import {
  MISSION_STATEMENT,
  ADDITIONAL_SKILLS,
  TECHNICAL_SKILLS
} from "../../Shared/constants";
import StandardTitle from "../../Shared/StandardTitle";

const SkillsInfoWrapper = styled.div`
  padding-left: 8vw;
  height: 80vh;
  background: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),
    url(https://images.pexels.com/photos/1089552/pexels-photo-1089552.jpeg?cs=srgb&dl=coffee-computer-device-1089552.jpg&fm=jpg)
      black;
  background-size: cover;
  background-position: left top;
  color: white;
  display: grid;
  grid-template-rows: repeat(2, 1fr);
  grid-template-columns: repeat(2, 1fr);
  font-style: italic;
  font-weight: bold;
  line-height: 35px;
  font-size: 1rem;
  font-family: "Crimson Text", serif;
  position: relative;

  @media only screen and (max-width: 950px) {
    grid-template-rows: repeat(3, 1fr);
  }

  @media only screen and (max-width: 800px) {
    height: 100%;
    width: 100vw;
    padding-left: 0;
  }
`;

const SkillsWrapper = styled.div`
  padding: 0 5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  align-self: start;

  @media only screen and (max-width: 950px) {
    grid-column: 1 / -1;
    margin-top: 2rem;
  }
`;

const MissionStatement = styled.div`
  grid-row: 1 / span 1;
  grid-column: 1 / -1;
  padding: 0 5rem;
  align-self: center;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media only screen and (max-width: 950px) {
    margin-top: 2rem;
  }
`;

export const SkillsTitle = styled(StandardTitle)`
  margin-top: -1rem;

  @media only screen and (max-width: 1000px) {
    margin-bottom: 0.5rem;
    grid-row: ${({ rowMd }) => rowMd} / span 1;
  }
`;

const MissionStatementTitle = styled(SkillsTitle)`
  @media only screen and (max-width: 1000px) {
    margin-bottom: 0.5rem;
  }
`;

const SkillsInfo = props => (
  <SkillsInfoWrapper>
    <MissionStatement>
      <MissionStatementTitle>Who Am I?</MissionStatementTitle>
      {MISSION_STATEMENT}
    </MissionStatement>
    <SkillsWrapper rowMd={2}>
      <SkillsTitle>Technical Skills</SkillsTitle>
      {TECHNICAL_SKILLS}
    </SkillsWrapper>
    <SkillsWrapper rowMd={3}>
      <SkillsTitle>Aditional Skills</SkillsTitle>
      {ADDITIONAL_SKILLS}
    </SkillsWrapper>
  </SkillsInfoWrapper>
);

export default SkillsInfo;
