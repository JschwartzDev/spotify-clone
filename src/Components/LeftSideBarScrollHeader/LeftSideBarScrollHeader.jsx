import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBook } from "@fortawesome/free-solid-svg-icons";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const LeftSideBarScrollHeader = () => {
  return (
    <div className="scroll-header-wrapper r-b-top p-5">
      <div className="flex-row-between mb-10 p-5">
        <div className="left-icon-container">
          <FontAwesomeIcon icon={faBook} className="icon mr-10 ml-10" />
          <span className="ml-5">Your Library</span>
        </div>
        <div className="right-icon-container">
          <FontAwesomeIcon icon={faPlus} className="icon mr-10" />
          <FontAwesomeIcon icon={faArrowRight} className="icon mr-10" />
        </div>
      </div>
      <div className="flex-row-start mt-10 p-5">
        <button className="button ml-5 mr-5">Playlists</button>
        <button className="button ml-5 mr-5">Albums</button>
        <button className="button ml-5">Artists</button>
      </div>
    </div>
  );
};

export default LeftSideBarScrollHeader;
