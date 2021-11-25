import { useSelector } from "react-redux";
import "./checkout.css";

// components
import CheckoutItem from "./Checkout-Item";
import CheckoutItemPlaceholder from "./Checkout-Item/CheckoutItemPlaceholder";
import BillDetails from "./Bill-details";
import BillDetailsPlaceholder from "./Bill-details/BillDetailsPlaceholder";
import CartisEmpty from "./CartisEmpty";

const index = () => {
  const products = useSelector((state) => state.products);
  const cart = useSelector((state) => state.cart);

  if (!cart.length) {
    return (
      <div className="checkout__empty-cart">
        <CartisEmpty />
      </div>
    );
  }

  return (
    <div className="checkout__section">
      <div className="items__container">
        {products.length
          ? cart.map((item) => (
              <CheckoutItem id={item.id} qty={item.qty} key={item.id} />
            ))
          : [...Array(4)].map((_, ind) => (
              <CheckoutItemPlaceholder key={ind} />
            ))}
      </div>

      {products.length ? (
        <BillDetails cart={cart} />
      ) : (
        <BillDetailsPlaceholder />
      )}
    </div>
  );
};

export default index;
