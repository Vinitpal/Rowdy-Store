import React from "react";
import { Link } from "react-router-dom";

import "./details-container.css";

// Icons
import { HeartIcon } from "@heroicons/react/outline";
import { ShareIcon } from "@heroicons/react/outline";
import { ShoppingCartIcon } from "@heroicons/react/outline";

// redux
import { useDispatch } from "react-redux";
import { addToCart, toggleCart, updateTotal } from "../../../../actions/index";

// layout components
import Ratings from "./Ratings";
import ColorOptions from "./ColorOptions";
import SizeOptions from "./SizeOptions";
import DisclosureContainer from "./DisclosureContainer";

const DetailsContainer = ({ currentProduct }) => {
  const dispatch = useDispatch();

  return (
    <div className="details__container">
      <Ratings />

      <div className="heading">
        <h1>{currentProduct.title}</h1>
        <p>{currentProduct.description.split(" ").slice(0, 3).join(" ")}</p>
        <h1 className="price">${currentProduct.price}</h1>
      </div>

      <ColorOptions />
      <SizeOptions />

      <div className="cta__section">
        <div className="btn__wrapper">
          <Link
            to="/checkout"
            className="buy-now__btn"
            onClick={() => {
              dispatch(addToCart(currentProduct.id));
              dispatch(updateTotal(currentProduct.price));
            }}
          >
            Buy Now
          </Link>
          <button
            className="add-to-cart__btn"
            onClick={() => {
              dispatch(addToCart(currentProduct.id));
              dispatch(updateTotal(currentProduct.price));
              dispatch(toggleCart());
            }}
          >
            <ShoppingCartIcon className="w-4 h-4 mr-2" />
            Add to cart
          </button>
        </div>

        <div className="share__wrapper">
          <div className="add-to-favs">
            <HeartIcon className="h-4 w-4 mr-2" />
            <span>Add to Favorite</span>
          </div>
          <div className="share-btn">
            <ShareIcon className="h-4 w-4 mr-2" />
            <span>Share</span>
          </div>
        </div>
      </div>

      <DisclosureContainer
        title={"Description"}
        desc={currentProduct.description}
      />
      <DisclosureContainer
        title={"Additional Info"}
        desc={currentProduct.description}
      />
    </div>
  );
};

export default DetailsContainer;
