import React from 'react';
import IndividProj from './projects.js';;



const Projects = (props)=> {

  return (
    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 boxBackground" id="portImages">
      <div className="applicationMove">
        <h1 id="recentProj">Spotlight on Applications:</h1>
        {props.projects.map((project, i) => <IndividProj key={project.title} indexValue={i} {...project} handleModal={props.openModal}  />)}
      </div>

    </div>
  );

};

export default Projects;
