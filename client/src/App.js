import React, { Component } from 'react';
import './App.css';
import portfolioData from './portfolioData.js';
import Nav from './components/nav.js';
import Objective from './components/objective.js';
import TechHolder from './components/techHolder.js';
import ContactBar from './components/contactBar.js';
import Projects from './components/projectHolder.js';
import Alert from 'react-s-alert';
import 'react-s-alert/dist/s-alert-css-effects/scale.css';
import 'react-s-alert/dist/s-alert-default.css';
import ProjModal from './components/Modal';
import Collaspible from 'react-collapsible';
import EduBackHolder from './components/Edu_Back_Holder';
import CollapseComp from './components/Collapse_Comp';
import Footer from './components/Footer';
import EmailModal from './components/Email_Modal';

class Portfolio extends Component {
  constructor(props) {
    super(props);
    this.state = {
        modalIsOpen: false,
        currentIndex: 0,
        emailModalOpen: false,
      };
  }
  handleEmailOpen = () => this.setState({emailModalOpen: true})
  handleEmailClose = () => this.setState({emailModalOpen: false})
  handleLeftArrow = (index) => {
    index === 0 ? this.setState({ currentIndex: 5 }) : this.setState({ currentIndex: index - 1});
  }
  handleRightArrow = (index) => {
    index === 5 ? this.setState({ currentIndex: 0 }) : this.setState({ currentIndex: index + 1});
  }
  openModal = (index) => {
    this.setState({modalIsOpen: true, currentIndex: index});
  }

  closeModal = () => {
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
        <div className='row'>
        <Collaspible trigger={<CollapseComp />}>
          <EduBackHolder />
        </Collaspible>
      </div>
        <div className="row">
          <Projects projects = {portfolioData} openModal={this.openModal.bind(this)} />
        </div>
        <ContactBar handleEmailOpen={this.handleEmailOpen.bind(this)} />
        <Alert stack={{limit: 3}} />
        <ProjModal
          currentIndex={this.state.currentIndex}
          projects={portfolioData}
          openModal={this.openModal.bind(this)}
          closeModal={this.closeModal.bind(this)}
          modalIsOpen={this.state.modalIsOpen}
          leftClick={this.handleLeftArrow}
          rightClick={this.handleRightArrow} />
          <Footer />
          <EmailModal handleOpen={this.handleEmailOpen.bind(this)} handleClose={this.handleEmailClose.bind(this)} currentState={this.state.emailModalOpen} />
      </div>
    );
  }
}

export default Portfolio;
