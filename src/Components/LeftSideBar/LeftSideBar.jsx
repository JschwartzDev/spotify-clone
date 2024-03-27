import LeftSideBarWidget from "../LeftSideBarWidget/LeftSideBarWidget";
import LeftSideBarScroll from "../LeftSideBarScroll/LeftSideBarScroll";
const LeftSideBar = ({
  handleLogOut,
  handleSetSearching,
  userPlaylists,
  handleSetSelectedPlaylist,
}) => {
  return (
    <div className="side-bar-wrapper flex-col-start r-b-top">
      <LeftSideBarWidget
        handleLogOut={handleLogOut}
        handleSetSearching={handleSetSearching}
      />
      <LeftSideBarScroll
        userPlaylists={userPlaylists}
        handleSetSelectedPlaylist={handleSetSelectedPlaylist}
      />
    </div>
  );
};

export default LeftSideBar;
