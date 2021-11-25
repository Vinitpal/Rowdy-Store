const BillDetailsPlaceholder = () => {
  return (
    <div className="bill-details__placeholder">
      <div className="wrapper">
        <div className="outline w-1/3"></div>
        <div className="text-wrapper">
          <div className="outline w-32"></div>
          <div className="outline w-16"></div>
        </div>
        <div className="text-wrapper">
          <div className="outline w-40"></div>
          <div className="outline w-12"></div>
        </div>
        <div className="text-wrapper">
          <div className="outline w-36"></div>
          <div className="outline w-8"></div>
        </div>
        <div className="text-wrapper">
          <div className="outline w-40"></div>
          <div className="outline w-20"></div>
        </div>
        <div className="address">
          <div className="outline w-20"></div>
          <div className="outline w-40"></div>
        </div>
        <div className="button"></div>
      </div>
    </div>
  );
};

export default BillDetailsPlaceholder;
