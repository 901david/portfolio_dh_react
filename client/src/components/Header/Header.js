import React from "react";
import styled from "styled-components";

const Header = props => {
  return (
    <div id="nav">
      <div className="mainHolder">
        <img
          src="./images/headshot_comp.jpg"
          alt="headshot"
          className="App-logo"
          id="mainPic"
        />
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
