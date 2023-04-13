/** @format */

import React from "react";
import "./about.css";
import ME from "./../../assets/miscdp.jpeg";
import { RiAwardLine } from "react-icons/ri";
import { FiUsers } from "react-icons/fi";
import { RiFolderChartFill } from "react-icons/ri";

const about = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className="about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About image" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <RiAwardLine className="about__icon" />
              <h5>Experience</h5>
              <small>1+ Years working</small>
            </article>
            <article className="about__card">
              <FiUsers className="about__icon" />
              <h5>Organizations</h5>
              <small>worked with 3 firms</small>
            </article>
            <article className="about__card">
              <RiFolderChartFill className="about__icon" />
              <h5>Projects</h5>
              <small>4 completed projects</small>
            </article>
          </div>
          <p>
          Willkommen people,
            <br />
            Its an honor that I got attention of this precious time of yours !!
            <br />I am Reet a fullstack Frontend developer with a
            substantial tech stack starting all the way from HTML to
            Javascript, React and a lot more to explore.😈
          </p>
          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default about;