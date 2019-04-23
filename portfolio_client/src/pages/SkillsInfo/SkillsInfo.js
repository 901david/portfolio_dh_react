import React from "react";
import styled from "styled-components";
import {
  MISSION_STATEMENT,
  ADDITIONAL_SKILLS,
  TECHNICAL_SKILLS
} from "../../Shared/constants";

const SkillsInfoWrapper = styled.div`
  padding-left: 8vw;
  height: 80vh;
  background: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),
    url(https://images.pexels.com/photos/1089552/pexels-photo-1089552.jpeg?cs=srgb&dl=coffee-computer-device-1089552.jpg&fm=jpg);
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

  @media only screen and (max-width: 800px) {
    height: 75vh;
    width: 100vw;
  }
`;

const SkillsWrapper = styled.div`
  padding: 0 5rem;
  text-align: center;
`;
const MissionStatement = styled.div`
  grid-row: 1 / span 1;
  grid-column: 1 / -1;
  padding: 0 5rem;
  align-self: center;
`;

export const SkillsTitle = styled.h4`
  background: white;
  padding: 0.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  color: black;
  font-size: 2.25rem;
`;

const MissionStatementTitle = styled(SkillsTitle)`
  margin: 0 25%;
`;

const SkillsInfo = props => (
  <SkillsInfoWrapper>
    <MissionStatement>
      <MissionStatementTitle>Who Am I?</MissionStatementTitle>
      {MISSION_STATEMENT}
    </MissionStatement>
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
