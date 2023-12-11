import React from "react";
import "./nav.css";
import logo from '../../assets/1.png'
import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <div className="header-nav">
      <div className="header-announcement-bar-wrapper">
        <div className="header-title-text">
        <Link id="logo" to="/">
            <img src={logo} alt="logo" className="header-logo" />
          </Link>
        </div>
      </div>
      <div className="header-nav-wrapper">
        <nav className="header-nav-list">
          <div className="header-nav-item">
            <Link to="/about">About</Link>
          </div>
          <div className="header-nav-item">
            <Link to="/gallery">Gallery</Link>
          </div>
          <div className="header-nav-item">
            <Link tp="/contact">Contact</Link>
          </div>
        </nav>
      </div>
    </div>
  );
}
