import React from "react";
import "./about.css";
import ME from "../../assets/me-about.jpg";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";
import AboutCard from "./AboutCard";

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About me" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <AboutCard title="Experience" subtitle="3+ Years Working">
              <FaAward className="about__icon" />
            </AboutCard>

            <AboutCard title="Clients" subtitle="200+ Worldwide">
              <FiUsers className="about__icon" />
            </AboutCard>

            <AboutCard title="Projects" subtitle="80+ Completed">
              <VscFolderLibrary className="about__icon" />
            </AboutCard>
          </div>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
            voluptatum, ex, facilis aperiam eaque, dicta veniam fuga quas
            corporis eligendi modi sapiente eos numquam sequi aut accusantium
            provident maxime. Quo.
          </p>

          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
