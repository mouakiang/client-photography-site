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
          >
            Weddings
          </a>
          <a
            className="galleryLink"
            href="https://kjanemouaphotography.shootproof.com/gallery/23452336"
          >
            Engagements
          </a>
          <a
            className="galleryLink"
            href="https://kjanemouaphotography.shootproof.com/gallery/23452343"
          >
            Family Portraits
          </a>
          <a
            className="galleryLink"
            href="https://kjanemouaphotography.shootproof.com/gallery/23452321"
          >
            Portraits
          </a>
        </div>
      </div>
    </div>
  );
}
