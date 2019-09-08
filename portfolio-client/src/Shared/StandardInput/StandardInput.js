import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import _ from "lodash";

import { StandardInputWrapper } from "./StandardInput-Components";

const StandardInput = ({
  name,
  labelId,
  inputId,
  type,
  label,
  shouldClear,
  cbClear,
  forwardedRef,
  validator,
  clearValidation
}) => {
  const [userInput, setUserInput] = useState("");
  const inputRef = forwardedRef;

  const onInputChangeHandler = ({ target: { value } }) => {
    setUserInput(value);
  };

  const handleValidation = () => {
    if (typeof validator === "function") {
      validator(inputRef);
    }
  };

  const clearValidators = () => {
    if (typeof clearValidation === "function") {
      clearValidation(inputRef);
    }
  };

  useEffect(() => {
    if (shouldClear) {
      setUserInput("");
      clearValidators();
      if (typeof cbClear === "function") {
        cbClear();
      }
    }
  }, [shouldClear, inputRef, setUserInput, clearValidators, cbClear]);

  return (
    <StandardInputWrapper userInput={userInput}>
      <input
        ref={forwardedRef}
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
