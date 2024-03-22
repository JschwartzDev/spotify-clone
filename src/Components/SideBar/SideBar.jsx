import SideBarWidget from "../SideBarWidget/SideBarWidget";
import SideBarScroll from "../SideBarScroll/SideBarScroll";

const SideBar = () => {
  return (
    <div className="side-bar-wrapper flex-col-start r-b">
      <SideBarWidget />
      <SideBarScroll />
    </div>
  );
};

export default SideBar;
