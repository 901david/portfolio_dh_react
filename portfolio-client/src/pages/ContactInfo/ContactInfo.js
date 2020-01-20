import React from "react";
import { useMappedState } from "react-use-mapped-state";

import StandardInput from "../../Shared/StandardInput";
import StandardButton from "../../Shared/StandardButton/StandardButton";
import axios from "axios";
import { emailValidation } from "../../Shared/constants";
import {
  ContactInfoWrapper,
  Failure,
  Success,
  ButtonWrapper,
  ContactTitle
} from "./Contact-Components";

const ContactInfo = () => {
  const [
    {
      email,
      subject,
      body,
      submitFailed,
      submitSucceeded,
      hasemailErrors,
      hassubjectErrors,
      hasbodyErrors
    },
    valueSetter
  ] = useMappedState({
    email: "",
    subject: "",
    body: "",
    submitFailed: false,
    hasemailErrors: false,
    hassubjectErrors: false,
    hasbodyErrors: false,
    submitSucceeded: false
  });

  const submissionStatus = key => {
    valueSetter(key, true);
    const showFor = setTimeout(() => {
      valueSetter(key, false);
      clearTimeout(showFor);
    }, 5000);
  };

  const handleSendEmail = async () => {
    try {
      await axios.post(
        "https://amgzjh5om7.execute-api.us-west-2.amazonaws.com/Prod/contactdavid",
        { email, subject, body }
      );
      valueSetter("email", "");
      valueSetter("subject", "");
      valueSetter("body", "");
      submissionStatus("submitSucceeded");
    } catch (err) {
      console.error(err);
      submissionStatus("submitFailed");
    }
  };

  const clearValidation = inputRef => {
    inputRef.current.style["border-bottom"] = "5px solid white";
  };

  const typeMap = {
    send: handleSendEmail,
    clear: clearValidation
  };

  const handleClick = evt => {
    const fn = typeMap[evt.target.textContent.toLowerCase()];
    if (typeof fn === "function") {
      fn();
    }
  };

  const validateText = userInput => userInput === undefined || userInput === "";
  const validateEmail = userInput => !emailValidation.exec(userInput);

  const conditionMap = {
    body: validateText,
    email: validateEmail,
    subject: validateText
  };

  const inErroredState = (userInput, name) => {
    const condition = conditionMap[name];
    if (condition(userInput)) {
      valueSetter(`has${name}Errors`, true);
      return true;
    }
    valueSetter(`has${name}Errors`, false);
    return false;
  };

  const shouldSubmitBeDisabled = () => {
    if (!email) return true;
    if (!body) return true;
    if (!subject) return true;
    if (hasbodyErrors) return true;
    if (hassubjectErrors) return true;
    if (hasemailErrors) return true;
    return false;
  };

  const handleOnInputChange = (name, val) => {
    valueSetter(name, val);
  };

  return (
    <ContactInfoWrapper>
      {submitFailed && (
        <Failure>
          <p>I am sorry. Something went wrong.</p>
        </Failure>
      )}

      {submitSucceeded && (
        <Success>
          <p>I recieved your info, I will get back to your soon.</p>
        </Success>
      )}
      <ContactTitle>Contact Me</ContactTitle>
      <StandardInput
        name={"email"}
        labelId={"yourEmailLabel"}
        inputId={"yourEmail"}
        type={"email"}
        label={"Your Email"}
        changeFn={handleOnInputChange}
        isErrored={inErroredState}
        userInput={email}
      />

      <StandardInput
        name={"subject"}
        labelId={"subjectLabel"}
        inputId={"subject"}
        type={"text"}
        label={"Subject"}
        isErrored={inErroredState}
        changeFn={handleOnInputChange}
        userInput={subject}
      />
      <StandardInput
        name={"body"}
        labelId={"bodyLabel"}
        inputId={"body"}
        type={"textarea"}
        label={"Body"}
        isErrored={inErroredState}
        changeFn={handleOnInputChange}
        userInput={body}
      />
      <ButtonWrapper>
        <StandardButton
          text={"Send"}
          clickHandler={!shouldSubmitBeDisabled() ? handleClick : () => ({})}
          color={"green"}
          disabled={shouldSubmitBeDisabled()}
        />
        <StandardButton
          text={"Clear"}
          clickHandler={handleClick}
          color={"red"}
        />
      </ButtonWrapper>
    </ContactInfoWrapper>
  );
};

export default ContactInfo;
