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

class Portfolio extends Component {
  constructor(props) {
    super(props);
    this.state = {
        modalIsOpen: false,
        currentIndex: 0,
      };
  }

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
        <ContactBar />
        <Alert stack={{limit: 3}} />
        <ProjModal
          currentIndex={this.state.currentIndex}
          projects={portfolioData}
          openModal={this.openModal.bind(this)}
          closeModal={this.closeModal.bind(this)}
          modalIsOpen={this.state.modalIsOpen}
          leftClick={this.handleLeftArrow}
          rightClick={this.handleRightArrow} />
      </div>
    );
  }
}

export default Portfolio;
