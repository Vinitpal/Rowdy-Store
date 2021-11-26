import { useEffect } from "react";
import "./App.css";

// Routes
import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Cart from "./components/Cart";
import Checkout from "./components/Checkout";
import Orders from "./components/Orders";
import ProductListing from "./components/ProductListing";
import ProductDetail from "./components/ProductDetails";
import Footer from "./components/Footer";

import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "./actions/index";

function App() {
  const dispatch = useDispatch();

  // to take the scroll to top
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    dispatch(getProducts());
  }, [getProducts]);

  return (
    <div className="App">
      <Navbar />
      <Cart />

      <Routes>
        <Route exact path="product/:id" element={<ProductDetail />} />
        <Route exact path="/" element={<ProductListing />} />
        <Route exact path="/checkout" element={<Checkout />} />
        <Route exact path="/orders" element={<Orders />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
