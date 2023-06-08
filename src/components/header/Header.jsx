import React from "react";
import logo from "../../../public/talzie_logo.svg";
import "./Header.scss";

const Header = () => {
  return (
    <header>
      <div className="container">
        <nav>
          <div className="logoAndTitle">
            <img src={logo} />
            <a className="logo" href="">
              ALZIE
            </a>
          </div>
          <ul>
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
