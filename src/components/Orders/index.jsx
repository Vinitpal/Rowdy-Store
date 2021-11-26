import { useSelector } from "react-redux";

import "./orders.css";

import OrderComponent from "./OrderComponent";

const index = () => {
  const orders = useSelector((state) => state.orders);

  return (
    <div className="order-section">
      <div className="order-section__header">
        <h1>Order history</h1>
        <p>
          Check the status of recent orders, manage returns, and download
          invoices.
        </p>
      </div>

      {[...orders].reverse().map((order, ind) => (
        <OrderComponent key={ind} order={order} />
      ))}
    </div>
  );
};

export default index;
