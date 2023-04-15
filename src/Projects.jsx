import React from "react";
import "./projects.css";

function Projects() {
  return (
    <>
      <div className="d-flex flex-column">
        <div className="education-one my-4 justify-content-between d-flex flex-row">
          {/* now we'll be crtng 2 div one for text part and 1 for year part */}
          <div className="d-flex flex-column new-one">
            <span className="university-name">Skikabadi</span>
            <span className="university-degree">
              Technologies - Html,Css,Bootstrap
            </span>
          </div>
          <div>
            <a href="https://skikabadi.com/">
              <button className="btn-dec">
                <i class="fa-solid fa-up-right-from-square"></i>
              </button>{" "}
            </a>
          </div>
        </div>
        <div className="education-one my-4 justify-content-between d-flex flex-row">
          {/* now we'll be crtng 2 div one for text part and 1 for year part */}
          <div className="d-flex flex-column new-one">
            <span className="university-name">Lappycom</span>
            <span className="university-degree">
              Technologies - ReactJs, NodeJs, ExpressJs,Aws
            </span>
          </div>
          <div>
            <a href="https://lappycom.com/">
              <button className="btn-dec">
                <i class="fa-solid fa-up-right-from-square"></i>
              </button>
            </a>
          </div>
        </div>
        <div className="education-one my-4 justify-content-between d-flex flex-row">
          {/* now we'll be crtng 2 div one for text part and 1 for year part */}
          <div className="d-flex flex-column new-one">
            <span className="university-name">Ranchi Motors</span>
            <span className="university-degree">
              Technologies - ReactJs
            </span>
          </div>
          <div>
            <a href="https://ranchimotors.com/">
              <button className="btn-dec">
                <i class="fa-solid fa-up-right-from-square"></i>
              </button>{" "}
            </a>
          </div>
        </div>
        <div className="education-one my-4 justify-content-between d-flex flex-row">
          {/* now we'll be crtng 2 div one for text part and 1 for year part */}
          
        </div>
      </div>
    </>
  );
}

export default Projects;
