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
  forwardedRef,
  blurFn,
  changeFn,
  userInput
}) => {
  const inputRef = forwardedRef;

  const handleOnChange = evt => {
    if (typeof changeFn === "function") {
      changeFn(evt.target.value, evt.target.name);
    }
  };

  const handleOnBlur = evt => {
    if (typeof blurFn === "function") {
      blurFn(evt.target.name);
    }
  };

  console.log("standard input", userInput);

  return (
    <StandardInputWrapper input={userInput}>
      <input
        ref={inputRef}
        type={type}
        name={name}
        id={inputId}
        value={userInput}
        onChange={handleOnChange}
        onBlur={handleOnBlur}
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
