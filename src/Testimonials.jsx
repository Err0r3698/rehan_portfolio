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
        "I was selling Laptops & Desktop offline, Then met with this guy and he gave me an Idea about how I can growth my business with online, Created an E-Commerce website for me well it's working fine"
    },
    {
      name: "Shahbaz",
      text:
        "I had an idea after experiencing olx service So I met with Aamish, discussed about the idea and he delivered me this masterpiece."
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
                  <br />
                  <button className="btn-decs">Visit Website<span> </span>
                <i class="fa-solid fa-up-right-from-square"></i>
              </button>
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
