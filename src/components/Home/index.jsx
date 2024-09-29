import React from "react";
import "./home.css";

// redux
import { useSelector } from "react-redux";

// routes
import OfferStamp from "./OfferStamp";
import SecondSection from "./SecondSection";
import PromoContainer from "./PromoContainer";
import PromoCard from "./PromoCard";

import ProductCard from "../ProductListing/ProductCard";
import PlaceholderCard from "../ProductListing/PlacehoderCard";

const Home = () => {
  const products = useSelector((state) => state.products);
  const arr = [
    {
      image:
        "https://images.pexels.com/photos/1553783/pexels-photo-1553783.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      title: "Buy outstanding products",
    },
    {
      image:
        "https://images.unsplash.com/photo-1491336477066-31156b5e4f35?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTk3fHxmYXNoaW9uJTIwbWVufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
      title: "Professional Clothes for you!",
    },
    {
      image:
        "https://images.pexels.com/photos/2866077/pexels-photo-2866077.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      title: "Full flexing in college",
    },
  ];
  return (
    <div className="home">
      <div className="hero-image">
        <h1 className="">We sell products that fill your life with style.</h1>
      </div>

      {/* Second Section */}
      <div className="second-section__container">
        {arr.map((item, i) => (
          <SecondSection key={i} title={item.title} image={item.image} />
        ))}
      </div>

      <div>
        <OfferStamp
          sale="Todays Offer"
          offer="50"
          desc="Deals you cannot deny"
        />
        <div className="product-offer">
          {products.length
            ? products
                .slice(0, 4)
                .map((product, i) => <ProductCard product={product} key={i} />)
            : [...Array(4)].map((_, ind) => <PlaceholderCard key={ind} />)}
        </div>
      </div>

      <div className="recent-search">
        <h1 className="">Recent Search</h1>
        <div className="flex overflow-auto">
          {products.slice(4, 8).map((product, i) => (
            <ProductCard product={product} key={i} />
          ))}
        </div>
      </div>

      {/* todo: image need to be updated */}
      {/* <div className="promo-card">
        <PromoCard
          image="https://cdn.discordapp.com/attachments/877090379307028480/879238118639796224/1.png"
          heading="Top Selling Products"
          headColor="text-blue-500"
        />
        <PromoCard
          image="https://cdn.discordapp.com/attachments/877090379307028480/879238139573587979/2.png"
          heading="Season Sale"
          headColor="text-gray-400"
        />
      </div> */}

      <div className=" recommended">
        <h1 className="">Recommended</h1>
        <div className="flex overflow-auto">
          {products.length
            ? products
                .slice(8, 12)
                .map((product, i) => <ProductCard product={product} key={i} />)
            : [...Array(4)].map((_, ind) => <PlaceholderCard key={ind} />)}
        </div>
      </div>

      <div className="most-popular">
        <h1 className="">Most Popular</h1>
        <div className="flex overflow-auto">
          {products.length
            ? products
                .slice(12, 16)
                .map((product, i) => <ProductCard product={product} key={i} />)
            : [...Array(4)].map((_, ind) => <PlaceholderCard key={ind} />)}
        </div>
      </div>

      <div className="mb-16">
        <PromoContainer />
      </div>

      {/* Another sale */}
      <div>
        <OfferStamp sale="Recommended" offer="35" desc="You may like" />
        <div className="product-offer">
          {products.length
            ? products
                .slice(0, 4)
                .map((product, i) => <ProductCard product={product} key={i} />)
            : [...Array(4)].map((_, ind) => <PlaceholderCard key={ind} />)}
        </div>
      </div>
    </div>
  );
};

export default Home;
