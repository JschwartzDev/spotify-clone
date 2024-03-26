import LeftSideBarWidget from "../LeftSideBarWidget/LeftSideBarWidget";
import LeftSideBarScroll from "../LeftSideBarScroll/LeftSideBarScroll";
const LeftSideBar = ({ handleLogOut, handleSetSearching, userPlaylists }) => {
  return (
    <div className="side-bar-wrapper flex-col-start r-b-top">
      <LeftSideBarWidget
        handleLogOut={handleLogOut}
        handleSetSearching={handleSetSearching}
      />
      <LeftSideBarScroll userPlaylists={userPlaylists} />
    </div>
  );
};

export default LeftSideBar;
