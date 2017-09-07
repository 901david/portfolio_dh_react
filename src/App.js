import React, { Component } from 'react';
import './App.css';
import portfolioData from './portfolioData.js';
const Nav = (props)=> {

    return (
        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12" id='nav'>
        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
    		<p id="mainNameHeader">David Hammond</p><p id="emailFormat" >VDavidHammond@Gmail.com</p>
    	   </div>
        </div>
    );
}

const Objective = (props)=>{
  return (
    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12" id="mainContentHeaderHolder">

    <div className="col-lg-6 boxBackground animated fadeIn">
    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12" id="mainContentHeaderHolder">
      <p className="mainContentHeader">Objective</p>
    </div>
    <div className="col-xs-5 col-sm-5 col-md-5 col-lg-5 mainHolder">
    <img src="./images/headshot_comp.png" className="pull-left img-responsive" />
    </div>
      <p classild="mainText" id="objective"> I am a full stack developer with a deep interest in backend.  My diverse background, based in video editing and the legal field, allows me to have a creative, open mind, ye,t be concise and detail-oriented. I am assertive in approaching problems, and can take the lead in any situation, but can also constructively take criticism to improve my performance.  I can handle high-stress environments, while maintaining a cool head and a sense of urgency in my work.  I can play the role of a team member and lead the team, both, in a successful manner.</p>
    </div>
    </div>
  );
}

const Technical = (props)=> {
  return (
    <div className="col-xs-8 col-xs-offset-2 col-sm-8 col-sm-offset-2 col-md-3 col-md-offset-1 col-lg-3 col-lg-offset-1 boxBackground animated fadeIn" id="rightSide">
      <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 center">
      <p className="mainContentHeader">Technical Skills</p>
      </div>
      <p className="mainText">Node.js, JavaScript, jQuery, GIT, Github, GitBash, Firebase, HTML, CSS, Bootstrap, Animate CSS Media Queries, APIs, JSON, REST, AJAX, the command line, computer science fundamentals Final Cut Pro, Adobe Photoshop, Adobe Premiere Pro, Apple Motion, Adobe After Affects, Adobe Illustrator, Adobe Character Animator</p>
    </div>
  );
}

const Education = (props) => {
  return (

    <div id="education" className="col-xs-8 col-xs-offset-1 col-sm-8 col-sm-offset-1 col-md-4 col-md-offset-1 col-lg-4 col-lg-offset-1 boxBackground animated fadeIn" id="leftSide">
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
  );

}

const IndividProj = (props)=> {
    return (
      <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 centerMeTimbers">
      <div className="col-xs-10 col-sm-10 col-md-12 col-lg-12 borderBox">
      <p id={props.title}><b>{props.title}</b></p>
      <img src={props.imagePath} alt="Portfolio Image" className="img-responsive portImageGroup" /><br/><a className="textAlignPort" href={props.gitLink} target="_blank">GitHub Repo</a><span> | </span><a href={props.gitSite} target="_blank">Application</a></div></div>

    );

}

class ContactBar extends React.Component {
  render () {
    return (
      <div className="col-xs-8 col-xs-offset-2 col-sm-8 col-sm-offset-2 col-md-8 col-md-offset-2 col-lg-8 col-lg-offset-2 boxBackgroundTwo" id="contactPort">
  			<p className="contactText center">Contact Me</p>
  			<div className="col-xs-2 col-xs-offset-1 col-sm-2 col-sm-offset-1 col-md-2 col-md-offset-1 col-lg-2 col-lg-offset-1">
  			<a target="_blank" href="http://github.com/901david/"><img className="img-responsive animated fadeIn" src="./images/gitlogo.png" alt="Github" /></a>
  			</div>
  			<div className="col-xs-2 col-sm-2 col-md-2 col-lg-2">
  			<a target="_blank" href="https://www.linkedin.com/in/david-hammond-96b1b8137/"><img

        className="img-responsive animated fadeIn" src="./images/linkedFinal.png" alt="LinkedIn" /></a>
  			</div>
  			<div className="col-xs-2 col-sm-2 col-md-2 col-lg-2">
  			<a target="_blank" href="http://stackoverflow.com/users/7826396/901david?tab=profile"><img className="img-responsive animated fadeIn" src="./images/stackoverflow.png" alt="StackOverflow" /></a>
  			</div>
  			<div className="col-xs-2 col-sm-2 col-md-2 col-lg-2">
  			<a target="_blank" href="https://twitter.com/scriptscrawler"><img className="img-responsive animated fadeIn" src="./images/twitter.png" alt="Twitter" /></a>
  			</div>
  			<div className="col-xs-2 col-sm-2 col-md-2 col-lg-2">
  			<a target="_blank" href="https://vimeo.com/user62557417"><img className="img-responsive animated fadeIn" src="./images/mountain.png" alt="Mountain View Video" /></a>
  			</div>
  		</div>
    );
  }
}

const Projects = (props) => {
    return (
      <div className="col-xs-8 col-xs-offset-2 col-sm-8 col-sm-offset-2 col-md-8 col-md-offset-2 col-lg-8 col-lg-offset-2 boxBackground" id="portImages">
  		<h1 id="recentProj">Applications:</h1>
      {props.projects.map(project => <IndividProj {...project} />)}
  		</div>
    );

}

class Portfolio extends React.Component {
  render() {
    return (
      <div className='col-xs-12 col-sm-12 col-md-12 col-lg-12' id='main'>
      <Nav />
      <Objective />
      <Technical />
      <Education />
      <Projects projects = {portfolioData} />
      <ContactBar />
      </div>
    );
  }
}

export default Portfolio;
