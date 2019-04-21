import React from "react";
import styled from "styled-components";

import StandardInput from "../../Shared/StandardInput";
import StandardButton from "../../Shared/StandardButton/StandardButton";

const ContactInfoWrapper = styled.div`
  padding-left: 8vw;
  height: 80vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),
    url(https://images.unsplash.com/photo-1538121915146-1dedb4191b21?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2255&q=80);
  background-size: cover;

  > div:first-child {
    margin-top: 5%;
  }

  @media only screen and (max-width: 800px) {
    height: 75vh;
    width: 100vw;
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
        type={"email"}
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
