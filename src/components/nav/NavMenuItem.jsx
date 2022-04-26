import React from "react";

const NavMenuItem = ({ moveTo, setActiveNav, activeNav, children }) => {
  return (
    <a
      href={moveTo}
      onClick={() => setActiveNav(moveTo)}
      className={activeNav === moveTo ? "active" : ""}
    >
      {children}
    </a>
  );
};

export default NavMenuItem;
