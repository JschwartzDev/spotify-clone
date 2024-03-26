import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShuffle } from "@fortawesome/free-solid-svg-icons";
import { faBackwardStep } from "@fortawesome/free-solid-svg-icons";
import { faForwardStep } from "@fortawesome/free-solid-svg-icons";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { faRepeat } from "@fortawesome/free-solid-svg-icons";

const FooterSongControls = () => {
  return (
    <div className="song-controls-wrapper flex-col-center p-10 mb-10">
      <div className="control-row flex-row-center w-100">
        <FontAwesomeIcon icon={faShuffle} className="icon ml-10 mr-10" />
        <FontAwesomeIcon icon={faBackwardStep} className="icon ml-10 mr-10" />
        <FontAwesomeIcon icon={faPlay} className="icon ml-10 mr-10" />
        <FontAwesomeIcon icon={faForwardStep} className="icon ml-10 mr-10" />
        <FontAwesomeIcon icon={faRepeat} className="icon ml-10 mr-10" />
      </div>
      <div className="timer-row w-50 mt-10">
        <div className="timer-wrapper w-100">
          <div className="timer w-50"></div>
        </div>
      </div>
    </div>
  );
};

export default FooterSongControls;
