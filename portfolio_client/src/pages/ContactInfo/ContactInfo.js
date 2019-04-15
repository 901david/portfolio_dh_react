import React from "react";
import styled from "styled-components";

import StandardInput from "../../Shared/StandardInput";

const ContactInfoWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background: black;

  > div:first-child {
    margin-top: 5%;
  }
`;

const ContactInfo = props => (
  <ContactInfoWrapper>
    <StandardInput
      name={"yourEmail"}
      labelId={"yourEmailLabel"}
      inputId={"yourEmail"}
      type={"text"}
      label={"Your Email"}
    />
    <StandardInput
      name={"subject"}
      labelId={"subjectLabel"}
      inputId={"subject"}
      type={"text"}
      label={"Subject"}
    />
    <StandardInput
      name={"body"}
      labelId={"bodyLabel"}
      inputId={"body"}
      type={"textarea"}
      label={"Body"}
    />
  </ContactInfoWrapper>
);

export default ContactInfo;
