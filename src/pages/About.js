import React from "react";
import Icon from "../components/Icon/Icon";

function About(props) {
  return (
    <div>
      <br />
      <div className="text-center">
        <h1 className={`text-${props.theme.foreground.toLowerCase()}`}>David Stewart</h1>
        <h3 className={`text-${props.theme.foreground.toLowerCase()}`}>Full-Stack Web Developer</h3>
        <Icon theme={props.theme} type="Github" link="https://github.com/Darkorin" text="Github: Darkorin" /><br />
        <Icon theme={props.theme} type="Linkedin" link="https://www.linkedin.com/in/david-s-stewart/" text="LinkedIn: David S Stewart" /><br />
        <Icon theme={props.theme} type="Email" link="mailto:darkorin00@gmail.com?subject=Website Feedback" text="Email: darkorin00@gmail.com" /><br />
        <Icon theme={props.theme} type="Phone" link="tel:912-617-1996" text="Phone: 912-617-1996" /><br />
        <Icon theme={props.theme} type="Resume" link="./assets/resume.pdf" text="Resume" />
      </div>
    </div>
  )
}

export default About;