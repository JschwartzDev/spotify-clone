const LeftSideBarScrollerPlaylist = ({
  playlistName,
  playlistImage,
  handleSetSelectedPlaylist,
  playlistId,
}) => {
  return (
    <div
      className="playlist flex-row-start h-box p-5 r-b"
      onClick={() => handleSetSelectedPlaylist(playlistId)}
    >
      <img src={playlistImage} alt="" className="playlist-image r-b mr-10" />
      <div className="playlist-details">
        <h5>{playlistName}</h5>
        <span>details</span>
      </div>
    </div>
  );
};

export default LeftSideBarScrollerPlaylist;
