import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { faBell } from "@fortawesome/free-solid-svg-icons";
import { faUsers } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";

const MainContentStickyHeader = () => {
  return (
    <div className="sticky-header-wrapper r-b-top p-10">
      <div className="icon-container flex-row-between mb-10 p-10">
        <div className="left-icons">
          <FontAwesomeIcon icon={faArrowLeft} className="icon mr-5" />
          <FontAwesomeIcon icon={faArrowRight} className="icon ml-5" />
        </div>
        <div className="right-icons">
          <FontAwesomeIcon icon={faBell} className="icon mr-5 ml-5" />
          <FontAwesomeIcon icon={faUsers} className="icon mr-5 ml-5" />
          <FontAwesomeIcon icon={faUser} className="icon mr-5 ml-5" />
        </div>
      </div>
      <div className="buttons-container flex-row-start mt-10">
        <button className="button mr-5">All</button>
        <button className="button mr-5">Music</button>
        <button className="button mr-5">Podcasts</button>
        <button className="button mr-5">Audiobooks</button>
      </div>
    </div>
  );
};

export default MainContentStickyHeader;
