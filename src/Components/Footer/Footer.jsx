import React from "react";
import "./Footer.css";
import logo from "../../assets/logo.jpg";

function Footer() {
  return (
    <div className="footer container">
      <img src={logo} alt="" className="logo" />
      <div className="footer-wrapper">
        <ul>
          <li>Links</li>
          <li>
            <a href="#hero">Home</a>
          </li>
          <li>
            <a href="#services">Services</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>Contact us</li>
        </ul>

        <div className="address">
          <p>Address</p>
          <p>
            Block 4, Flat 1,
            <br /> River Patoka Close,
            <br /> Off Nile Street,
            <br /> Maitama Mississipi,
            <br /> Abuja.
          </p>
        </div>

        <ul>
          <li>Contact</li>
          <li>090909090900</li>
          <li>ade@gmail.com</li>
        </ul>
      </div>
    </div>
  );
}

export default Footer;
