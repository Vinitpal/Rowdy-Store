import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { toggleCart } from "../../actions/index";

import "./navbar.css";

const SubNavElems = ({ text }) => {
  return <li className="sub-nav__elements">{text}</li>;
};

export const SubNavbar = () => {
  const elems = [
    "Top offers",
    "Groceries",
    "Mobiles",
    "Fashion",
    "Electronics",
    "Home",
    "Appliances",
    "Travel",
  ];
  return (
    <div className="sub-navbar">
      <div className="sub-navbar__wrapper">
        <ul className="list-style-none">
          {elems.map((elem, i) => (
            <SubNavElems key={i} text={elem} />
          ))}
          <li className="hover:text-blue-500 cursor-pointer px-10 my-2">
            Beauty
          </li>
        </ul>
      </div>
    </div>
  );
};

const NavLink = ({ to, name, classes, func }) => {
  return (
    <Link to={to} className={classes} onClick={func}>
      {name}
    </Link>
  );
};

const index = () => {
  const [toggleNavbar, settoggleNavbar] = useState(false);
  const dispatch = useDispatch();
  const close = () => settoggleNavbar(!toggleNavbar);

  const lgLinkClasses =
    "mr-5 w-1/4 hover:text-indigo-200 cursor-pointer navlinks";
  const sm = "py-2 w-full hover:text-indigo-200 cursor-pointer";

  return (
    <div className="navbar">
      <div className="wrapper">
        <Link to="/" className=" logo">
          <img
            className=""
            src="https://res.cloudinary.com/dmwxnrn8o/image/upload/v1727609034/dragon_logo-removebg_zptz5p.png"
            alt="logo"
          />
          <span className="">Rowdy Store</span>
        </Link>
        <nav className="pc-nav">
          <NavLink to="/products" name="Products" classes={lgLinkClasses} />
          <NavLink to="/checkout" name="Checkout" classes={lgLinkClasses} />
          <NavLink to="/orders" name="Orders" classes={lgLinkClasses} />
          <NavLink to="/" name="About" classes={lgLinkClasses} />
        </nav>
        <div className="btn-container">
          <button className="cart-btn" onClick={() => dispatch(toggleCart())}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
          </button>
          <button
            className="hamburger"
            onClick={() => settoggleNavbar(!toggleNavbar)}
          >
            <i className="fa-solid fa-chevron-down"></i>
          </button>
        </div>
        <div
          className={`mobile-nav motion-reduce:transition-none motion-reduce:transform-none ${
            toggleNavbar ? "h-44" : "opacity-0 h-0"
          } `}
        >
          <div
            className={`mobile-nav__container ${
              toggleNavbar ? "block" : "hidden"
            } `}
          >
            <NavLink
              to="/products"
              name="Products"
              classes={"border-b-2 " + sm}
              func={close}
            />
            <NavLink
              to="/checkout"
              name="Checkout"
              classes={"border-b-2 " + sm}
              func={close}
            />
            <NavLink
              to="/orders"
              name="Orders"
              classes={"border-b-2 " + sm}
              func={close}
            />
            <NavLink to="/" name="About" classes={sm} func={close} />
          </div>
        </div>
      </div>
      <SubNavbar />
    </div>
  );
};

export default index;
