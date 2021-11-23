import { useEffect } from "react";
import "./App.css";

// Routes
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Cart from "./components/Cart";
import ProductListing from "./components/ProductListing";
import ProductDetail from "./components/ProductDetails";

import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "./actions/index";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts());
  }, [getProducts]);

  return (
    <div className="App">
      <Navbar />
      <Cart />

      {/* Routes */}
      <Routes>
        <Route exact path="product/:id" element={<ProductDetail />} />
        <Route exact path="/" element={<ProductListing />} />
      </Routes>
    </div>
  );
}

export default App;
