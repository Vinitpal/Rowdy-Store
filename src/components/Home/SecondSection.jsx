import React from "react";
import { Link } from "react-router-dom";

const SecondSection = ({ image, title }) => {
  return (
    <div className="second-section second-section-card hover:filter hover:grayscale hover:blur-md hover:contrast-200">
      <img src={image} alt={title} />
      <p>{title}</p>
      <button>
        <Link to="/products">
          Shop now <i className="fa-solid fa-chevron-right"></i>
        </Link>
      </button>
    </div>
  );
};

export default SecondSection;
