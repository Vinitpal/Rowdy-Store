import React from "react";
import EmptyCart from "/images/empty_cart.svg";
import { Link } from "react-router-dom";

const CartisEmpty = () => {
  return (
    <>
      <div className="empty-cart__wrapper">
        <h1 className="">Cart is Empty</h1>
        <Link className="link" to="/">
          Go to Homepage and add some items to cart
        </Link>
      </div>
      <img className="empty-cart__img" src={EmptyCart} alt="ded" />
    </>
  );
};

export default CartisEmpty;
