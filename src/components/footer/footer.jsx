/** @format */

import React from "react";
import "./footer.css";
import { FaFacebookF } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
const footer = () => {
  return (
    <footer>
      <a href="" className="footer__logo">
        Rejointech
      </a>
      <ul className="permalinks">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          {" "}
          <a href="#about">About</a>
        </li>
        <li>
          {" "}
          <a href="#experience">Experience</a>
        </li>
        <li>
          {" "}
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          {" "}
          <a href="#contact">Contact</a>
        </li>
      </ul>
      <div className="footer__socials">
        <a href="https://www.facebook.com/reet.rai.9256" target="_blank">
          <FaFacebookF />
        </a>
        <a
          href="https://www.instagram.com/reet_rai1410/"
          target="_blank"
        >
          <BsInstagram />
        </a>
        <a href="https://twitter.com/ReetRai29832475" target="_blank">
          <BsTwitter />
          </a>
      </div>
      <div className="footer__copyright">
        <small>&copy; Rejointech. All rights reserved.</small>
      </div>
    </footer>
  );
};

export default footer;