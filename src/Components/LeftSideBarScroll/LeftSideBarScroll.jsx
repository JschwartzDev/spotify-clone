import LeftSideBarScrollHeader from "../LeftSideBarScrollHeader/LeftSideBarScrollHeader";
import LeftSideBarScroller from "../LeftSideBarScroller/LeftSideBarScroller";

const LeftSideBarScroll = ({ userPlaylists }) => {
  return (
    <div className="side-bar-scroll-wrapper r-b-top flex-col-start ml-5 mr-5 mb-5 w-100">
      <LeftSideBarScrollHeader />
      <LeftSideBarScroller userPlaylists={userPlaylists} />
    </div>
  );
};

export default LeftSideBarScroll;
