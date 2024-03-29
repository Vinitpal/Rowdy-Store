import "./bill-details.css";
import { useState } from "react";

// redux
import { useDispatch, useSelector } from "react-redux";
import { getNotification } from "../../../actions";

// components
import ConfirmModal from "./ConfirmModal";
// import { Elements, CardElement } from "@stripe/react-stripe-js";
// import { loadStripe } from "@stripe/stripe-js";

const index = ({ cart }) => {
  const [address, setAddress] = useState("");
  const [open, setOpen] = useState(false);
  const subtotal = useSelector((state) => state.total);

  const dispatch = useDispatch();
  // const stripePromise = loadStripe(
  //   "pk_test_51LpR3WSCutbhZqg1SUfMkaMNschB0KFzGehKxCNEgv6PVe4wdpmfRXHMtGggo1GjiWSN6LBq7gzMUhnVI7ODxGpA00J7kPgQ7t"
  // );

  const shipping = 2.0;
  const tax = subtotal * 0.06;
  const total = Number(subtotal + shipping + tax);

  const handleOpen = () => {
    if (address.length > 3) {
      setOpen(!open);
    } else {
      dispatch(
        getNotification({
          message: "Please enter a valid address",
          type: "alert",
        })
      );
    }
  };
  return (
    <>
      <div className="bill-details-section">
        <h2 className="heading">Order Summary</h2>
        <h2 className="subtotal">
          Subtotal <span>${subtotal.toFixed(2)}</span>
        </h2>
        <h2 className="shipping">
          Shipping Estimate <span>${shipping.toFixed(2)}</span>
        </h2>
        <h2 className="tax">
          Tax Estimate <span>${tax.toFixed(2)}</span>
        </h2>
        <h2 className="total-amount">
          Order Total <span>${total.toFixed(2)}</span>
        </h2>
        <div className="address">
          <label htmlFor="address">Address</label>
          <input
            autoComplete="off"
            type="text"
            name="address"
            id="address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
        </div>

        <button
          to="/checkout"
          className="place-order__btn"
          onClick={handleOpen}
        >
          Place Order
        </button>
      </div>
      {/*      
        <Elements stripe={stripePromise}>
        </Elements>
        */}
      <ConfirmModal
        cart={cart}
        open={open}
        setOpen={setOpen}
        address={address}
        total={total}
      />
    </>
  );
};

export default index;
