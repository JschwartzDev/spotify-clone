const RightSideBarTourDates = () => {
  return (
    <div className="tour-dates-wrapper w-100 ml-5 mt-5 r-b p-5">
      <div className="w-100 flex-row-between">
        <h4>On Tour</h4>
        <h5 className="h-underline mr-5">Show All</h5>
      </div>
      <div className="ml-5 h-box mt-10 pt-10 mr-10 pb-10 flex-row-start r-b">
        <div className="date-wrapper w-100 flex-col-center r-b ml-5">
          <div className="date-box">Nov. 12th</div>
        </div>
        <div className="date-details pt-10 ml-10">
          <h4 className="w-100">Details</h4>
          <h4 className="w-100">Artist Name</h4>
          <h4 className="w-100">Tour Date and time</h4>
        </div>
      </div>

      <div className="ml-5 h-box mt-10 pt-10 mr-10 pb-10 flex-row-start r-b">
        <div className="date-wrapper w-100 flex-col-center r-b ml-5">
          <div className="date-box">Nov. 12th</div>
        </div>
        <div className="date-details pt-10 ml-10">
          <h4 className="w-100">Details</h4>
          <h4 className="w-100">Artist Name</h4>
          <h4 className="w-100">Tour Date and time</h4>
        </div>
      </div>
    </div>
  );
};

export default RightSideBarTourDates;
