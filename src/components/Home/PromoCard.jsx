import { Link } from "react-router-dom";

const PromoCard = ({ image, heading, headColor }) => {
  return (
    <div className="promo-card__container">
      <img src={image} />
      <div className="wrapper promo-details">
        <h1 className={`font-bold ${headColor}`}>{heading}</h1>

        <p className="font-semibold text-black">Lorem ipsum dolor sit amet</p>

        <Link to="/products" className="link">
          Shop now <i className="fa-solid fa-chevron-right"></i>
        </Link>
      </div>
    </div>
  );
};

export default PromoCard;
