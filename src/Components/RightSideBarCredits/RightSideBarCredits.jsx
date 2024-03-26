const RightSideBarCredits = () => {
  return (
    <div className="credits-wrapper flex-col-start w-100 ml-5 p-5 r-b">
      <div className="w-100 flex-row-between">
        <h4>Credits</h4>
        <h5 className="mr-5 h-underline">Show All</h5>
      </div>
      <div className="flex-row-between w-100 mr-5">
        <div className="w-50">
          <h4>Artist Name</h4>
          <h5>Main Artist</h5>
        </div>
        <button className="button">Follow</button>
      </div>
      <div className="flex-row-start w-100">
        <h3 className="w-100">Composer Name</h3>
        <h4>Composer</h4>
      </div>
    </div>
  );
};

export default RightSideBarCredits;
