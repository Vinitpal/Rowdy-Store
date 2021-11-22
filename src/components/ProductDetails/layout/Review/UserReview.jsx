import React from "react";

const UserReview = () => {
  return (
    <>
      <div className="mt-8">
        <div className="user__info">
          <img
            src="https://cdn.discordapp.com/attachments/753151975570276352/866536124222537778/unknown.png"
            alt="user"
          />
          <div className="mx-2">
            {/* username + stars */}
            <h1>John Doe</h1>
            <div className="users__rating">
              {[...Array(5)].map((_, i) => (
                <i key={i} className="fas fa-star"></i>
              ))}
            </div>
          </div>
        </div>
        <div>
          <p className="review__text">
            I love how versatile the website is. I don't even feel like I'm
            shopping online anymore. I'm glad I found this site. Products are
            great too, and I love how easy it is to add to my cart.
          </p>
        </div>
      </div>
    </>
  );
};

export default UserReview;
