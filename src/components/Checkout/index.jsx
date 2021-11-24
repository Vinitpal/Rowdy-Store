import { useSelector } from "react-redux";
import BillDetails from "./BillDetails";
import BillDetailsPlaceholder from "./BillDetailsPlaceholder";
import EmptyCart from "./EmptyCart";
import CheckoutItem from "./CheckoutItem";
import CheckoutItemPlaceholder from "./CheckoutItemPlaceholder";

const index = () => {
  const products = useSelector((state) => state.products);
  const cart = useSelector((state) => state.cart);

  if (!cart.length) {
    return (
      <div className="checkout__empty-cart">
        <EmptyCart />
      </div>
    );
  }

  return (
    <div className="checkout__section">
      {/* Cart Items Container */}
      <div className="items__container">
        {products.length
          ? cart.map((item) => (
              <CheckoutItem id={item.id} qty={item.qty} key={item.id} />
            ))
          : [...Array(4)].map((_, ind) => (
              <CheckoutItemPlaceholder key={ind} />
            ))}
      </div>
      {/* Order Details */}
      {products.length ? (
        <BillDetails cart={cart} />
      ) : (
        <BillDetailsPlaceholder />
      )}
    </div>
  );
};

export default index;
