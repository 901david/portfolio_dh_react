import React from "react";

const StandardButton = ({ text, clickHandler, value }) => (
  <button onClick={() => clickHandler(value)}>{text}</button>
);

export default StandardButton;
