import MainContentStickyHeader from "../MainContentStickyHeader/MainContentStickyHeader";
import MainContentScroller from "../MainContentScroller/MainContentScroller";
import MainContentSearch from "../MainContentSearch/MainContentSearch";

const MainContent = ({ isSearching }) => {
  return (
    <div className="main-content-wrapper flex-col-start mt-5 r-b-top">
      <MainContentStickyHeader isSearching={isSearching} />
      {isSearching ? <MainContentSearch /> : <MainContentScroller />}
    </div>
  );
};

export default MainContent;
