import React from "react";
import "./Hero.css";
import { AiOutlineSearch } from "react-icons/ai";

function Hero() {
  return (
    <div className="hero">
      <div className="content">
        <h1>Find The Perfect Place</h1>
        <p className="search-text">
          Search the largest selection of luxury high-rise apartments
        </p>
        <form className="search">
          <div>
            <input type="text" placeholder="Enter key... " />
          </div>
          <div className="radio">
            <input type="radio" checked />
            <label>Buy</label>
            <input type="radio" />
            <label>Rent</label>
            <button type="submit">
              <AiOutlineSearch className="icon" />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Hero;
