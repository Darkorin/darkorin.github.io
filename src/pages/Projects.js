import React from "react";
import Project from "../components/Project.js";

function Projects(props) {
  return (
    <div className="container row">
      <div className="col-2"></div>
      <div className="col-8 row">
        {props.projects.map(project => (
          <div className="col-12">
            <Project project={project} theme={props.theme} /><br />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Projects;