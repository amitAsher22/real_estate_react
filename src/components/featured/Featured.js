import React from "react";
import "../featured/Featured.css";

import img1 from "../../assets/img1.jpg";
import img2 from "../../assets/img2.jpg";
import img3 from "../../assets/img3.jpg";
import img4 from "../../assets/img4.jpg";
import img5 from "../../assets/img5.jpg";
import img6 from "../../assets/img6.webp";
import img7 from "../../assets/img7.jpg";
import img8 from "../../assets/img8.webp";
import img9 from "../../assets/img9.jpg";
import img10 from "../../assets/img10.jpg";

function Featured() {
  return (
    <div className="featured">
      <h1 className="featured-text">Top Featured Listings </h1>
      <p className="featured-text">
        Selected listing by city , state & Zip based on views.{" "}
      </p>
      <div className="container">
        <img className="span-3 image-grid-row-2" src={img1} alt="view1" />
        <img src={img2} alt="view2" />
        <img src={img3} alt="view3" />
        <img src={img4} alt="view4" />
        <img src={img5} alt="view5" />

        <div className="span-3 img-details">
          <div className="top">
            <h2>123 Acme St. Dallas, TX</h2>
            <p>House For Sale</p>
            <p className="price">$2,677,000</p>
          </div>
          <div className="info-grid">
            <div>
              <div className="info">
                <p className="bold">Bedrooms: </p>
                <p>5</p>
              </div>
              <div className="info">
                <p className="bold">Bathrooms: </p>
                <p>7</p>
              </div>
            </div>
            <div>
              <div className="info">
                <p className="bold">Square Feet: </p>
                <p>8,154</p>
              </div>
              <div className="info">
                <p className="bold">Est Payment: </p>
                <p>$14,797/mo</p>
              </div>
            </div>
          </div>
        </div>
        <div className="span-2 right-img-details">
          <p>
            Beautiful day for a shoot with a beautiful model and beautiful
            blooms
          </p>
          <button className="btn">View Listing</button>
        </div>
      </div>
      {/*Section Setion  */}

      <div className="container">
        <imgc className="order-2" src={img7} alt="view7" />
        <img className="order-3" src={img8} alt="view3" />
        <img
          className="span-3 image-grid-row-2 order-1"
          src={img6}
          alt="view1"
        />
        <img className="order-4" src={img9} alt="view4" />
        <img className="order-5" src={img10} alt="view5" />

        <div className="span-2 right-img-details order-6">
          <p>
            Beautiful day for a shoot with a beautiful model and beautiful
            blooms
          </p>
          <button className="btn">View Listing</button>
        </div>

        <div className="span-3 img-details order-6">
          <div className="top">
            <h2>123 Acme St. Dallas, TX</h2>
            <p>House For Sale</p>
            <p className="price">$2,677,000</p>
          </div>
          <div className="info-grid">
            <div>
              <div className="info">
                <p className="bold">Bedrooms: </p>
                <p>5</p>
              </div>
              <div className="info">
                <p className="bold">Bathrooms: </p>
                <p>7</p>
              </div>
            </div>
            <div>
              <div className="info">
                <p className="bold">Square Feet: </p>
                <p>8,154</p>
              </div>
              <div className="info">
                <p className="bold">Est Payment: </p>
                <p>$14,797/mo</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Featured;
