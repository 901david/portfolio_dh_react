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

const ContactInfo = () => {
  const getNewMap = () => {
    const fields = ["yourEmail"];
    return [
      Array(3)
        .fill(0)
        .map((_, i) => fields[i])
    ];
  };

  const [inputMap, setInputMap] = useState(new Map(getNewMap()));
  const [submitFailed, showFailureError] = useState(false);
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
      .then(() => {
        setInputMap(getNewMap());
      })
      .catch(err => {
        console.log(err);
        submissionFailed();
      });
  };

  const typeMap = {
    send: handleSendEmail,
    clear: () => {
      setInputMap(getNewMap());
      clearValidation();
    }
  };
  const handleClick = type => {
    const funcToExec = typeMap[type];
    if (funcToExec) {
      funcToExec();
    }
  };

  const handleEmailValidation = name => {
    if (inputMap.has(name)) {
      const userInput = inputMap.get(name);
      console.log(refMap[name]);
      if (!emailValidation.exec(userInput)) {
        refMap[name].current.style["border-bottom"] = "5px solid red";
      } else {
        refMap[name].current.style["border-bottom"] = "5px solid white";
      }
    }
  };

  const handleTextValidation = name => {
    if (inputMap.has(name)) {
      const userInput = inputMap.get(name);

      if (userInput === undefined || userInput.length === 0) {
        refMap[name].current.style["border-bottom"] = "5px solid red";
      } else {
        refMap[name].current.style["border-bottom"] = "5px solid white";
      }
    }
  };

  const clearValidation = inputRef => {
    inputRef.current.style["border-bottom"] = "5px solid white";
  };

  const shouldSubmitBeDisabled = () => {
    let disabled = false;
    for (let val of inputMap.values()) {
      if (!val) disabled = true;
    }
    return disabled;
  };

  const handleOnInputChange = (val, name) => {
    console.log(val, name);
    setInputMap(inputMap.set(name, val));
  };
  console.log(inputMap);

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
        forwardedRef={refMap["yourEmail"]}
        changeFn={handleOnInputChange}
        blurFn={handleEmailValidation}
        userInput={inputMap.get("yourEmail")}
      />
      {/* <StandardInput
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
        blurFn={formHasBeenTouched}
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
        blurFn={formHasBeenTouched}
      /> */}
      <ButtonWrapper>
        <StandardButton
          text={"Send"}
          clickHandler={shouldSubmitBeDisabled() ? handleClick : () => ({})}
          value={"send"}
          color={"green"}
          disabled={shouldSubmitBeDisabled()}
        />
        <StandardButton
          text={"Clear"}
          clickHandler={() => handleClick("clear")}
          value={"clear"}
          color={"red"}
        />
      </ButtonWrapper>
    </ContactInfoWrapper>
  );
};

export default ContactInfo;
