import React from "react";

const OrderPlaceholder = () => {
  return (
    <div className="order-placeholder">
      <div className="shadow-wrapper">
        <div className="wrapper">
          <div className="item-1">
            <div className="h-4 blue-rounded w-2/4 lg:w-1/4"></div>
            <div className="h-4 blue-rounded w-4/6 lg:w-2/6"></div>
          </div>
          <div className="item-2">
            <div className="item-2__text">
              <div className="h-16 blue-rounded w-full lg:w-48 "></div>
              <div className="h-16 blue-rounded w-full lg:w-48"></div>
              <div className="h-16 blue-rounded w-full lg:w-48"></div>
            </div>
            <div className="item-2__btn">
              <div className="h-10 blue-rounded w-full lg:w-24"></div>
              <div className="h-10 blue-rounded w-full lg:w-24"></div>
            </div>
          </div>
          <div className="item-3">
            <div className="w-full space-y-2">
              <div className="h-4 blue-rounded w-full lg:w-3/6"></div>
              <div className="h-4 blue-rounded w-1/4 lg:w-1/6"></div>
              <div className="h-4 blue-rounded w-2/6 lg:w-2/6"></div>
              <div className="h-4 blue-rounded w-4/6 lg:w-2/6"></div>
              <div className="h-4 blue-rounded w-2/6 lg:w-1/6"></div>
            </div>
            <div className="btn"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderPlaceholder;
