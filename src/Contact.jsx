import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

import "./contact.css";

function Contact() {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const form = useRef();
  const [message, setmessage] = useState("");
  const sendEmail = (e) => {
    e.preventDefault();
    // console.log(e);
    console.log(form.current);

    // emailjs
    //   .sendForm(
    //     "service_9px03qa",
    //     "template_rtxsbdc",
    //     form.current,
    //     "QFMIl7GBG2ThcYRr-"
    //   )
    //   .then(
    //     (result) => {
    //       console.log(result.text);
    //     },
    //     (error) => {
    //       console.log(error.text);
    //     }
    //   );
    // this didn't work that's why writing own functions

    const templateparams = {
      from_name: name + " " + email,
      to_name: "rehan101err0r@gmail.com",
      feedback: message
    };
    emailjs
      .send(
        "service_nyzrkr6",
        "template_b13apqb",
        templateparams,
        "imPNQMqkwN-gEHTTG"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <>
      <div>
        <div className="contact-me-card row">
          <div className="col-lg-6 col-md-5 col-sm-12 left-contact px-2 py-2">
            <span className="get-in-touch mx-4 my-5">Get in Touch</span>
            <div className="py-5 d-flex justify-content-center">
              <lottie-player
                src="https://assets10.lottiefiles.com/packages/lf20_3ktmthuy.json"
                background="transparent"
                speed="1"
                style={{ width: "300px" }}
                loop
                autoplay
              ></lottie-player>
            </div>
          </div>
          <div className="col-lg-6 col-md-5 col-sm-12 my-auto responform">
            <form
              ref={form}
              className="d-flex flex-column card-contact-right"
              onSubmit={sendEmail}
            >
              <div className="input-group my-3 d-flex flex-column">
                <label> Name </label>
                <input
                  value={name}
                  onChange={(e) => {
                    setname(e.target.value);
                  }}
                  type="text"
                  placeholder="Enter Your Name"
                  className="input-groups"
                />
              </div>
              <div className="input-group my-3 d-flex flex-column">
                <label> Email </label>
                <input
                  value={email}
                  onChange={(e) => {
                    setemail(e.target.value);
                  }}
                  type="text"
                  placeholder="Enter Your Email"
                  className="input-groups"
                />
              </div>
              <div className="input-group my-3 d-flex flex-column">
                <label> Message </label>
                <textarea
                  value={message}
                  onChange={(e) => {
                    setmessage(e.target.value);
                  }}
                  type="text"
                  placeholder="Enter Your Message"
                  className="input-groups"
                />
              </div>
              <div className="input-group my-3 d-flex flex-column">
                <input
                  className="btn btn-success"
                  type="submit"
                  value="Send Message"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
