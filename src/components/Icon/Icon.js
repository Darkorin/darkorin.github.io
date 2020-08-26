import React from "react";

function Icon(props) {
  return (
    <a className={`text-${props.theme.foreground.toLowerCase()}`} href={props.link}><img className="linkIcon" id={props.type} title={props.type}
      src={`assets/${props.theme.foreground}${props.type}.png`} alt={props.type + "Link"} />{props.text}</a>
  )
}

export default Icon;