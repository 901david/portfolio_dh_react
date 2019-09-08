import React, { useState, createRef } from "react";

import StandardInput from "../../Shared/StandardInput";
import StandardButton from "../../Shared/StandardButton/StandardButton";
import axios from "axios";
import { emailValidation } from "../../Shared/constants";
import {
  ContactInfoWrapper,
  Failure,
  ButtonWrapper,
  ContactTitle
} from "./Contact-Components";

const ContactInfo = props => {
  const [clearData, setDataShouldBeCleared] = useState(false);
  const [submitFailed, showFailureError] = useState(false);
  const [formTouched, setFormTouched] = useState(false);
  const refMap = {
    yourEmail: createRef(),
    subject: createRef(),
    body: createRef()
  };

  const submissionFailed = () => {
    showFailureError(true);
    const showFor = setTimeout(() => {
      showFailureError(false);
      clearTimeout(showFor);
    }, 3000);
  };

  const handleSendEmail = () => {
    const {
      yourEmail: {
        current: { value: email }
      },
      subject: {
        current: { value: subject }
      },
      body: {
        current: { value: body }
      }
    } = refMap;

    axios
      .post("/api/contact/", { email, subject, body })
      .then(response => {
        console.log(response);
        clearPub();
      })
      .catch(err => {
        console.log(err);
        submissionFailed();
      });
  };

  const clearPub = () => {
    setDataShouldBeCleared(true);
  };

  const resetPub = () => {
    setDataShouldBeCleared(false);
  };

  const typeMap = {
    send: handleSendEmail,
    clear: clearPub
  };
  const handleClick = type => {
    const funcToExec = typeMap[type];
    if (funcToExec) {
      funcToExec();
    }
  };

  const handleEmailValidation = inputRef => {
    if (inputRef.current) {
      const { value: userInput } = inputRef.current;
      let isValid = true;

      if (!emailValidation.exec(userInput)) {
        inputRef.current.style["border-bottom"] = "5px solid red";
        isValid = false;
      } else {
        inputRef.current.style["border-bottom"] = "5px solid white";
        isValid = true;
      }

      return isValid;
    }

    return false;
  };

  const handleTextValidation = inputRef => {
    if (inputRef.current) {
      const { value: userInput } = inputRef.current;
      let isValid = true;

      if (userInput.length === 0) {
        inputRef.current.style["border-bottom"] = "5px solid red";
        isValid = false;
      } else {
        inputRef.current.style["border-bottom"] = "5px solid white";
        isValid = true;
      }

      return isValid;
    }

    return false;
  };

  const clearValidation = inputRef => {
    inputRef.current.style["border-bottom"] = "5px solid white";
  };

  const shouldSubmitBeDisabled = () => {
    console.log("being called");
    return (
      !handleTextValidation(refMap["body"]) &&
      !handleTextValidation(refMap["subject"]) &&
      !handleEmailValidation(refMap["yourEmail"])
    );
  };
  console.log(refMap);
  return (
    <ContactInfoWrapper>
      {submitFailed && (
        <Failure>
          <p>I am sorry. Something went wrong.</p>
        </Failure>
      )}
      <ContactTitle>Contact Me</ContactTitle>
      <StandardInput
        name={"yourEmail"}
        labelId={"yourEmailLabel"}
        inputId={"yourEmail"}
        type={"email"}
        label={"Your Email"}
        shouldClear={clearData}
        forwardedRef={refMap["yourEmail"]}
        cbClear={resetPub}
        validator={handleEmailValidation}
        clearValidation={clearValidation}
      />
      <StandardInput
        name={"subject"}
        labelId={"subjectLabel"}
        inputId={"subject"}
        type={"text"}
        label={"Subject"}
        shouldClear={clearData}
        forwardedRef={refMap["subject"]}
        cbClear={resetPub}
        validator={handleTextValidation}
        clearValidation={clearValidation}
      />
      <StandardInput
        name={"body"}
        labelId={"bodyLabel"}
        inputId={"body"}
        type={"textarea"}
        label={"Body"}
        shouldClear={clearData}
        forwardedRef={refMap["body"]}
        cbClear={resetPub}
        validator={handleTextValidation}
        clearValidation={clearValidation}
      />
      <ButtonWrapper>
        <StandardButton
          text={"Send"}
          clickHandler={!shouldSubmitBeDisabled() ? handleClick : () => ({})}
          value={"send"}
          color={"green"}
          disabled={shouldSubmitBeDisabled()}
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
