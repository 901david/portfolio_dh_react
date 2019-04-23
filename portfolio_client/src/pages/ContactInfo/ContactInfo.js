import React, { useState, createRef } from "react";
import styled from "styled-components";

import StandardInput from "../../Shared/StandardInput";
import StandardButton from "../../Shared/StandardButton/StandardButton";
import axios from "axios";
import StandardTitle from "../../Shared/StandardTitle";

const ContactInfoWrapper = styled.div`
  padding-left: 8vw;
  height: 80vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),
    url(https://images.unsplash.com/photo-1538121915146-1dedb4191b21?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2255&q=80)
      black;
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
  width: 45vw;

  > div {
    margin-right: 8%;
  }
`;

const ContactTitle = styled(StandardTitle)`
  width: 45vw;
  white-space: nowrap;
`;

const ContactInfo = props => {
  const [clearData, setDataShouldBeCleared] = useState(false);
  const refMap = {
    yourEmail: createRef(),
    subject: createRef(),
    body: createRef()
  };

  const handleSendEmail = () => {
    const { yourEmail: email, subject, body } = refMap;

    axios
      .post("/api/contact/", { email, subject, body })
      .then(response => {
        console.log(response);
      })
      .catch(err => {
        console.log(err);
      });
  };

  const typeMap = {
    send: handleSendEmail,
    clear: () => setDataShouldBeCleared(true)
  };
  const handleClick = type => {
    const funcToExec = typeMap[type];
    if (funcToExec) {
      funcToExec();
    }
  };

  return (
    <ContactInfoWrapper>
      <ContactTitle>Contact Me</ContactTitle>
      <StandardInput
        name={"yourEmail"}
        labelId={"yourEmailLabel"}
        inputId={"yourEmail"}
        type={"email"}
        label={"Your Email"}
        shouldClear={clearData}
        ref={refMap["yourEmail"]}
      />
      <StandardInput
        name={"subject"}
        labelId={"subjectLabel"}
        inputId={"subject"}
        type={"text"}
        label={"Subject"}
        shouldClear={clearData}
        ref={refMap["subject"]}
      />
      <StandardInput
        name={"body"}
        labelId={"bodyLabel"}
        inputId={"body"}
        type={"textarea"}
        label={"Body"}
        shouldClear={clearData}
        ref={refMap["body"]}
      />
      <ButtonWrapper>
        <StandardButton
          text={"Send"}
          clickHandler={handleClick}
          value={"send"}
          color={"green"}
        />
        <StandardButton
          text={"Clear"}
          clickHandler={handleClick}
          value={"clear"}
          color={"red"}
        />
      </ButtonWrapper>
    </ContactInfoWrapper>
  );
};

export default ContactInfo;
