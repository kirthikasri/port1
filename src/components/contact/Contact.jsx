import React from "react";
import "./contact.css";
import { BiMailSend } from "react-icons/bi";
import { BsWhatsapp } from "react-icons/bs";
import { SiInstagram } from "react-icons/si";
const App = () => {
  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2> contact me </h2>
      <div className="contact_container ">
        <div className="contact_options">
          <article className="contact_option">
            <BiMailSend className="contact_optionsicon" />
            <h4>Email</h4>
            <h4>kirthikasri308@gmail.com </h4>
            <a href="mailto:kirthikasri308@gmail.com" target="_blank">
              {" "}
              Shoot me a text
            </a>
          </article>
          <article className="contact_option">
            <BsWhatsapp className="contact_optionsicon" />
            <h4>WhatsApp</h4>
            <h4>9345547682</h4>
            <a
              href="https://api.whatsapp.com/send?phone=9345547682"
              target="_blank"
            >
              {" "}
              Shoot me a text
            </a>
          </article>
          <article className="contact_option">
            <SiInstagram className="contact_optionsicon" />
            <h4>Instagram</h4>
            <h4>_._kirthi</h4>
            <a href="https://www.instagram.com/_._kirthi/"> Shoot me a text</a>
          </article>
        </div>
        <form action="">
          <input type="text" name="name" placeholder="your name " required />{" "}
          <input type="email" name="email" placeholder="your email " required />{" "}
          <textarea
            name="meassage"
            rows="7"
            placeholder="Drop me a line"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            send Message
          </button>
        </form>
      </div>
    </section>
  );
};
export default App;
