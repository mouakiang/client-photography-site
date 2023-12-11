import React from "react";
import "./gallery.css";

export default function Gallery() {
  return (
    <div className="gallery">
      <div className="gallery-content-wrapper">
        <div className="gallery-content-links">
          <a
            className="galleryLink"
            href="https://kjanemouaphotography.shootproof.com/gallery/23452315"
            target="_blank"
            rel="noopener noreferrer"
          >
            Weddings
          </a>
          <a
            className="galleryLink"
            href="https://kjanemouaphotography.shootproof.com/gallery/23452336"
            target="_blank"
            rel="noopener noreferrer"
          >
            Engagements
          </a>
          <a
            className="galleryLink"
            href="https://kjanemouaphotography.shootproof.com/gallery/23452343"
            target="_blank"
            rel="noopener noreferrer"
          >
            Family Portraits
          </a>
          <a
            className="galleryLink"
            href="https://kjanemouaphotography.shootproof.com/gallery/23452321"
            target="_blank"
            rel="noopener noreferrer"
          >
            Portraits
          </a>
        </div>
      </div>
    </div>
  );
}
