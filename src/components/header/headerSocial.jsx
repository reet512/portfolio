/** @format */

import React from "react";
import { AiFillLinkedin } from "react-icons/ai";
import { BsGithub } from "react-icons/bs";


const headerSocial = () => {
  return (
    <div className="header_socials">
      <a
        href="https://www.linkedin.com/in/reet-rai-7023621ab/"
        target="_blank"
      >
        <AiFillLinkedin />
      </a>
      <a href="https://github.com/reet512" target="_blank">
        <BsGithub />
      </a>
    </div>
  );
};

export default headerSocial;