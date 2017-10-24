import React from 'react';
import Education from './education.js';
import Background from './background.js';

const EduBackHolder = (props) => {
  return (
    <div className="row">
      <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12" id="secondColorBar">
        <Background />
        <Education />
      </div>
    </div>
  );
};

export default EduBackHolder;
