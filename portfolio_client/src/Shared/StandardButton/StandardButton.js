import React from "react";
import styled from "styled-components";

const ContactButton = styled.div`
  border-radius: 10rem;
  width: 5rem;
  font-size: ${({ fontSize }) => fontSize || 1}rem;
  border: 1px solid black;
  padding: 0.3rem 0.8rem;
  transform: translate(0, 0) scale(1);
  box-shadow: 0 0 0 rgb(250, 250, 250, 0.6);
  background: white;
  text-align: center;
  color: ${({ color }) => color};
  transition: all 0.5s;

  &:hover {
    transform: translate(0.2rem, 0) scale(1.1);
    box-shadow: 0.2rem 0.2rem 0.2rem rgb(250, 250, 250, 0.6);
  }

  &:active {
    transform: translate(-0.2rem, 0) scale(0.9);
    box-shadow: 0.1rem 0.1rem 0 rgb(250, 250, 250, 0.3);
  }
  //TODO: fix disabled
  // ${({ disabled }) => {
    //   console.log("from css", disabled);
    //   return (
    //     disabled &&
    //     `cursor: not-allowed;
    // background: gray;`
    //   );
  }}
`;

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
