import { useEffect } from "react";
import "./App.css";

// Routes
import { Routes, Route } from "react-router-dom";
import ProductListing from "./components/ProductListing";

import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "./actions/index";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts());
  }, [getProducts]);

  return (
    <div className="App">
      {/* Routes */}
      <Routes>
        <Route exact path="/" element={<ProductListing />} />
      </Routes>
    </div>
  );
}

export default App;
