import React, { Component } from 'react';
import './App.css';
import portfolioData from './portfolioData.js';

const Nav = (props)=> {

  return (
    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12" id='nav'>
    <div className="col-xs-1 col-sm-1 col-md-1 col-lg-1 mainHolder">
    <img src="./images/headshot_comp.png" className="pull-left img-circle img-responsive" id="mainPic" />
    </div>
    <div className="col-xs-5 col-sm-5 col-md-5 col-lg-5">
    <p id="mainNameHeader">David Hammond</p><p id="emailFormat" >VDavidHammond@Gmail.com</p>
    </div>
    </div>
  );
}

const Objective = (props)=>{
  return (
    <div className="row">
    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12" id='topMargin'>

    <div className="col-lg-12 animated fadeIn">
    <p className="mainTextTwo textMarginTwo" id="objective"> I am a full stack developer with a deep interest in backend.  My diverse background, based in video editing and the legal field, allows me to have a creative, open mind, yet be concise and detail-oriented. I am assertive in approaching problems, and can take the lead in any situation, but can also constructively take criticism to improve my performance.  I can handle high-stress environments, while maintaining a cool head and a sense of urgency in my work.  I can play the role of a team member and lead the team, both, in a successful manner. My goal is to create applications that are built on efficient and effective code.</p>
    </div>
    </div>
    </div>
  );
}

const Background = (props) =>{
  return (
    <div id="education" className="col-xs-12 col-sm-12 col-md-6 col-lg-6 animated fadeIn">
    <div className="textMargin">
    <div className="background" id="background">
    <p className="mainTitleText">AB Court Reporting & Video</p>
    <p className="supportingText">Senior Production Support</p>
    <p className="supportingText">March 2012 - present</p>
    <ul>
    <li>Responsible to ensure that legal transcripts are in perfect standing before
    being delivered to clients.
    </li>
    <li>Time management, note taking, and a high level of critical thinking are
    needed to be successful at this position.
    </li>
    <li>High attention to detail and complex document management.</li>
    <li>Case management on multiple cases.</li>
    <li>Due to performance I have been promoted to senior level, which supervises
    two other employees and is responsible for hiring and training new employees
    when necessary.
    </li>
    </ul>
    <p className="mainTitleText">Master Video Productions</p>
    <p className="supportingText">Video Editor</p>
    <p className="supportingText">January 2011-March 2012</p>
    <ul>
    <li>Handled Projects from start to finish, including meeting with clients face to
    face, writing scripts, shooting, editing and outputting to final desired codec.
    </li>
    <li>On a weekly basis responsible for closed captioning two television shows,
    which included transcribing them.
    </li>
    <li>Managed multiple projects at once with multiple deadlines to meet. </li>
    <li>Work with other editors to break up the responsibility of larger projects and
    make sure all the parts come together into a final project.
    </li>
    </ul>
    <p className="mainTitleText">Additional Work Experience</p>
    <ul>
    <li className="supportingText">Freelance Video Editor - 2007-2011, 2016-Present </li>
    <li className="supportingText">Alford Imaging – Photo Technician, Seasonal - 2010 </li>
    </ul>
    </div>
    </div>
    </div>
  );
};

const Technical = (props)=> {
  return (
    <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 boxBackground animated fadeIn" id="rightSide">
    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 center skillsTop">
    <p className="mainContentHeader">Technical Skills</p>
    </div>
    <p className="mainText textMargin">Node.js, JavaScript, jQuery, GIT, Github, GitBash, Firebase, HTML, CSS, Bootstrap, Animate CSS Media Queries, APIs, JSON, REST, AJAX, the command line, computer science fundamentals Final Cut Pro, Adobe Photoshop, Adobe Premiere Pro, Apple Motion, Adobe After Affects, Adobe Illustrator, Adobe Character Animator</p>
    </div>
  );
}

const TechnicalAdditional = (props)=> {
  return (
    <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 boxBackground animated fadeIn" id="rightSide">
    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 center skillsTop">
    <p className="mainContentHeader">Additional Skills</p>
    </div>
    <p className="mainText textMargin">Final Cut Pro, Motion, Premiere Pro, After Effects, Photoshop, Charactor Animator, Illustrator, Encore, Illustrator</p>
    </div>
  );
}

const TechHolder = (props)=>{
  return (
    <div className="row">
    <div className="col-lg-12 colorBox">
    <Technical />
    <TechnicalAdditional />
    </div>
    </div>
  );
};


const Education = (props) => {
  return (

    <div id="education" className="col-xs-12 col-sm-12 col-md-6 col-lg-6 animated fadeIn" id="leftSide">
    <div className="textMargin">
    <p className="mainTitleText">Denver University, Denver, Colorado</p>
    <p className="supportingText">April 2017 - October 2017</p>
    <p className="supportingText">DU Coding Bootcamp - Javascript Full Stack Web Development</p>
    <p>An intensive 24-week long boot camp dedicated to designing and building
    web applications. Skills learned consisted of HTML5, CSS3, Javascript, JQuery,
    Bootstrap, Firebase, & Node Js.
    </p>
    <p className="mainTitleText">Final Cut Pro, Apple Certification</p>
    <p className="supportingText">January 2010</p>
    <p className="supportingText">Certified by Apple in the Final Cut Pro Application</p>
    <p>Passed the Apple exam to become Final Cut Pro Certified. Completed the course work on all other programs in the series as well.  In addition, coursework has been completed on Adobe Premiere CS6 (2016) and Adobe Premiere CC (2017) without taking the associated exam.
    </p>

    <p className="mainTitleText">Rhodes College, Memphis, Tennessee</p>
    <p className="supportingText">2003-2007</p>
    <p className="supportingText">B.A. Religious Studies</p>
    <p>Rhodes is a 4 year Liberal Arts college where I was able to take a very wide range of classes. My major was more ont he philosophical side, Religious Studies. This was an intense major that helps to provoke intense critical thinking by reading an extremely wide range of texts and lot sof writing. This experience has set a solid foundation for life-long learning.
    </p>
    </div>
    </div>
  );

}
// make class add toggle stuff to state then call
const IndividProj = (props)=> {
  return (
    <div className="col-xs-12 col-sm-12 col-md-5 col-md-ofset-1 col-lg-5 col-lg-offset-1 centerMeTimbers">
    <div className="col-xs-10 col-sm-10 col-md-12 col-lg-12 borderBox">
    <p id={props.title}><b>{props.title}</b></p>
    <img src={props.imagePath} alt="Portfolio Image" className="img-responsive portImageGroup" /><br/><a className="textAlignPort" href={props.gitLink} target="_blank">GitHub Repo</a><span> | </span><a href={props.gitSite} target="_blank">Application</a>
    </div>
    </div>

  );

}

class ContactBar extends React.Component {
  render () {
    return (
      <div className="col-xs-8 col-sm-8 col-md-8 col-lg-1" id="contactBar">

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
      <img onClick={this.toggleModal} className="img-responsive" src="./images/mail.png" alt="Email Me" />
      </div>
      </div>
    );
  }
}

const Projects = (props) => {
  return (
    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 boxBackground" id="portImages">
    <div className="applicationMove">
    <h1 id="recentProj">Applications:</h1>
    {props.projects.map(project => <IndividProj {...project} />)}
    </div>
    </div>
  );

}


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
      <div className="col-lg-12" id="secondColorBar">
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

// data-toggle="popover" title='"<b>' + {props.title} + '</b>"' data-content='"' + {props.description} + '<b><p>Technologies Used:</b> ' +  {props.technology} + '"'data-toggle="popover" title='"<b>' + {props.title} + '</b>"' data-content='"' + {props.description} + '<b><p>Technologies Used:</b> ' +  {props.technology} + '"'
