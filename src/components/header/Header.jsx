import React, { useState } from "react";
import logo from "../../../public/talzie_logo.svg";
import "./Header.scss";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header>
      <div className="container">
        <nav>
          <div className="logoAndTitle">
            <img src={logo} alt="Logo" />
            <a className="logo" href="">
              ALZIE
            </a>
          </div>
          <div className={`menu-toggle ${isMenuOpen ? 'open' : ''}`} onClick={toggleMenu}>
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
          </div>
          <ul className={`menu ${isMenuOpen ? 'open' : ''}`}>
            <li>
              <a href="">CLIENTS</a>
            </li>
            <li>
              <a href="">SERVICES</a>
            </li>
            <li>
              <a href="">WHY US</a>
            </li>
            <li>
              <a href="">HOW WE DO</a>
            </li>
            <li>
              <a href="">CONTACT</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
