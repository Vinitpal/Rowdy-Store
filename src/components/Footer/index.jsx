import { Link } from "react-router-dom";
import "./footer.css";

const FooterLi = ({ href, title }) => {
  return (
    <li>
      <a
        href={href}
        target="_blank"
        className="cursor-pointer hover:text-blue-600"
      >
        {title}
      </a>
    </li>
  );
};

const index = () => {
  return (
    <>
      <footer>
        <div className="heading">
          <h1>About us</h1>
          <p>
            Buy something you love. We ship to over 150 countries. We're a
            global company. We have branches in 13 countries: Canada, Japan,
            Mexico, Spain, the United States, and more. We're committed to
            building a better future for all of us.
          </p>
        </div>

        <div className="wrapper">
          <div className="footer-links__container">
            <h1>Products</h1>
            <ul className="list-none">
              <FooterLi href="#" title="Kitchen" />
              <FooterLi href="#" title="Smartphone" />
              <FooterLi href="#" title="Sunglasses" />
              <FooterLi href="#" title="Laptops" />
            </ul>
          </div>

          <div className="footer-links__container">
            <h1>Features</h1>
            <ul className="list-none ">
              <FooterLi href="#" title="Kitchen" />
              <FooterLi href="" title="Smartphone" />
              <FooterLi href="#" title="Sunglasses" />
              <FooterLi href="#" title="Laptops" />
            </ul>
          </div>

          <div className="footer-links__container">
            <h1>Company</h1>
            <ul className="list-none ">
              <FooterLi href="#" title="Kitchen" />
              <FooterLi href="#" title="Smartphone" />
              <FooterLi href="#" title="Sunglasses" />
              <FooterLi href="#" title="Laptops" />
            </ul>
          </div>
        </div>
      </footer>

      <div className="social-links">
        <Link to="https://www.linkedin.com/in/vinitpal-singh-0718a3191/">
          <i className="fab fa-linkedin-in"></i>
        </Link>
        <Link to="https://twitter.com/vinitpal_arora">
          <i className="fab fa-twitter"></i>
        </Link>
        <Link to="https://github.com/Vinitpal">
          <i className="fab fa-github"></i>
        </Link>
        <Link to="https://www.instagram.com/vinitpal_arora/">
          <i className="fab fa-instagram"></i>
        </Link>
      </div>
      <div className="credit">@ 2021 Vinitpal Singh Arora</div>
    </>
  );
};

export default index;
