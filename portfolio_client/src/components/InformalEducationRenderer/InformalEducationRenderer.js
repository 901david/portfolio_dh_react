import React from "react";
import _ from "lodash";
import styled from "styled-components";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { SkillsTitle } from "../../pages/SkillsInfo/SkillsInfo";

export const CourseItem = styled.div`
  display: flex;
  font-size: 1rem;

  > span {
    margin-left: 1rem;
  }

  > svg {
    font-size: 1.5rem;
  }
`;
export const CourseItemsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items:space-around
  height: 100%;
  width: 75%;
`;

const Subtitle = styled.h6`
  font-style: italic;
  margin: 0 0 3% 0;
  font-size: 1rem;
`;

const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const Title = styled(SkillsTitle)`
  font-size: 1.8rem;
`;

const InformalEducationRenderer = ({ courseList }) => (
  <CourseItemsWrapper>
    <TitleWrapper>
      <Title>Udemy</Title>
      <Subtitle>Certificate of Completion</Subtitle>
    </TitleWrapper>
    {courseList.map(({ name, icon }) => {
      return (
        <CourseItem key={_.uniqueId("courseItem-")}>
          <FontAwesomeIcon icon={icon} />
          <span>{name}</span>
        </CourseItem>
      );
    })}
  </CourseItemsWrapper>
);

export default InformalEducationRenderer;
