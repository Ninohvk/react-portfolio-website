import React from "react";
import "./Nav.css";
import { AiOutlineHome, AiOutlineUser } from "react-icons/ai";
import { BiBook, BiMessageSquareDetail } from "react-icons/bi";
import { RiServiceLine } from "react-icons/ri";
import { useState } from "react";
import NavMenuItem from "./NavMenuItem";

const navMenu = [
  { ref: "#home", icon: <AiOutlineHome /> },
  { ref: "#about", icon: <AiOutlineUser /> },
  { ref: "#experience", icon: <BiBook /> },
  { ref: "#services", icon: <RiServiceLine /> },
  { ref: "#contact", icon: <BiMessageSquareDetail /> },
];

const Nav = () => {
  const [activeNav, setActiveNav] = useState("#home");

  return (
    <nav>
      {navMenu.map((navItem) => (
        <NavMenuItem
          moveTo={navItem.ref}
          setActiveNav={setActiveNav}
          activeNav={activeNav}
          key={navItem.ref}
        >
          {navItem.icon}
        </NavMenuItem>
      ))}
    </nav>
  );
};

export default Nav;
