import React, { Component } from 'react';
import {ModalContainer, ModalDialog} from 'react-modal-dialog';
import Alert from 'react-s-alert';
import 'react-s-alert/dist/s-alert-css-effects/slide.css';

class EmailModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "your email",
      subject: "subject",
      body: "your email",
      emailValidated: false
    }
  }
  handleInputChange (event) {
    event.preventDefault();
    console.log(event.target, "event target");
    // console.log(target.value, 'target value');
    console.log(target.name, 'target name');

    const target = event.target;
    const value = target.value;
    const name = target.name;
    this.setState({
      [name]: value
    });
  }
  validateEmail(value) {
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(value);
  }
  handleSubmit(event) {
    const self = this;
    event.preventDefault();
    if (this.validateEmail(this.state.email)) {
      this.setState({emailValidated: true});
      var formData = {
        "email": this.state.email,
        "body": this.state.body,
        "subject": this.state.subject
      };
      fetch('api/contact', {
      method: 'post',
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      },
        "body": JSON.stringify(formData)
    })
    .then(function (data) {
      console.log('Request succeeded with JSON response', data);
      if (data.status === 500) {
        Alert.error('<h5 class="center">There was a fatal error. Your email could not be sent. Please try again.</h5>', {
              position: 'bottom',
              effect: 'slide',
              html: true,
              beep: true,
              timeout: 3000,
              offset: 100
          });
      }
      else {
        self.closeModal();
        self.setState({email: "your email",
        subject: "subject",
        body: "your email"});
        Alert.success('<h4 class="center">Your email was sent. Thank You! I will answer shortly.</h4>', {
              position: 'top',
              effect: 'slide',
              html: true,
              beep: true,
              timeout: 2000,
              offset: 100
          });
      }

    })
    .catch(function (error) {
      console.log('Request failed', error);

    });
  }
    else {
      Alert.warning('<h5>That is not a valid email...</h5>', {
            position: 'top-left',
            effect: 'slide',
            html: true,
            beep: true,
            timeout: 3000,
            offset: 100
        });
    }

  }
  render() {
    return (
      <div onClick={this.props.handleOpen}>
      {
        this.props.currentState &&
        <ModalContainer onClose={this.props.handleClose}>
          <ModalDialog onClose={this.props.handleClose}>
            <div className='col-lg-12' id='emailForm'>
            <h2>Send me an Email</h2>
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

                    <button className='btn btn-warning' onClick={this.props.closeModal}>close</button>
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
