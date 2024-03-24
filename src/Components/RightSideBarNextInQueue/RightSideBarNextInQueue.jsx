import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMusic } from "@fortawesome/free-solid-svg-icons";

const RightSideBarNextInQueue = () => {
  return (
    <div className="niq-wrapper ml-5 w-100 mt-5 r-b p-5">
      <div className="flex-row-between">
        <h4>Next In Queue</h4>
        <h5 className="mr-5 h-underline">Show Queue</h5>
      </div>
      <div className="next-wrapper flex-row-around mt-10 h-box r-b p-5">
        <FontAwesomeIcon icon={faMusic} className="icon" />
        <img
          src="https://imgs.search.brave.com/AGc_88Cy4fdcHX4P-gvmO61ENIlZfTrAJeYTUYW57TU/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9hc3Nl/dHMuZm9udHNpbnVz/ZS5jb20vc3RhdGlj/L3VzZS1tZWRpYS1p/dGVtcy8xODEvMTgw/OTI0L3VwdG8tNzAw/eGF1dG8vNjNiOTJj/YTkvQWxsJTIwb2Yl/MjBNZSUyMGNvdmVy/LmpwZWc"
          alt=""
          className="w-25 h-25 r-b"
        />
        <div>
          <h4 className="h-underline">Song Name</h4>
          <h4 className="h-underline">Artist Name</h4>
        </div>
      </div>
    </div>
  );
};

export default RightSideBarNextInQueue;
