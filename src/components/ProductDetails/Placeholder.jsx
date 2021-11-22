import React from "react";

const Placeholder = () => {
  return (
    <div className={`lg:flex-row flex justify-center mt-10 mb-16`}>
      <div className={`w-5/6 border border-blue-300 shadow rounded-md `}>
        <div className={`animate-pulse flex flex-col lg:flex-row p-4`}>
          {/* Left side image */}
          <div className={`flex-col mx-auto w-full lg:w-1/2 `}>
            <div className={`bg-blue-400 rounded h-80`}></div>
            <div className={`flex h-20 my-3`}>
              <div className={`h-20 mr-4 w-1/4 bg-blue-400 rounded`}></div>
              <div className={`h-20 mr-4 w-1/4 bg-blue-400 rounded`}></div>
              <div className={`h-20 mr-4 w-1/4 bg-blue-400 rounded`}></div>
              <div className={`h-20 mr-4 w-1/4 bg-blue-400 rounded`}></div>
            </div>
          </div>
          {/* Right side Details */}
          <div className={`flex-col w-full h-full lg:ml-10 lg:w-1/2`}>
            <div className={`space-y-4 py-2 w-full h-40 border-b-2 pb-5`}>
              <div className={`h-4 bg-blue-400 rounded w-1/4`}></div>
              <div className={`h-4 bg-blue-400 rounded w-5/6`}></div>
              <div className={`h-4 bg-blue-400 rounded w-4/6`}></div>
              <div className={`h-4 bg-blue-400 rounded w-2/4`}></div>
              <div className={`h-4 bg-blue-400 rounded w-1/4`}></div>
            </div>
            <div className={`space-y-4 w-full mt-4 border-b-2 pb-5`}>
              <div className={`h-4 bg-blue-400 rounded w-24`}></div>
              <div className={`h-4 bg-blue-400 rounded w-1/4`}></div>
            </div>
            <div className={`space-y-4 w-full mt-4 border-b-2 pb-5`}>
              <div className={`h-4 bg-blue-400 rounded w-24`}></div>
              <div className={`h-4 bg-blue-400 rounded w-1/4`}></div>
            </div>
            <div className={`w-full flex items-center mt-4 border-b-2 pb-5`}>
              <div className={`h-12 bg-blue-400 rounded w-1/4`}></div>
              <div className={`h-12 bg-blue-400 rounded ml-4 w-3/4`}></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Placeholder;
