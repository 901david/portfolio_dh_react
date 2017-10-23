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
import ProjModal from './components/Modal';


class Portfolio extends Component {
  constructor(props) {
    super(props);
    this.state = {
        modalIsOpen: true,
        currentIndex: 0,
      };
  }


  openModal(index) {
    this.setState({modalIsOpen: true, currentIndex: index});
  }

  closeModal() {
    this.setState({modalIsOpen: false});
  }
  render() {
    // console.log(this.state.currentIndex, 'here is my index');
    return (
      <div className='col-xs-12 col-sm-12 col-md-12 col-lg-12' id='main'>
        <div className='row'>
          <Nav />
        </div>
        <Objective />
        <TechHolder />
        <div className="row">
          <Projects projects = {portfolioData} openModal={this.openModal.bind(this)} />
        </div>
        <div className="row">
          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12" id="secondColorBar">
            <Background />
            <Education />
          </div>
        </div>
        <ContactBar />
        <Alert stack={{limit: 3}} />
        <ProjModal currentIndex={this.state.currentIndex} projects={portfolioData} openModal={this.openModal} closeModal={this.props.closeModal} modalIsOpen={this.state.modalIsOpen} />
      </div>
    );
  }
}

export default Portfolio;
