import React from "react";
import { StarIcon } from "@heroicons/react/solid";

const Ratings = () => {
  return (
    <div className="lg:w-4/5 flex items-center -ml-1">
      {[...Array(5)].map((star, i) => (
        <StarIcon key={i} className="h-4 w-5 mr-2" />
      ))}
      <span>(1,000)</span>
    </div>
  );
};

export default Ratings;
