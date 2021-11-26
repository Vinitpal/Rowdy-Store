import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  return (
    <Link
      className="product__card"
      key={product.id}
      to={`/product/${product.id}`}
    >
      <div className="image">
        <img src={product.images} alt={product.title} />
      </div>

      <h3 className="heading">{product.title.slice(0, 15) + "..."}</h3>

      <div className="info">
        <div className="price">
          <p className="discount">${product.price}</p>
          <p className="mrp">
            ${(product.price + (product.price % 7)).toFixed(2)}
          </p>
        </div>

        <div className="rating">
          <i className="fas fa-star"></i>
          <p>4.8</p>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
