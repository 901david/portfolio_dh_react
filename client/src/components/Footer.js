import React from 'react';

const Footer = (props) => {
  return (
    <div className='row' style={{backgroundColor: 'black', color: 'white', height: 75, textAlign: 'center'}}>
      <div className='col-xs-12'>
      <p style={{ marginTop: '2%', fontSize: 18}}>&#169; David Hammond 2017  | <span style={{cursor: 'pointer'}} onClick={props.handleOpen}>About this Page</span></p>
    </div>
    </div>
  );
};

export default Footer;
