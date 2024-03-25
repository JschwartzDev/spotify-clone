import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { faRightFromBracket } from "@fortawesome/free-solid-svg-icons";

const LeftSideBarWidget = ({ handleLogOut, handleSetSearching }) => {
  return (
    <div className="side-bar-widget-wrapper flex-col-center r-b ml-5 mr-5 mt-5 p-10 w-100">
      <div
        className="widget-icon-container flex-row-start"
        onClick={handleSetSearching}
      >
        <div>
          <FontAwesomeIcon icon={faHouse} className="icon" />
          <span className="ml-5 pl-5">Home</span>
        </div>
      </div>

      <div
        className="widget-icon-container flex-row-start"
        onClick={handleLogOut}
      >
        <div>
          <FontAwesomeIcon icon={faRightFromBracket} className="icon" />
          <span className="ml-5 pl-5">Log Out</span>
        </div>
      </div>
      <div
        className="widget-icon-container flex-row-start"
        onClick={handleSetSearching}
      >
        <div>
          <FontAwesomeIcon icon={faSearch} className="icon" />
          <span className="ml-5 pl-5">Search</span>
        </div>
      </div>
    </div>
  );
};

export default LeftSideBarWidget;
