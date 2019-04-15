import React from "react";
import styled from "styled-components";
import {
  MISSION_STATEMENT,
  ADDITIONAL_SKILLS,
  TECHNICAL_SKILLS
} from "../../Shared/constants";

const SkillsInfoWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background: black;
  color: white;
  display: grid;
  grid-template-rows: repeat(2, 1fr);
  grid-template-columns: repeat(2, 1fr);
  font-style: italic;
  font-weight: bold;
  line-height: 35px;
  font-size: 1rem;
  font-family: "Crimson Text", serif;
`;

const SkillsWrapper = styled.div`
  padding: 0 3rem;
  text-align: center;
`;
const MissionStatement = styled.div`
  grid-row: 1 / span 1;
  grid-column: 1 / -1;
  padding: 5rem 10rem;
`;

const SkillsTitle = styled.h4`
  border-top: solid 2px white;
  padding-top: 1rem;
`;

const SkillsInfo = props => (
  <SkillsInfoWrapper>
    <MissionStatement>{MISSION_STATEMENT}</MissionStatement>
    <SkillsWrapper>
      <SkillsTitle>Technical Skills</SkillsTitle>
      {TECHNICAL_SKILLS}
    </SkillsWrapper>
    <SkillsWrapper>
      <SkillsTitle>Aditional Skills</SkillsTitle>
      {ADDITIONAL_SKILLS}
    </SkillsWrapper>
  </SkillsInfoWrapper>
);

export default SkillsInfo;
