import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { faBell } from "@fortawesome/free-solid-svg-icons";
import { faUsers } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";

const MainContentStickyHeader = ({
  isSearching,
  handleSetSearchKey,
  selectedPlaylist,
}) => {
  return (
    <div className="sticky-header-wrapper r-b-top p-10 w-100">
      <div className="icon-container flex-row-between mb-10 p-10">
        <div className="left-icons">
          <div>
            <FontAwesomeIcon icon={faArrowLeft} className="icon mr-5" />
            <FontAwesomeIcon icon={faArrowRight} className="icon ml-5" />
          </div>
        </div>
        {isSearching ? (
          <input
            type="text"
            className="r-b p-5 search-input w-50"
            onChange={(e) => handleSetSearchKey(e)}
            onKeyDown={(e) => handleSetSearchKey(e)}
          />
        ) : (
          ""
        )}
        <div className="right-icons-main">
          <FontAwesomeIcon icon={faBell} className="icon mr-5 ml-5" />
          <FontAwesomeIcon icon={faUsers} className="icon mr-5 ml-5" />
          <FontAwesomeIcon icon={faUser} className="icon mr-5 ml-5" />
        </div>
      </div>
      {isSearching ? (
        ""
      ) : selectedPlaylist ? (
        <div className="w-100 flex-row-start mt-10">
          <img
            src={selectedPlaylist.images[1].url}
            alt=""
            className="collection-image"
          />
          <div className="ml-10">
            {selectedPlaylist.public ? (
              <h4>Public Playlist</h4>
            ) : (
              <h4>Private Playlist</h4>
            )}

            <h4 className="playlist-name mt-10">{selectedPlaylist.name}</h4>
          </div>
        </div>
      ) : (
        <div className="w-50 flex-row-start mt-10 button-group">
          <button className="button mr-5">All</button>
          <button className="button mr-5">Music</button>
          <button className="button mr-5">Podcasts</button>
          <button className="button mr-5">Audiobooks</button>
        </div>
      )}
    </div>
  );
};

export default MainContentStickyHeader;
