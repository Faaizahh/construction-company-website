import React from "react";
import "./Projects.css";
import road_1 from "../../assets/tarr1.jpg";
import road_2 from "../../assets/tarr2.jpg";
import road_3 from "../../assets/tarr3.jpg";
import road_4 from "../../assets/tarr4.jpg";
import road_5 from "../../assets/tarr5.jpg";
import road_6 from "../../assets/tarr6.jpg";
import road_7 from "../../assets/tarr7.jpg";
import road_8 from "../../assets/tarr8.jpg";
import road_9 from "../../assets/tarr9.jpg";
import road_10 from "../../assets/tarr10.jpg";

function Projects() {
  return (
    <div className="projects container">
      <div className="images">
        <img src={road_1} alt="" />
        <img src={road_2} alt="" />
        <img src={road_3} alt="" />
        <img src={road_4} alt="" />
        <img src={road_5} alt="" />
        <img src={road_6} alt="" />
        <img src={road_7} alt="" />
        <img src={road_8} alt="" />
        <img src={road_9} alt="" />
        <img src={road_10} alt="" />
      </div>
    </div>
  );
}

export default Projects;
