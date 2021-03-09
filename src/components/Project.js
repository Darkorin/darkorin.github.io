import React from "react";

function Project(props) {
  return (
    <div className="row" style={{ background: "transparent" }}>
      <img className="col" src={props.project.img} alt="Card" style={{ borderRadius: "10px", border: "2px inset #888" }} />
      <div className="col">
        <a href={props.project.link}><h5 className={`card-title text-center text-${props.theme.foreground.toLowerCase()}`}>{props.project.name}</h5></a>
        <a href={props.project.repoLink}><p className={`text-center text-${props.theme.foreground.toLowerCase()}`}>Repo Link</p></a>
        <p className={`card-text text-${props.theme.foreground.toLowerCase()}`}>{props.project.text}</p>
      </div>
    </div>
  )
}

export default Project;