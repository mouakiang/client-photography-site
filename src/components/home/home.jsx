import React from "react";
import "./home.css";
import homeImg from '../../assets/03.jpg';

export default function Home() {
  return (
    <div className="home">
        <img src={homeImg} alt="couple" className="home-border-img" />

    <div className="home-description">
        <h1 className="home-text">Life-style photographer
        <br/> based in Sanger, CA</h1>
    </div>
    <a href='/gallery'><button className="home-button">View Gallery</button></a>
     </div>
  );
}
