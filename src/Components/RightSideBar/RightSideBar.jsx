import AlbumCover from "../AlbumCover/AlbumCover";
import AboutArtist from "../AboutArtist/AboutArtist";

const RightSideBar = () => {
  return (
    <div className="right-side-bar-wrapper flex-col-start">
      <div className="sub-wrapper">
        <AlbumCover data={"hello"} />
        <AboutArtist data={"hello"} />
        <AboutArtist data={"hello"} />
        <AboutArtist data={"hello"} />
      </div>
    </div>
  );
};

export default RightSideBar;
