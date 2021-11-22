import React from "react";
import "./related-products.css";
import { StarIcon } from "@heroicons/react/solid";

const RelatedProducts = () => {
  return (
    <div className="related-products__container">
      <h1>Related Products</h1>
      <div className="wrapper">
        {[...Array(4)].map((_, i) => (
          <div key={i} className="product">
            <img
              src="https://fabrx.co/preview/ui-kit-pro-v3/assets/images/placeholders/placeholder-125.png"
              alt="img"
            />
            <div className="flex">
              {[...Array(5)].map((star, i) => (
                <StarIcon className="h-4 w-5 my-1" key={i} />
              ))}
            </div>
            <h1>Koda grand sofa</h1>

            <h1 className="price">$240.00</h1>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RelatedProducts;
