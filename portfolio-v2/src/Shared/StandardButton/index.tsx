import React from "react";

import { ContactButton } from "./StandardButton-Components";

interface StandardButtonProps {
  text: string; 
  clickHandler: () => void; 
  color: string; 
  disabled: boolean; 
}

export const StandardButton: React.FC<StandardButtonProps> = ({ text, clickHandler, color, disabled }) => (
  <ContactButton disabled={disabled} color={color} onClick={clickHandler}>
    <span>{text}</span>
  </ContactButton>
);
