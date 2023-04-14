import React from "react";
import "./programming.css";

function Programming() {
  return (
    <>
      <div className="programming-section">
        <div className="skills-text my-4">
          <span>Skills</span>
        </div>
        <div className="d-flex flex-column mx-2 my-4 skills-items">
          <div className="d-flex flex-row justify-content-around my-2 ">
            <span>Html</span>
            <span>Bootstrap</span>
            <span>NodeJs</span>
          </div>
          <div className="d-flex flex-row justify-content-around my-2">
            <span className="css">Css</span>
            <span className="reactjs">ReactJs</span>
            <span className="expressjs">ExpressJs</span>
          </div>
          <div className="d-flex flex-row justify-content-around my-2">
            <span>JavaScript</span>
            <span className="jquery">JQuery</span>
            <span>MongoDb</span>
          </div>
        </div>
      </div>
    </>
  );
}

export default Programming;
