import React from "react";
import { useSelector } from "react-redux";
import OrderedProduct from "./OrderedProduct";
import OrderPlaceholder from "./OrderPlaceholder";

const OrderComponent = ({ order }) => {
  const products = useSelector((state) => state.products);

  if (!products.length) {
    return <OrderPlaceholder />;
  }

  return (
    <div className="order-component">
      <div className="order-component__wrapper">
        <div className="info-container">
          <div className="info">
            <h1>Date placed</h1>
            <p>{order.timestamp}</p>
          </div>

          <div className="info">
            <h1>Ordered ID</h1>
            <p>{order.orderId}</p>
          </div>

          <div className="info">
            <h1>Total amount</h1>
            <p>${order.total.toFixed()}</p>
          </div>
        </div>
        <div>
          <button className="mt-4">View Order</button>

          <button className="my-4">View Invoice</button>
        </div>
      </div>

      {order.cart.map((item, index) => {
        const qty = item.qty;
        const orderedItem = products.find((el) => el.id === item.id);
        return <OrderedProduct key={index} item={orderedItem} qty={qty} />;
      })}
    </div>
  );
};

export default OrderComponent;
