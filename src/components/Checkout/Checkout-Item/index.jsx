import React from "react";
import { XIcon } from "@heroicons/react/outline";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { deleteCartItem, updateTotal } from "../../../actions";

const index = ({ id, qty }) => {
  const products = useSelector((state) => state.products);
  const item = products.find((el) => el.id === id);

  const dispatch = useDispatch();

  return (
    <div className="checkout-items__section">
      <img src={item.images[0]} />
      <div className="wrapper">
        <div className="info">
          <div>
            <Link to={`/product/${id}`} className="title">
              {item.title.slice(0, 20) + "..."}
            </Link>
            <h2 className="price">${(item.price * qty).toFixed(2)}</h2>
          </div>
          <div className="quantity">
            Quantity: <span>{qty}</span>
          </div>
          <div className="remove__item">
            <button
              type="button"
              onClick={() => {
                dispatch(deleteCartItem(item.id));
                dispatch(updateTotal(item.price * -qty));
              }}
            >
              <XIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
        </div>
        <div className="in-stock">
          <svg
            fill="none"
            stroke="green"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 13l4 4L19 7"
            ></path>
          </svg>
          In Stock
        </div>
      </div>
    </div>
  );
};

export default index;
