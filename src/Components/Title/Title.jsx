import React from "react";
import "./Title.css";

function Title(props) {
  return (
    <div className="title" style={props.style}>
      <h1>{props.title}</h1>
      <h2>{props.subtitle}</h2>
    </div>
  );
}

export default Title;
