import React from "react";

const OfferStamp = ({ sale, offer, desc }) => {
  return (
    <div className="offer-stamp">
      <div className="offer-stamp__container">
        <div className="wrapper">
          <h1>{sale}</h1>
          <p>
            upto <span>{offer}% Off</span>
          </p>
        </div>
        <p className="offer-desc">{desc}</p>
      </div>
    </div>
  );
};

export default OfferStamp;
