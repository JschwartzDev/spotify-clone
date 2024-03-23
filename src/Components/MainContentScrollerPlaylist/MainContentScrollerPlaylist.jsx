import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";

const MainContentScrollerPlaylist = () => {
  return (
    <div className="playlist-wrapper flex-row-between m-10 r-b">
      <div className="flex-row-start">
        <img
          src="https://images.unsplash.com/photo-1710065574765-a685385c6d9a?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=200&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTcxMTEzODY2Mw&ixlib=rb-4.0.3&q=80&w=200"
          alt=""
          className="playlist-image r-b"
        />
        <div className="artist-name m-10 pt-5">Name</div>
      </div>

      <div className="play-button m-10">
        <FontAwesomeIcon icon={faPlay} class="icon" />
      </div>
    </div>
  );
};

export default MainContentScrollerPlaylist;
