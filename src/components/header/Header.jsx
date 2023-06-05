import React from "react";

import "./Header.scss";

const Header = () => {
  return (
    <header>
      <div className="container">
        <nav>
          <a className="logo" href="">TALZIE</a>

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
