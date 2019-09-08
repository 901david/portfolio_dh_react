import React from "react";

import { ContactButton } from "./StandardButton-Components";

const StandardButton = ({ text, clickHandler, value, color, disabled }) => (
  <ContactButton
    disabled={disabled}
    color={color}
    onClick={() => clickHandler(value)}
  >
    <span>{text}</span>
  </ContactButton>
);

export default StandardButton;
