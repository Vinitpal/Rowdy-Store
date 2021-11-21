import { useSelector } from "react-redux";
import "./p-listing.css";
import PlaceholderCard from "./PlacehoderCard";
import ProductCard from "./ProductCard";

const ProductListing = () => {
  const products = useSelector((state) => state.products);

  return (
    <div className="product__listing">
      <div className="wrapper">
        {products.length
          ? products.map((product, i) => (
              <ProductCard key={i} product={product} />
            ))
          : [...Array(20)].map((_, i) => <PlaceholderCard key={i} />)}
      </div>
    </div>
  );
};

export default ProductListing;
