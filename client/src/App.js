import React, { Component } from 'react';
import './App.css';
import portfolioData from './portfolioData.js';
import Nav from './components/nav.js';
import Objective from './components/objective.js';
import Background from './components/background.js';
import TechHolder from './components/techHolder.js';
import ContactBar from './components/contactBar.js';
import Education from './components/education.js';
import Projects from './components/projectHolder.js';
import Alert from 'react-s-alert';
import 'react-s-alert/dist/s-alert-css-effects/scale.css';
import 'react-s-alert/dist/s-alert-default.css';


class Portfolio extends Component {

  render() {
    return (
      <div className='col-xs-12 col-sm-12 col-md-12 col-lg-12' id='main'>
        <div className='row'>
          <Nav />
        </div>
        <Objective />
        <TechHolder />
        <div className="row">
          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12" id="secondColorBar">
            <Background />
            <Education />
          </div>
        </div>
        <div className="row">
          <Projects projects = {portfolioData} />
        </div>
        <ContactBar />
        <Alert stack={{limit: 3}} />
      </div>
    );
  }
}

export default Portfolio;
