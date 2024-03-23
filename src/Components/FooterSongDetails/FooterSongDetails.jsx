const FooterSongDetails = () => {
  return (
    <div className="footer-details-wrapper flex-row-start mb-10 ml-10 w-25">
      <img
        className="footer-details-image r-b"
        src="https://images.unsplash.com/photo-1710065574765-a685385c6d9a?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=200&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTcxMTEzODY2Mw&ixlib=rb-4.0.3&q=80&w=200"
      ></img>
      <div className="flex-row-start ml-10 mt-10">
        <h4 className="w-100">Song Name</h4>
        <span>Artist Name</span>
      </div>
    </div>
  );
};

export default FooterSongDetails;
