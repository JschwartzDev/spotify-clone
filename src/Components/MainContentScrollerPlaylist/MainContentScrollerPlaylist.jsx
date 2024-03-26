import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";

const MainContentScrollerPlaylist = ({ playlistName, playlistImage }) => {
  const truncateNames = (name) => {
    if (name.length > 10) {
      return name.substring(0, 10) + "...";
    } else {
      return name;
    }
  };
  return (
    <div className="playlist-wrapper flex-row-between m-10 r-b h-box-light">
      <div className="flex-row-start">
        <img src={playlistImage} alt="" className="playlist-image r-b" />
        <div className="artist-name m-10 pt-5">
          {truncateNames(playlistName)}
        </div>
      </div>

      <div className="play-button m-10">
        <FontAwesomeIcon icon={faPlay} className="icon" />
      </div>
    </div>
  );
};

export default MainContentScrollerPlaylist;
