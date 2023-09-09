import React from "react";

import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";

const App = () => {
  return (
    <div className="header_social">
      <a href="https://linkedin.com">
        <BsLinkedin />
      </a>
      <a href="https://linkedin.com">
        <BsGithub />
      </a>
      <a href="https://linkedin.com">
        <BsInstagram />
      </a>
    </div>
  );
};
export default App;
