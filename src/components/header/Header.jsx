import React, { useState } from "react";
import logo from "../../../public/talzie_logo.svg";
import "./Header.scss";

const Header = ({scrollToSection , services ,clients ,whyUs, howWeDo, contact, banner}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header>
      <div className="container">
        <nav>
          <div className="logoAndTitle" onClick={()=> scrollToSection(banner)} style={{cursor:"pointer"}}>
            <img src={logo} alt="Logo" />
            <a className="logo">
              ALZIE
            </a>
          </div>
          <div className={`menu-toggle ${isMenuOpen ? 'open' : ''}`} onClick={toggleMenu}>
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
          </div>
          <ul className={`menu ${isMenuOpen ? 'open' : ''}`}>
            <li onClick={()=> scrollToSection(clients)}>
              <a>CLIENTS</a>
            </li>
            <li onClick={()=> scrollToSection(services)}>
              <a>SERVICES</a>
            </li>
            <li onClick={()=> scrollToSection(whyUs)}>
              <a>WHY US</a>
            </li>
            <li onClick={()=> scrollToSection(howWeDo)}>
              <a>HOW WE DO</a>
            </li>
            <li onClick={()=> scrollToSection(contact)}>
              <a>CONTACT</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
