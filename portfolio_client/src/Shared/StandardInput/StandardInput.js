import React, { useState, createRef } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import _ from "lodash";

const StandardInputWrapper = styled.div`
  position: relative;
  margin: 3rem;
  color: white;

  label {
    position: absolute;
    left: 0;
    bottom: ${({ userInput }) => (userInput ? "1.8rem" : "0.5rem")};
    font-style: italic;
    font-size: 1rem;
    transition: all 0.5s;
  }

  input {
    background: rgb(0, 0, 0, 0.6);
    border: none;
    border-bottom: solid 5px white;
    width: 40rem;
    color: white;
    font-size: 1rem;

    &:focus {
      outline: none;

      & + label {
        bottom: 1.8rem;
      }
    }
  }
`;

const emailValidation = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const StandardInput = ({ name, labelId, inputId, type, label }) => {
  const [userInput, setUserInput] = useState("");

  const inputRef = createRef();

  const onInputChangeHandler = ({ target: { value } }) => {
    setUserInput(value);
  };

  const handleValidation = () => {
    if (type === "email") {
      if (!emailValidation.exec(userInput)) {
        inputRef.current.style["border-bottom"] = "5px solid red";
      } else {
        inputRef.current.style["border-bottom"] = "5px solid white";
      }
    }

    if (type === "text" || "textarea") {
      if (userInput.length === 0) {
        inputRef.current.style["border-bottom"] = "5px solid red";
      } else {
        inputRef.current.style["border-bottom"] = "5px solid white";
      }
    }
  };

  return (
    <StandardInputWrapper userInput={userInput}>
      <input
        ref={inputRef}
        type={type}
        name={name}
        id={inputId}
        value={userInput}
        onChange={onInputChangeHandler}
        onBlur={handleValidation}
      />
      <label htmlFor={name} id={labelId}>
        {label}
      </label>
    </StandardInputWrapper>
  );
};

StandardInput.defaultProps = {
  labelId: _.uniqueId("label-"),
  inputId: _.uniqueId("input-"),
  name: _.uniqueId("name-")
};

StandardInput.propTypes = {
  name: PropTypes.string,
  labelId: PropTypes.string,
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  inputId: PropTypes.string
};

export default StandardInput;
