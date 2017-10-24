import React, { Component } from 'react';
import {ModalContainer, ModalDialog} from 'react-modal-dialog';

class EmailModal extends Component {
  state = {
    isShowingModal: false,
  }
  handleClick = () => this.setState({isShowingModal: true})
  handleClose = () => this.setState({isShowingModal: false})
  render() {
    return (
      <div onClick={this.handleClick}>
      {
        this.state.isShowingModal &&
        <ModalContainer onClose={this.handleClose}>
          <ModalDialog onClose={this.handleClose}>
            <div className='col-lg-12' id='emailForm'>
            <h2 ref={subtitle => this.subtitle = subtitle}>Send me an Email</h2>
            <div className='col-lg-8 col-lg-offset-2'>

              <form action="" onSubmit={this.handleSubmit}>
                <br/>
                <label htmlFor="emailLine">
                  Your Email Address:
                  </label>
                  <input
                    style={{width: 400 }}
                    id='emailLine'
                    name="email"
                    type="text"
                    value={this.state.email}
                    onChange={this.handleInputChange} />

                  <br/>
                  <label htmlFor="subjectLine">
                    Subject:
                    </label>
                    <input
                      style={{width: 400 }}
                      id='subjectLine'
                      name="subject"
                      type="text"
                      value={this.state.subject}
                      onChange={this.handleInputChange} />

                    <br/>
                    <label htmlFor="emailBody">
                      Email Body:
                      </label>
                      <textarea
                        style={{ height: 150, width: 400 }}
                        id='emailBody'
                        name="body"
                        type="text"
                        value={this.state.body}
                        onChange={this.handleInputChange} />

                    <button className='btn btn-warning' onClick={this.closeModal}>close</button>
                    <button type='submit' className='btn btn-success' >Submit</button>
                  </form>

                </div>
              </div>
          </ModalDialog>
        </ModalContainer>
      }
    </div>
    );
  }
}

export default EmailModal;
