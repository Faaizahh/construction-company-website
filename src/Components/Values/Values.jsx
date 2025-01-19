import React from "react";
import Title from "../Title/Title";
import "./Values.css";

function Values() {
  return (
    <div className="values container">
      <Title
        style={{ marginTop: "0px" }}
        title="Core Values"
        subtitle="Our missions and visions"
      />
      <div className="values-container">
        <div className="mission">
          <h1>Our Mission</h1>
          <div>
            <p>
              To be one of the foremost construction and procurement companies
              in the global construction industry by carrying out prompt
              personalized services using current best practices with the aim of
              meeting and exceeding our clients' expectations with world
              standards
            </p>
          </div>
        </div>

        <div className="vision">
          <h1>Our Vision</h1>
          <p>
            To be a leading company recognized for excellence in construction,
            committed to delivering high-quality projects that exceed client
            expectations and set industry standards.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Values;
