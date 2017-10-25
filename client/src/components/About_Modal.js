import React, { Component } from 'react';
import {ModalContainer, ModalDialog} from 'react-modal-dialog';

class AboutModal extends Component {
  render() {
    return (
      <div onClick={this.props.handleOpen}>
      {
        this.props.currentState &&
        <ModalContainer onClose={this.props.handleClose}>
          <ModalDialog onClose={this.props.handleClose}>
            <h3>About this Page</h3>
            <p style={{margin: '0 25 0 25'}}>This page was created using React, with Node Express backend. I also used several NPM packages for many of the different components, such as: Mailgun, React Collapsible, React Modal & React Dialog Modal. Testing was done using Nightmare JS  Please visit the github page by clicking the below icon and visiting the repository.</p>
            <i onClick={this.props.handleClose} className="fa fa-times" aria-hidden="true" id="closeBar"></i>
            <a href='https://github.com/901david/portfolio_dh_react' ><i className="fa fa-github" style={{fontSize: 64}} aria-hidden="true"></i></a>
          </ModalDialog>
        </ModalContainer>
      }
      </div>
    );
  }
}

export default AboutModal;
