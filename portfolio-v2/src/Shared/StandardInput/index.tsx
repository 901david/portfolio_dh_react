import React, { useRef, useEffect, useState, SyntheticEvent, MutableRefObject } from "react";
import _ from "lodash";

import { StandardInputWrapper } from "./StandardInput-Components";

interface StandardInputProps {
  name: string;
  labelId: string;
  inputId: string;
  type: string;
  label: string;
  changeFn: (name: string, value: string) => void;
  userInput: string;
  isErrored: (userInput: string, inputName: string) => boolean;
  shouldClear: boolean;
}

export const StandardInput: React.FC<StandardInputProps> = ({
  name,
  labelId,
  inputId,
  type,
  label,
  changeFn,
  userInput,
  isErrored,
  shouldClear
}) => {
  const inputRef = useRef<any>();
  const [touched, setTouched] = useState(false)

  const handleOnChange: (evt: { target: HTMLInputElement }) => void = evt => {
    if (touched === false) setTouched(true);
    if (typeof changeFn === "function") {
      changeFn(evt.target.name, evt.target.value);
    }
  };

  const handleErrors: (evt: { target: HTMLInputElement }) => void = evt => {
    if (isErrored(userInput, evt.target.name)) {
      if (inputRef.current) {
        (inputRef.current as any).style["border-bottom"] = "5px solid red";
      }
    } else {
      if (inputRef.current) {
        (inputRef.current as any).style["border-bottom"] = "5px solid white";
      }
    }
  };

  useEffect(() => {
    if (shouldClear) {
      (inputRef.current as any).style["border-bottom"] = "5px solid white";
      setTouched(false);
    }
  }, [shouldClear]);

  return (
    <StandardInputWrapper touched={touched}>
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
