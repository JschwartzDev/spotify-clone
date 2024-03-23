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
        <div className="playlist flex-row-start">
          <img
            src="https://imgs.search.brave.com/oDCvLHdj04HFh_orzLnUhCoLjSsCz7Z17cwu3tFsIRk/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9yZXNv/dXJjZXMudGlkYWwu/Y29tL2ltYWdlcy8y/MjhiYjljNS8wYjZk/LzQwMTgvYjBjZC9j/NzkyM2JkM2JjY2Iv/NjQweDY0MC5qcGc"
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
