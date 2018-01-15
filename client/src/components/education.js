import React from 'react';

const Education = (props) => {
          return (
            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">

            <div id="education">
              <div className='eduTitleBoxes'>
              <h1 className="fixHeadersEdu">Education:</h1>
              </div>
              <div className="textMargin">
                <div className='eduBoxes'>
                <p className="mainTitleText">Udemy</p>
                <p className="supportingText">Certificate of Completion for Classes</p>
                <ul>
                <li>Angular 5, formerly Angular 2</li>
                <li>Understanding TypeScript</li>
              <li>Modern React with Redux</li>
              <li>Webpack 2</li>
              <li>Coding Interview Bootcamp: Algorithms and Data Structures</li>
                </ul>
            </div>
                <div className='eduBoxes'>
                <p className="mainTitleText">Denver University, Denver, Colorado</p>
                <p className="supportingText">April 2017 - October 2017</p>
                <p className="supportingText">DU Coding Bootcamp - Javascript Full Stack Web Development</p>
                <p>An intensive 24-week long boot camp dedicated to designing and building
                  web applications. Skills learned consisted of HTML5, CSS3, Javascript, JQuery,
                  Bootstrap, Firebase, Node Js & much more.
                </p>
              </div>
              <div  className='eduBoxes'>
                <p className="mainTitleText">Final Cut Pro, Apple Certification</p>
                <p className="supportingText">January 2010</p>
                <p className="supportingText">Certified by Apple in the Final Cut Pro Application</p>
                <p>Passed the Apple exam to become Final Cut Pro Certified. Completed the course work on all other programs in the series as well.  In addition, coursework has been completed on Adobe Premiere CS6 (2016) and Adobe Premiere CC (2017) without taking the associated exam.
                </p>
              </div>
              <div className='eduBoxes'>
                <p className="mainTitleText">Rhodes College, Memphis, Tennessee</p>
                <p className="supportingText">2003-2007</p>
                <p className="supportingText">B.A. Religious Studies</p>
                <p>Rhodes is a 4 year Liberal Arts college where I was able to take a very wide range of classes. My major was more on the philosophical side, Religious Studies. This was an intense major that helps to provoke intense critical thinking by reading an extremely wide range of texts and lots of writing. This experience has set a solid foundation for life-long learning.
                </p>
              </div>
              </div>
            </div>
          </div>
          );

        };

        export default Education;
