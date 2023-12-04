import React from "react";
import { Link } from "react-router-dom";
import "./nav.css";

export default function Nav() {
  return (
    <div className="header-nav">
      <div className="header-announcement-bar-wrapper">
        <div className="header-title-text">
          <a id="site-title" href="/">
            K Jane Moua Photography
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
            <a href="/bookings">Bookings</a>
          </div>
        </nav>
      </div>
    </div>
  );
}
