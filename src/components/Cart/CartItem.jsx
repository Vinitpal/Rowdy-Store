import React from "react";
import { useDispatch } from "react-redux";
import "./cart-item.css";

import {
  deleteCartItem,
  increaseCartItem,
  decreaseCartItem,
  updateTotal,
} from "../../actions/index";

const CartItem = ({ item, qty, price }) => {
  const dispatch = useDispatch();

  return (
    <li key={item.id} className="cart-item">
      <div className="product__img">
        <img src={item.images[0]} alt={item.title} className="" />
      </div>

      <div className="product__info">
        <div>
          <div className="heading">
            <h3 className="text-sm">{item.title.slice(0, 20) + "..."}</h3>
            <p className="ml-4">${(price * qty).toFixed(2)}</p>
          </div>
        </div>
        <div className="content">
          <p className="text-gray-500">
            <button
              className="update-count__btn"
              onClick={() => {
                dispatch(decreaseCartItem(item.id));
                dispatch(updateTotal(price * -1));
              }}
            >
              -
            </button>{" "}
            {qty}{" "}
            <button
              className="update-count__btn"
              onClick={() => {
                if (qty < 10) {
                  dispatch(increaseCartItem(item.id));
                  dispatch(updateTotal(price));
                }
              }}
            >
              +
            </button>
          </p>

          <div className="flex">
            <button
              type="button"
              className="delete-item__btn"
              onClick={() => {
                dispatch(deleteCartItem(item.id));
                dispatch(updateTotal(price * -qty));
              }}
            >
              Remove
            </button>
          </div>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
