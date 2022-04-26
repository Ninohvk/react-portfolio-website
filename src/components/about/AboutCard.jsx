import React from "react";

const AboutCard = ({ children, title, subtitle }) => {
  return (
    <article className="about__card">
      {children}
      <h5>{title}</h5>
      <small>{subtitle}</small>
    </article>
  );
};

export default AboutCard;
