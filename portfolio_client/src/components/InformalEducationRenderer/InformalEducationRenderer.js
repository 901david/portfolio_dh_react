import React from "react";
import _ from "lodash";
import styled from "styled-components";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const CourseItem = styled.div`
  display: flex;

  > span {
    margin-left: 1rem;
  }
`;
const CourseItemsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 100%;
`;

const Subtitle = styled.h6`
  font-style: italic;
  margin: 0 0 3% 0;
`;

const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  border-bottom: solid 2px white;
`;

const Title = styled.h4``;

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
