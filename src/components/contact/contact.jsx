import React, { useRef } from "react";
import "./contact.css";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_5bn8z19",
        "template_rqm07vl",
        form.current,
        "zA_okY5BvV67PAGCO"
      )
      .then(
        (result) => {
          console.log(result.text);
          e.target.reset();
          alert("Email Sent !");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="contact">
      <div id="contact">
        <h1 className="contact-title">Contact Me</h1>
        <span className="contact-info">
          Please fill out the form below and I will get back to you as soon as possible.
        </span>
        <form className="contact-form" ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            className="name"
            placeholder="Your Name"
            name="from_name"
          />
          <input
            type="number"
            className="number"
            placeholder="Your Phone Number"
            name="from_number"
          />
          <input
            type="email"
            className="email"
            placeholder="Your email"
            name="from_email"
          />
          <textarea
            className="msg"
            name="message"
            rows={5}
            placeholder="Enter message here"
          ></textarea>
          <button type="submit" value="Send" className="submitBtn">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
