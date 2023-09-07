import React from "react";
import "../../components/footer/FooterStyle.css";

import { FaFacebookF } from "react-icons/fa";
import { AiOutlineInstagram } from "react-icons/ai";
import { BsTwitter } from "react-icons/bs";
import { FaPinterestP } from "react-icons/fa";

function Footer() {
  return (
    <div className="footer">
      <div className="social">
        <FaFacebookF className="icon" />
        <AiOutlineInstagram className="icon" />
        <BsTwitter className="icon" />
        <FaPinterestP className="icon" />
      </div>
      <div className="container">
        <div className="col">
          <h3>About</h3>
          <p>Company</p>
          <p>Categoris</p>
          <p>Planing</p>
          <p>About Us</p>
        </div>
        <div className="col">
          <h3>Company</h3>
          <p>Company</p>
          <p>Categoris</p>
          <p>Planing</p>
          <p>About Us</p>
        </div>
        <div className="col">
          <h3>Legal</h3>
          <p>Company</p>
          <p>Categoris</p>
          <p>Planing</p>
          <p>About Us</p>
        </div>
        <div className="col">
          <h3>Information</h3>
          <p>Company</p>
          <p>Categoris</p>
          <p>Planing</p>
          <p>About Us</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
