import React from "react";
import "./About.css";
import Title from "../Title/Title";
import tractor from "../../assets/tractor2.jpg";

function About() {
  return (
    <div className="about container">
      <img src={tractor} alt="" className="flex-item" />
      <div className="flex-item text">
        <Title
          title="About us"
          subtitle="Efficiency,Building,Budget and Time"
        />
        <p>
          Abdul Val Limited is a construction and procurement firm that responds
          to the increasing demand and complexity of the construction industry
          by establishing world-class construction services.
        </p>
        <p>
          We utilize our resources effectively to meet client needs, adapting
          our services to align with their requirements.
        </p>
        <p>
          Our construction services aim to provide clients with a quick,
          responsive, and integrated approach. This ensures that quality and
          cost-effectiveness are delivered without delays, minimizing issues
          related to poor construction and eliminating bottlenecks caused by
          substandard engineering practices.
        </p>
        <p>
          With this in mind, Abdul Val Limited has structured a team of
          experienced professionals, allowing our clients to benefit from our
          diverse range of services.
        </p>
      </div>
    </div>
  );
}

export default About;
