import LeftSideBarScrollerPlaylist from "../LeftSidebarScrollerPlaylist/LeftSideBarScrollerPlaylist";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const LeftSideBarScroller = () => {
  return (
    <div className="scroller-wrapper w-100">
      <div className="icon-row flex-row-between p-5 mb-10">
        <FontAwesomeIcon icon={faSearch} className="icon ml-10 mt-10" />
        <div className="right-icons">
          <span className="right-span">Recents</span>
          <FontAwesomeIcon icon={faBars} className="icon ml-10 mr-10 mt-10" />
        </div>
      </div>
      <div className="scroller p-5">
        <LeftSideBarScrollerPlaylist />
      </div>
    </div>
  );
};

export default LeftSideBarScroller;
