import React, { useState, useEffect } from "react";
import logo from "../../../public/talzie_logo.svg";
import "./Header.scss";

const Header = ({ scrollToSection, services, clients, whyUs, howWeDo, contact, banner }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const handleMenuLinkClick = (section) => {
    closeMenu();
    scrollToSection(section);
  };

  useEffect(() => {
    if (isMenuOpen) {
      document.body.classList.add("menu-open");
    } else {
      document.body.classList.remove("menu-open");
    }
  }, [isMenuOpen]);

  return (
    <header>
      <div className="container">
        <nav>
          <div
            className="logoAndTitle"
            onClick={() => handleMenuLinkClick(banner)}
          >
            <img src={logo} alt="Logo" />
            <span className="logo">ALZIE</span>
          </div>
          <div
            className={`menu-toggle ${isMenuOpen ? "open" : ""}`}
            onClick={toggleMenu}
          >
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
          </div>
          <ul className={`menu ${isMenuOpen ? "open" : ""}`}>
            <li onClick={() => handleMenuLinkClick(clients)}>
              <a>CLIENTS</a>
            </li>
            <li onClick={() => handleMenuLinkClick(services)}>
              <a>SERVICES</a>
            </li>
            <li onClick={() => handleMenuLinkClick(whyUs)}>
              <a>WHY US</a>
            </li>
            <li onClick={() => handleMenuLinkClick(howWeDo)}>
              <a>HOW WE DO</a>
            </li>
            <li onClick={() => handleMenuLinkClick(contact)}>
              <a>CONTACT</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
