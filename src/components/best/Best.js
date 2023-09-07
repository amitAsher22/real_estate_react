import React from "react";
import "../best/Best.css";
import img1 from "../../assets/house4.jpg";
import img2 from "../../assets/house3.jpg";
import img3 from "../../assets/house2.jpg";

function Best() {
  return (
    <div className="best">
      <h1>Find Best Rated Properies</h1>
      <div>
        <p>
          <span>All</span>
        </p>
        <p>Commercial</p>
        <p>Residetial</p>
        <p>Agricultural</p>
      </div>
      <div className="container">
        <img src={img1} alt="img1" />
        <img src={img2} alt="img2" />
        <img src={img3} alt="img3" />
      </div>
      <button className="btn">view All</button>
    </div>
  );
}

export default Best;
