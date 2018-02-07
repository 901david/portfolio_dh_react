import React from 'react';
import IndividProj from './projects.js';;



const Projects = (props)=> {

  return (
    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 boxBackground" id="portImages">
      <div className="col-xs-10 col-xs-offset-1 col-md-6 col-md-offset-3 main-port-label">
      <h1 className="spotlight">Spotlight on Applications:</h1>
    </div>
      <div className="applicationMove">

        {props.projects.map((project, i) => <IndividProj key={project.title} indexValue={i} {...project} handleModal={props.openModal}  />)}
      </div>

    </div>
  );

};

export default Projects;
