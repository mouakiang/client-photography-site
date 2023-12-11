import React from "react";
import "./home.css";
import homeImg from "../../assets/03.jpg";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="home" style={{ backgroundImage: `url(${homeImg})` }}>
      <div className="home-description">
        <div className="container">
          <h1>
            Life-style Photographer based in
            <br /> CENTRAL VALLEY, CA
          </h1>
        </div>
        <Link to="/gallery">
          <button className="home-button">
            <h3 className="gallery-text">View Gallery</h3>
          </button>
        </Link>
      </div>
    </div>
  );
}
