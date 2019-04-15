import React from "react";
import styled from "styled-components";

import StandardInput from "../../Shared/StandardInput";
import StandardButton from "../../Shared/StandardButton/StandardButton";

const ContactInfoWrapper = styled.div`
  width: 95vw;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background: black;

  > div:first-child {
    margin-top: 5%;
  }
`;

const ButtonWrapper = styled.div`
  display: flex;
  justofy-content: space-around;
  width: 100%;
`;

const ContactInfo = props => {
  const handleClick = type => {
    console.log("fake " + type);
  };

  return (
    <ContactInfoWrapper>
      <StandardInput
        name={"yourEmail"}
        labelId={"yourEmailLabel"}
        inputId={"yourEmail"}
        type={"text"}
        label={"Your Email"}
      />
      <StandardInput
        name={"subject"}
        labelId={"subjectLabel"}
        inputId={"subject"}
        type={"text"}
        label={"Subject"}
      />
      <StandardInput
        name={"body"}
        labelId={"bodyLabel"}
        inputId={"body"}
        type={"textarea"}
        label={"Body"}
      />
      <ButtonWrapper>
        <StandardButton
          text={"Send"}
          clickHandler={handleClick}
          value={"send"}
        />
        <StandardButton
          text={"Clear"}
          clickHandler={handleClick}
          value={"clear"}
        />
      </ButtonWrapper>
    </ContactInfoWrapper>
  );
};

export default ContactInfo;
