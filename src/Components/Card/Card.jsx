import React from "react";
import "./Card.css";

function Card(props) {
  return (
    <div className="card">
      <div className="card-wrapper">
        <img src={props.img} alt="" />
        <div className="list-wrapper">
          <h1>{props.h1}</h1>
          <ul>
            {props.ul.map((item) => {
              return <li>{item}</li>;
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Card;
