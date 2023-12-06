import React from "react";
import "./nav.css";
import logo from '../../assets/1.png'

export default function Nav() {
  return (
    <div className="header-nav">
      <div className="header-announcement-bar-wrapper">
        <div className="header-title-text">
        <a id="logo" href="/">
            <img src={logo} alt="logo" className="header-logo" />
          </a>
        </div>
      </div>
      <div className="header-nav-wrapper">
        <nav className="header-nav-list">
          <div className="header-nav-item">
            <a href="/gallery">Gallery</a>
          </div>
          <div className="header-nav-item">
            <a href="/about">About</a>
          </div>
          <div className="header-nav-item">
            <a href="/bookings">Contact</a>
          </div>
        </nav>
      </div>
    </div>
  );
}
