const LeftSideBarScrollerPlaylist = ({ playlistName, playlistImage }) => {
  return (
    <div className="playlist flex-row-start h-box p-5 r-b">
      <img src={playlistImage} alt="" className="playlist-image r-b mr-10" />
      <div className="playlist-details">
        <h5>{playlistName}</h5>
        <span>details</span>
      </div>
    </div>
  );
};

export default LeftSideBarScrollerPlaylist;
