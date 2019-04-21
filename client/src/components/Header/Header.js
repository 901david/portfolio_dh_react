import React from "react";
import styled from "styled-components";

const HeaderImage = styled.img`
  height: 10rem;
  width: auto;
`;

const Header = props => {
  return (
    <div id="nav">
      <div className="mainHolder">
        <HeaderImage src="./images/headshot_comp.jpg" alt="headshot" />
      </div>
      <div id="navNameHolder">
        <p id="mainNameHeader">David Hammond</p>
        <div>
          <p id="emailFormat">VDavidHammond@Gmail.com</p>
        </div>
      </div>
    </div>
  );
};

export default Header;
