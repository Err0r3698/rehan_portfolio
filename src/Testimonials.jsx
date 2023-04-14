import React from "react";
import "./testimonials.css";

function Testimonials() {
  const testimonials = [
    {
      name: "Kashif",
      text:
        "This guy is incredibly awesome, I was looking a way to buy scraps online And then I found him and he delivered me a great website."
    },
    {
      name: "Asif",
      text:
        "This guy is incredibly awesome, I was looking a way to buy scraps online And then I found him and he delivered me a great website."
    },
    {
      name: "Jason",
      text:
        "This guy is incredibly awesome, I was looking a way to buy scraps online And then I found him and he delivered me a great website."
    }
  ];
  return (
    <>
      <div>
        <div className="row mx-5">
          {testimonials.map((value) => {
            return (
              <div className="col-lg-4 col-sm-12 col-md-6 my-4">
                <div className="card shadow testimonial-card d-flex flex-column">
                  <span className="description">{value.text}</span>
                  <span className="stars">⭐⭐⭐⭐⭐</span>
                  <span className="name">{value.name}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Testimonials;
