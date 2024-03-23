import MainContentStickyHeader from "../MainContentStickyHeader/MainContentStickyHeader";
import MainContentScroller from "../MainContentScroller/MainContentScroller";

const MainContent = () => {
  return (
    <div className="main-content-wrapper flex-col-start mt-5 r-b">
      <MainContentStickyHeader />
      <MainContentScroller />
    </div>
  );
};

export default MainContent;
