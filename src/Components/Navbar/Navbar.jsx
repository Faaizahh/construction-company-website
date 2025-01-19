import React from "react";
import "./Navbar.css";
import logo from "../../assets/logo.jpg";

function Navbar() {
  return (
    <nav className="container nav">
      <img src={logo} alt="" className="logo" />
      <ul>
        <li>
          <a href="#services">Services</a>
        </li>
        <li>
          <a href="#projects">Projects</a>
        </li>
        <li>
          <a href="#about">About us</a>
        </li>
        <li>
          <button className="btn">Contact us</button>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
