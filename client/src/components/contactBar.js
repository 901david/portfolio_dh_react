import React, { Component } from 'react';

class ContactBar extends Component {
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
              </div>
            );
          }
        };

        export default ContactBar;
