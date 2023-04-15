import React from "react";
import "./work.css";

function Work() {
  return (
    <>
      <div className="work-inside-new">
        <div className="d-flex flex-column mx-2 my-4">
          <div className="d-flex flex-row justify-content-between">
            <span className="company-name">MSyllabus</span>
            <span className="year-passedout">Agust 2021-September 2022</span>
          </div>
        </div>
        <div className="d-flex flex-column">
          <span className="position">Full Stack Developer And Designer</span>
          <span className="description-position">
            <ul>
              <li>
                I designed the UI and developed the code in Reactjs.
              </li>
              <li>
                Tested Functionality of the website and modified the website if changes needed.
              </li>
              <li>
                Wrote clean code and made the responsive website.
              </li>
            </ul>
          </span>
        </div>
      </div>
    </>
  );
}

export default Work;
