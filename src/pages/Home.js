import React from "react";
import Icon from "../components/Icon/Icon";

function Home(props) {
  return (
    <div className="text-center">
      <br /><br /><br /><br />
      <img className="portrait" src={props.images.portrait} alt="Portrait of David" />
      <br /><br /><br />
      <h1 className={`switchModes text-${props.theme.foreground.toLowerCase()}`} id="intro">Hi, my name is David Stewart, Co-Founder and Lead Engineer at Common.gg</h1>
      <br /><br />
      <Icon theme={props.theme} type="Github" link="https://github.com/Darkorin" text="" />
      <Icon theme={props.theme} type="Linkedin" link="https://www.linkedin.com/in/david-s-stewart/" text="" />
      <Icon theme={props.theme} type="Email" link="mailto:darkorin00@gmail.com?subject=Website Feedback" text="" />
      <Icon theme={props.theme} type="Phone" link="tel:912-617-1996" text="" />
      <Icon theme={props.theme} type="Resume" link="./assets/resume.pdf" text="" />
    </div>
  )
}

export default Home;