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
            <span className="university-name">TodoList</span>
            <span className="university-degree">
              Technologies - NodeJs,ExpressJs,MongoDB
            </span>
          </div>
          <div>
            <a href="https://todolist-testtt.onrender.com/">
              <button className="btn-dec">
                <i class="fa-solid fa-up-right-from-square"></i>
              </button>{" "}
            </a>
          </div>
        </div>
        <div className="education-one my-4 justify-content-between d-flex flex-row">
          {/* now we'll be crtng 2 div one for text part and 1 for year part */}
          <div className="d-flex flex-column new-one">
            <span className="university-name">WeaterApp</span>
            <span className="university-degree">
              Technology - Node JS, MongoDB
            </span>
          </div>
          <div>
            <a href="https://rehan-weatherapp.onrender.com">
              <button className="btn-link">Visit</button>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Projects;
