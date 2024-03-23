import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const LeftSideBarScroller = () => {
  return (
    <div className="scroller-wrapper">
      <div className="icon-row flex-row-between p-5 mb-10">
        <FontAwesomeIcon icon={faSearch} className="icon ml-10 mt-10" />
        <div className="right-icons">
          <span>Recents</span>
          <FontAwesomeIcon icon={faBars} className="icon ml-10 mr-10 mt-10" />
        </div>
      </div>
      <div className="scroller p-5">
        <div className="playlist flex-row-start">
          <img
            src="https://images.unsplash.com/photo-1710065574765-a685385c6d9a?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=200&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTcxMTEzODY2Mw&ixlib=rb-4.0.3&q=80&w=200"
            alt=""
            className="playlist-image r-b mr-10"
          />
          <div className="playlist-details">
            <h3>playlist name</h3>
            <span>details</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftSideBarScroller;
