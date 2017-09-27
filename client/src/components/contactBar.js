import React, { Component } from 'react';
import Modal from 'react-modal';

class ContactBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      modalIsOpen: false,
      email: "your email",
      subject: "subject",
      body: "your email",
      emailValidated: false
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.customStyles = {
      overlay : {
        position          : 'fixed',
        top               : 0,
        left              : 0,
        right             : 0,
        bottom            : 0,
        backgroundColor   : 'rgba(0, 0, 0, 0.75)'
      },
      content : {
        position                   : 'absolute',
        top                        : '50%',
        left                       : '50%',
        right                      : 'auto',
        bottom                     : 'auto',
        border                     : '1px solid #ccc',
        background                 : '#fff',
        overflow                   : 'auto',
        WebkitOverflowScrolling    : 'touch',
        borderRadius               : '4px',
        outline                    : 'none',
        padding                    : '20px',
        width                      : '40%',
        height                     : '85%',
        marginRight                : '-50%',
        transform                  : 'translate(-50%, -50%)'

      }

    };
    this.openModal = this.openModal.bind(this);
    this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  openModal() {
    this.setState({modalIsOpen: true});
  }

  afterOpenModal() {
    // references are now sync'd and can be accessed.
    this.subtitle.style.color = 'black';
  }

  closeModal() {
    this.setState({modalIsOpen: false});
  }
  handleInputChange (event) {
    event.preventDefault();
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
        alert('Your email failed to send');
      }
      else {
        self.closeModal();
        self.setState({email: "your email",
        subject: "subject",
        body: "your email"});
        alert('Your email was successful');
      }
    
    })
    .catch(function (error) {
      console.log('Request failed', error);

    });
  }
    else {
      // tell them wrong
      alert('Not a valid email');
    }

  }


  render () {
    return (
      <div className="col-xs-3 col-sm-2 col-md-1 col-lg-1" id="contactBar">

        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 pull-left">
          <a target="_blank" href="http://github.com/901david/"><img className="img-responsive" src="./images/gitlogo.png" alt="Github" /></a>
        </div>
        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 clear pull-left">
          <a target="_blank" href="https://www.linkedin.com/in/david-hammond-96b1b8137/"><img

            className="img-responsive" src="./images/linkedFinal.png" alt="LinkedIn" /></a>
          </div>
          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
            <a target="_blank" href="http://stackoverflow.com/users/7826396/901david?tab=profile"><img className="img-responsive" src="./images/stackoverflow.png" alt="StackOverflow" /></a>
          </div>
          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
            <a target="_blank" href="https://twitter.com/scriptscrawler"><img className="img-responsive" src="./images/twitter.png" alt="Twitter" /></a>
          </div>
          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
            <a target="_blank" href="https://vimeo.com/user62557417"><img className="img-responsive" src="./images/mountain.png" alt="Mountain View Video" /></a>
          </div>
          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 pull-left">
            <img onClick={this.openModal} style={{cursor:'pointer'}} className="img-responsive" src="./images/mail.png" alt="Email Me" />
          </div>
          <div>
            <Modal
              isOpen={this.state.modalIsOpen}
              onAfterOpen={this.afterOpenModal}
              onRequestClose={this.closeModal}
              style={this.customStyles}
              contentLabel="Email Modal"
              >
                <div className='col-lg-12' id='emailForm'>
                <h2 ref={subtitle => this.subtitle = subtitle}>Send me an Email</h2>
                <div className='col-lg-6'>

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
                  </Modal>
                </div>
              </div>
            );
          }
        };

        export default ContactBar;
