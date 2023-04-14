import React from "react";
import "./education.css";

function Education() {
  return (
    <>
      <div className="d-flex flex-column">
        <div className="education-one my-4 justify-content-between d-flex flex-row">
          {/* now we'll be crtng 2 div one for text part and 1 for year part */}
          <div className="d-flex flex-column new-one">
            <span className="university-name">
              Marwari College Ranchi
            </span>
            <span className="university-degree">
              Bachelors of Computer Application
            </span>
          </div>
          <div>
            <span className="year-passedout">2017-2020</span>
          </div>
        </div>
        <div className="education-one my-4 justify-content-between d-flex flex-row">
          {/* now we'll be crtng 2 div one for text part and 1 for year part */}
          <div className="d-flex flex-column new-one">
            <span className="university-name">
              ST John's Inter College
            </span>
            <span className="university-degree">
            Intermediate in science
            </span>
          </div>
          <div>
            <span className="year-passedout">2016-2017</span>
          </div>
        </div>
        <div className="education-one my-4 justify-content-between d-flex flex-row">
          {/* now we'll be crtng 2 div one for text part and 1 for year part */}
          <div className="d-flex flex-column new-one">
            <span className="university-name">
              ST John's School Ranchi
            </span>
            <span className="university-degree">
              
            </span>
          </div>
          <div>
            <span className="year-passedout">2014-2015</span>
          </div>
        </div>
      </div>
    </>
  );
}

export default Education;
