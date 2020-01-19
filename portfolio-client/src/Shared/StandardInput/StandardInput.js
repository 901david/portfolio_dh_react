import React, { useRef } from "react";
import PropTypes from "prop-types";
import _ from "lodash";
import { useMappedState } from "react-use-mapped-state";

import { StandardInputWrapper } from "./StandardInput-Components";

const StandardInput = ({
  name,
  labelId,
  inputId,
  type,
  label,
  changeFn,
  userInput,
  isErrored
}) => {
  const inputRef = useRef();

  const [{ touched }, valueSetter] = useMappedState({
    touched: false
  });

  const handleOnChange = evt => {
    if (touched === false) valueSetter("touched", true);
    if (typeof changeFn === "function") {
      changeFn(evt.target.name, evt.target.value);
    }
  };

  const handleErrors = evt => {
    if (isErrored(userInput, evt.target.name)) {
      inputRef.current.style["border-bottom"] = "5px solid red";
    } else {
      inputRef.current.style["border-bottom"] = "5px solid white";
    }
  };

  return (
    <StandardInputWrapper touched={touched} isErrored={isErrored}>
      <input
        ref={inputRef}
        type={type}
        name={name}
        id={inputId}
        value={userInput}
        onChange={handleOnChange}
        onBlur={handleErrors}
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
