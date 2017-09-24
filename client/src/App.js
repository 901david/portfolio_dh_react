import React, { Component } from 'react';
import './App.css';
import portfolioData from './portfolioData.js';
import Modal from '../node_modules/react-modal';
import Nav from './components/nav.js';
import Objective from './components/objective.js';
import Background from './components/background.js';
import TechHolder from './components/techHolder.js';
import ContactBar from './components/contactBar.js';
import Education from './components/education.js';
import Projects from './components/projectHolder.js';

class Portfolio extends React.Component {

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
      </div>
    );
  }
}

export default Portfolio;
