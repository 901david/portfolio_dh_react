import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import _ from "lodash";

const StandardInputWrapper = styled.div`
  position: relative;
  margin: 3rem;
  color: white;

  label {
    position: absolute;
    bottom: 8px;
    font-style: italic;
    font-size: 0.8rem;
  }

  input {
    background: black;
    border: none;
    border-bottom: solid 5px white;
    width: 40rem;
    color: white;

    &:focus {
      outline: none;
    }
  }
`;

const StandardInput = ({ name, labelId, inputId, type, label }) => (
  <StandardInputWrapper>
    <label for={name} id={labelId}>
      {label}
    </label>
    <input type={type} name={name} id={inputId} />
  </StandardInputWrapper>
);

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
