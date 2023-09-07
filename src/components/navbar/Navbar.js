import React, { useState } from "react";
import "../navbar/Navbar.css";
import { BsFillHouseDoorFill } from "react-icons/bs";
import { AiOutlineClose } from "react-icons/ai";
import { RxHamburgerMenu } from "react-icons/rx";

function Navbar() {
  const [click, setClick] = useState(false);
  const handClick = () => setClick(!click);
  return (
    <div className="navbar">
      <div className="container">
        <h1>
          <span>
            <BsFillHouseDoorFill />
            Real
          </span>
          Easter
        </h1>
        <button className="btn">Sign In</button>
        <ul className={click ? "nav-menu" : "nav-menu active"}>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Search</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
        <div className="hamburger">
          {click ? (
            <RxHamburgerMenu className="icon" onClick={handClick} />
          ) : (
            <AiOutlineClose className="icon" onClick={handClick} />
          )}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
