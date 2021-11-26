import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { addToCart, updateTotal } from "../../actions";

const OrderItem = ({ item, qty }) => {
  const dispatch = useDispatch();
  return (
    <div className="ordered-product">
      <div className="text">
        <h1 className="font-semibold">{item.title}</h1>

        <p className="font-semibold">${item.price}</p>

        <p className="font-medium">Quantity : {qty}</p>

        <div className="links-container">
          <Link className="link view-product" to={`/product/${item.id}`}>
            View Product
          </Link>
          <Link
            className="link pl-3"
            to="/checkout"
            onClick={() => {
              dispatch(addToCart(item.id));
              dispatch(updateTotal(item.price));
            }}
          >
            Buy Again
          </Link>
        </div>

        <p className="font-semibold mt-4">Delivered</p>
      </div>
      <div className="image">
        <img src={item.images[0]} alt={item.title} />
      </div>
    </div>
  );
};

export default OrderItem;
