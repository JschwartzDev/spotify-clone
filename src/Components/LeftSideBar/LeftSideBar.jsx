import LeftSideBarWidget from "../LeftSideBarWidget/LeftSideBarWidget";
import LeftSideBarScroll from "../LeftSideBarScroll/LeftSideBarScroll";
const LeftSideBar = () => {
  return (
    <div className="side-bar-wrapper flex-col-start r-b">
      <LeftSideBarWidget />
      <LeftSideBarScroll />
    </div>
  );
};

export default LeftSideBar;
