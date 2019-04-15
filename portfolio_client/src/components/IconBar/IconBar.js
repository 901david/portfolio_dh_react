import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { iconMap } from "../../Shared/constants";

const IconBarWrapper = styled.div`
  grid-row: body-start / body-end;
  grid-column: sideBar-start / sideBar-end;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  background: black;
  color: white;
  font-size: 2rem;

  > svg {
    margin: 15% 0;
  }

  > svg:first-child {
    margin-top: 15%;
  }
`;

const IconBar = props => (
  <IconBarWrapper>
    {iconMap.map(({ id, icon, text, linkTo }) => {
      return <FontAwesomeIcon icon={icon} key={id} />;
    })}
  </IconBarWrapper>
);

export default IconBar;
