import React from "react";
import "./header.css";
import CTA from "./CTA";
import ME from "../../pics/me.png";
import Headersocial from "./Headersocial";

const App = () => {
  return (
    <div className="container header_container">
      <h5>Hello I'm </h5>
      <h1> Kiruthiga sri</h1>
      <h5 className="text-light"> Software Developer</h5>
      <CTA />
      <Headersocial />

      <div className="me">
        <img src={ME} alt="me" />
      </div>
      <a href="#contact" className="scroll_down">
        Scroll Down
      </a>
    </div>
  );
};
export default App;
