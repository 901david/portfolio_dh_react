import React, { Component } from 'react';
const Nav = (props)=> {

  return (
    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12" id='nav'>
      <div className="col-xs-1 col-sm-1 col-md-1 col-lg-2 mainHolder">
        <img src="./images/headshot_comp.png" className="pull-left img-circle img-responsive App-logo" id="mainPic" />
      </div>
      <div className="col-xs-5 col-sm-5 col-md-5 col-lg-5 pull-left">
        <p id="mainNameHeader">David Hammond</p>
        <div className="col-lg-9">
          <p id="emailFormat" >VDavidHammond@Gmail.com</p>
        </div>
      </div>
    </div>
  );
};



export default Nav;
