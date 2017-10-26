import React from 'react';

const Background = (props) =>{
  return (
    <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
      <div className='eduTitleBoxes'>
      <h1 className="fixHeadersBack">Background:</h1>
      </div>
    <div id="education">

      <div className="textMargin">
        <div className="background" id="background">
          <div className='eduBoxes'>
            <p className="mainTitleText">Trilogy Education Services</p>
            <p className="supportingText">Teaching Assistant (Coding Bootcamp)</p>
            <p className="supportingText">October 2017 - present</p>
            <ul>
              <li>Assist instructor in presenting content to students.
              </li>
              <li>Work with students to help troubleshoot issues with learning and/or homework during office hours.
              </li>
              <li>Assist in helping students engage with content of course.</li>
            </ul>
          </div>
            <div className='eduBoxes'>
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
        </div>
        <div className='eduBoxes'>
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
        </div>
        <div className='eduBoxes'>
          <p className="mainTitleText">Additional Work Experience</p>
          <ul>
            <li className="supportingText">Freelance Video Editor - 2007-2011, 2016-Present </li>
            <li className="supportingText">Alford Imaging – Photo Technician, Seasonal - 2010 </li>
          </ul>
        </div>
        </div>
      </div>
    </div>
  </div>
  );
};
export default Background;
