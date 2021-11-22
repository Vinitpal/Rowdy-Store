import React from "react";
import "./product-details.css";
// import FourOFour from "../FourOFour";

// layouts
import ImageContainer from "./layout/ImageContainer";
import DetailsContainer from "./layout/DetailsContainer";
import RelatedProducts from "./layout/RelatedProducts";
import Placeholder from "./Placeholder";
import Reviews from "./layout/Review/Review";

//redux
import { useSelector } from "react-redux";

//router
import { useParams } from "react-router-dom";

const ProductDetail = () => {
  const products = useSelector((state) => state.products);

  const { id } = useParams();
  const currentProduct = products.find((el) => el.id === +id);

  // if (id > 50) {
  //   return <FourOFour />;
  // }

  return (
    <div>
      {!products.length ? (
        <Placeholder />
      ) : (
        <>
          <div className="product-details__container">
            <ImageContainer images={currentProduct.images} />
            <DetailsContainer currentProduct={currentProduct} />
          </div>
          <RelatedProducts />
          <Reviews />
        </>
      )}
    </div>
  );
};

export default ProductDetail;
