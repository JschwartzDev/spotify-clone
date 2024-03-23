const AlbumCover = ({ data }) => {
  return (
    <div className="album-cover-wrapper flex-col-start m-5 p-5 r-b w-100">
      <div className="w-100">
        <h3>{data}</h3>
      </div>
      <div className="w-100">
        <img
          src="https://images.unsplash.com/photo-1710065574765-a685385c6d9a?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=200&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTcxMTEzODY2Mw&ixlib=rb-4.0.3&q=80&w=200"
          alt="nothing for now"
          className="w-100 h-100 r-b"
        />
      </div>
      <div className="w-100">
        <h3>{data}</h3>
        <span>name</span>
        <span>name</span>
      </div>
    </div>
  );
};

export default AlbumCover;
