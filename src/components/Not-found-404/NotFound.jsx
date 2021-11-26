import "./not-found.css";
import FourO from "/images/FourO.svg";

import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="not-found-container">
      <div className="wrapper">
        <h1>404 Not Found</h1>
        <Link to="/">
          Go to Homepage to shop more products or check out your cart items!
        </Link>
      </div>
      <img className="lg:w-1/3" src={FourO} alt="404" />
    </div>
  );
};

export default NotFound;
