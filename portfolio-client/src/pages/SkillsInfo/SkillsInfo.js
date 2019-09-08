import React from "react";

import {
  MISSION_STATEMENT,
  ADDITIONAL_SKILLS,
  TECHNICAL_SKILLS
} from "../../Shared/constants";
import {
  SkillsInfoWrapper,
  SkillsWrapper,
  MissionStatement,
  MissionStatementTitle
} from "./SkillsInfo-Components";

const SkillsInfo = () => (
  <SkillsInfoWrapper>
    <MissionStatement>
      <MissionStatementTitle>Who Am I?</MissionStatementTitle>
      {MISSION_STATEMENT}
    </MissionStatement>
    <SkillsWrapper>
      <div>Technical Skills</div>
      {TECHNICAL_SKILLS}
    </SkillsWrapper>
    <SkillsWrapper bottomMargin={2}>
      <div>Aditional Skills</div>
      {ADDITIONAL_SKILLS}
    </SkillsWrapper>
  </SkillsInfoWrapper>
);

export default SkillsInfo;
