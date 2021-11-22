import "./review.css";

import UserReview from "./UserReview";
import ReviewBarContainer from "./ReviewBarContainer";

const Reviews = () => {
  return (
    <div className="review__section">
      <div className="container">
        <div className="review-stats">
          <div className="my-4">
            <h1 className="heading">Customer Reviews</h1>

            <div className="overview__rating">
              <div className="stars__container">
                {[...Array(4)].map((_, i) => (
                  <i key={i} className="text-yellow-500 fas fa-star"></i>
                ))}
                <i className="far fa-star"></i>
              </div>
              <span>Based on 1624 Reviews</span>
            </div>
          </div>

          {[...Array(5)].map((_, i) => (
            <ReviewBarContainer key={i} percent={i} />
          ))}

          <div className="review__cta">
            <h1>Share your thoughts</h1>
            <p>
              If you've used this product, share your thoughts with other
              customers
            </p>
            <button>Write a review</button>
          </div>
        </div>

        <div className="user-reviews__container">
          {[...Array(5)].map((_, i) => (
            <UserReview key={i} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Reviews;
