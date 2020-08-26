import React from "react";
import { Link } from "react-router-dom"

function Nav(props) {
  return (
    <div>
      <nav className={`navbar navbar-expand-lg transparent navbar-${props.theme.background.toLowerCase()}`} id="navMain">
        <button className="btn" id="dummy" style={{visibility: "hidden"}}>{props.theme.foreground} Mode</button>

        <div className={`navbar-nav mx-auto text-${props.theme.foreground.toLowerCase()}`}>
          <Link className="nav-item nav-link mx-4" to="/">Home</Link>
          <Link className="nav-item nav-link mx-4" to="/projects">Projects</Link>
          <Link className="nav-item nav-link mx-4" to="/about">About</Link>
        </div>

        <button type="button" 
          onClick={()=>props.changeTheme()} 
          className={`btn btn-${props.theme.foreground.toLowerCase()}`} 
          id="modeSwitch">
          {props.theme.foreground} Mode
          </button>

      </nav>

      <hr className={`hr${props.theme.background}`} id="navDivider" />

    </div>
  );
}

export default Nav;