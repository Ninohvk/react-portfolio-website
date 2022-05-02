import React from "react";
import "./portfolio.css";
import IMG1 from "../../assets/portfolio1.jpg";
import IMG2 from "../../assets/portfolio2.jpg";
import IMG3 from "../../assets/portfolio3.jpg";
import IMG4 from "../../assets/portfolio4.jpg";
import IMG5 from "../../assets/portfolio5.png";
import IMG6 from "../../assets/portfolio6.jpg";

const data = [
  {
    image: IMG1,
    title: "Crypto Currency Dashboard & Finantial Visualization",
    github: "https://www.github.com",
    demo: "https://dribble.com",
  },
  {
    image: IMG2,
    title: "Charts templates & infographics in Figma",
    github: "https://www.github.com",
    demo: "https://dribble.com",
  },
  {
    image: IMG3,
    title: "Figma dashboard UI kit for data design web apps",
    github: "https://www.github.com",
    demo: "https://dribble.com",
  },
  {
    image: IMG4,
    title: "Mantaining tasks and tracking progress",
    github: "https://www.github.com",
    demo: "https://dribble.com",
  },
  {
    image: IMG5,
    title: "Charts templates & infographics in Figma",
    github: "https://www.github.com",
    demo: "https://dribble.com",
  },
  {
    image: IMG6,
    title: "Crypto Currency Dashboard & Finantial Visualization",
    github: "https://www.github.com",
    demo: "https://dribble.com",
  },
];

const Portfolio = () => {
  return (
    <section id="portforlio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {data.map((project, index) => (
          <article className="portfolio__item" key={index}>
            <div className="portfolio__item-image">
              <img src={project.image} alt="imagen" />
            </div>
            <h3>{project.title}</h3>
            <div className="portfolio__item-cta">
              <a
                href={project.github}
                className="btn"
                target="_blank"
                rel="noreferrer"
              >
                Github
              </a>
              <a
                href={project.demo}
                className="btn btn-primary"
                target="_blank"
                rel="noreferrer"
              >
                Live Demo
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
