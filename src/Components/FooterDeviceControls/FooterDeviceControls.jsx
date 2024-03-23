import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareCaretRight } from "@fortawesome/free-solid-svg-icons";
import { faMicrophone } from "@fortawesome/free-solid-svg-icons";
import { faLayerGroup } from "@fortawesome/free-solid-svg-icons";
import { faComputer } from "@fortawesome/free-solid-svg-icons";
import { faVolumeHigh } from "@fortawesome/free-solid-svg-icons";
import { faUpRightAndDownLeftFromCenter } from "@fortawesome/free-solid-svg-icons";

const FooterDeviceControls = () => {
  return (
    <div className="flex-row-center w-25">
      <FontAwesomeIcon icon={faSquareCaretRight} class="icon ml-5 mr-5" />
      <FontAwesomeIcon icon={faMicrophone} class="icon ml-5 mr-5" />
      <FontAwesomeIcon icon={faLayerGroup} class="icon ml-5 mr-5" />
      <FontAwesomeIcon icon={faComputer} class="icon ml-5 mr-5" />
      <FontAwesomeIcon icon={faSquareCaretRight} class="icon ml-5 mr-5" />
      <FontAwesomeIcon icon={faVolumeHigh} class="icon ml-5 mr-5" />
      <div className="volume-wrapper ml-5">
        <div className="volume"></div>
      </div>
      <FontAwesomeIcon
        icon={faUpRightAndDownLeftFromCenter}
        class="icon ml-5 mr-5"
      />
    </div>
  );
};

export default FooterDeviceControls;
