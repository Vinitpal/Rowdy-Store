import { useEffect } from "react";
import "./App.css";

// Routes
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Cart from "./components/Cart";
import Checkout from "./components/Checkout";
import Orders from "./components/Orders";
import ProductListing from "./components/ProductListing";
import ProductDetail from "./components/ProductDetails";
import Footer from "./components/Footer";
import Notification from "./components/Checkout/Bill-details/Notification";
import NotFound from "./components/Not-found-404/NotFound";

import { useDispatch, useSelector } from "react-redux";
import { Routes, Route, useLocation } from "react-router-dom";
import { getProducts, closeNotification } from "./actions/index";
import nprogress from "nprogress";

function App() {
  const dispatch = useDispatch();
  const notification = useSelector((state) => state.notification);

  // to take the scroll to top
  const { pathname } = useLocation();
  
  useEffect(() => {
    nprogress.start();
    nprogress.done();
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    dispatch(getProducts());
  }, [getProducts]);

  return (
    <div className="App">
      <Navbar />
      <Cart />

      {/* notification handling */}
      {notification.open ? (
        <>
          <Notification
            message={notification.message}
            type={notification.type}
          />
          <h1 className="hidden">
            {setTimeout(() => {
              dispatch(closeNotification());
            }, 2000)}
          </h1>
        </>
      ) : (
        ""
      )}

      <Routes>
        <Route path="*" element={<NotFound />} />
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<ProductListing />} />
        <Route path="product/:id" element={<ProductDetail />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/orders" element={<Orders />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
