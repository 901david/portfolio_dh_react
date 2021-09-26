import React from 'react';

import { MISSION_STATEMENT, TECHNICAL_SKILLS } from '../../Shared/constants';
import {
  SkillsInfoWrapper,
  SkillsWrapper,
  MissionStatement,
} from './SkillsInfo-Components';
import StandardTitle from '../../Shared/StandardTitle';

const SkillsInfo = () => (
  <SkillsInfoWrapper>
    <MissionStatement>
      <StandardTitle>Who Am I?</StandardTitle>
      {MISSION_STATEMENT}
    </MissionStatement>
    <SkillsWrapper>
      <StandardTitle>Technical Skills</StandardTitle>
      {TECHNICAL_SKILLS}
    </SkillsWrapper>
  </SkillsInfoWrapper>
);

export default SkillsInfo;
