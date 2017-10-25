import React from 'react';

const CollapseComp = (props) => {
  return (
    <div style={{backgroundColor: '#860102', width: '100%', height:'100%', color: 'white', textAlign: 'center', margin:0, padding:0, cursor: 'pointer'}}>
      <p style={{fontSize: 45}}>Want to know more about me?     <i className="fa fa-arrow-down" style={{fonstSize: 65}} aria-hidden="true"></i></p>
    </div>
  );
};

export default CollapseComp;
