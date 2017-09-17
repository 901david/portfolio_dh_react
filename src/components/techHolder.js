import React, { Component } from 'react';
import TechnicalAdditional from './techspecs.js';
import Technical from './technical.js';
const TechHolder = (props)=>{
  return (
    <div className="row">
      <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 colorBox">
        <Technical />
        <TechnicalAdditional />
      </div>
    </div>
  );
};

export default TechHolder;
