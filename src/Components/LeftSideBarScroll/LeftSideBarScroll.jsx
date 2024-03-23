import LeftSideBarScrollHeader from "../LeftSideBarScrollHeader/LeftSideBarScrollHeader";
import LeftSideBarScroller from "../LeftSideBarScroller/LeftSideBarScroller";

const LeftSideBarScroll = () => {
  return (
    <div className="side-bar-scroll-wrapper flex-col-start ml-5 mr-5 mb-5">
      <LeftSideBarScrollHeader />
      <LeftSideBarScroller />
    </div>
  );
};

export default LeftSideBarScroll;
