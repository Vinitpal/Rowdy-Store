const RatingBar = ({ ratingPercentage }) => {
  return (
    <div className="rating__bar">
      <div style={{ width: `${ratingPercentage}%` }}></div>
    </div>
  );
};

const RatingBarContainer = ({ percent }) => {
  return (
    <div className="rating-bar__container">
      <div className="rating-number w-1/12 ">
        <p>{5 - percent}</p>
        <i className=" fas fa-star"></i>
      </div>
      <div className="w-8/12">
        <RatingBar ratingPercentage={`${(4 - percent + 1) * 20}`} />
      </div>
      <div className="w-1/12">{(4 - percent + 1) * 20}%</div>
    </div>
  );
};

export default RatingBarContainer;
