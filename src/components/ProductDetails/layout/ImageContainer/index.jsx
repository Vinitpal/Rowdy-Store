import React, { useState } from "react";
import "./img-container.css";

const ImageContainer = ({ images }) => {
  const [selected, setSelected] = useState(0);

  return (
    <div className="image__container">
      <img src={images[selected]} alt="img" />
      <div className="demo__img">
        {images.map((image, index) => (
          <img
            key={index}
            className={` ${index === selected ? "ring-4" : ""}`}
            src={image}
            onClick={() => setSelected(index)}
            alt="demo"
          />
        ))}
      </div>
    </div>
  );
};

export default ImageContainer;
