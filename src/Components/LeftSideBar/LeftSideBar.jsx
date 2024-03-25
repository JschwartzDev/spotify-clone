import LeftSideBarWidget from "../LeftSideBarWidget/LeftSideBarWidget";
import LeftSideBarScroll from "../LeftSideBarScroll/LeftSideBarScroll";
const LeftSideBar = ({ handleLogOut, handleSetSearching }) => {
  return (
    <div className="side-bar-wrapper flex-col-start r-b-top">
      <LeftSideBarWidget
        handleLogOut={handleLogOut}
        handleSetSearching={handleSetSearching}
      />
      <LeftSideBarScroll />
    </div>
  );
};

export default LeftSideBar;
