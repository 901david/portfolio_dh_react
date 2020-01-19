import React from "react";

import { ContactButton } from "./StandardButton-Components";

const StandardButton = ({ text, clickHandler, color, disabled }) => (
  <ContactButton disabled={disabled} color={color} onClick={clickHandler}>
    <span>{text}</span>
  </ContactButton>
);

export default StandardButton;
