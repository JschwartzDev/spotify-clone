import AlbumCover from "../AlbumCover/AlbumCover";
import AboutArtist from "../AboutArtist/AboutArtist";
import RightSideBarCredits from "../RightSideBarCredits/RightSideBarCredits";
import RightSideBarTourDates from "../RightSideBarTourDates/RightSideBarTourDates";
import RightSideBarNextInQueue from "../RightSideBarNextInQueue/RightSideBarNextInQueue";

const RightSideBar = () => {
  return (
    <div className="right-side-bar-wrapper flex-col-start">
      <div className="sub-wrapper w-100">
        <AlbumCover data={"hello"} />
        <AboutArtist data={"hello"} />
        <RightSideBarCredits />
        <RightSideBarTourDates />
        <RightSideBarNextInQueue />
      </div>
    </div>
  );
};

export default RightSideBar;
