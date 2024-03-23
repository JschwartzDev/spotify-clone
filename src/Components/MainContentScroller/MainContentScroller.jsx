import MainContentScrollerPlaylist from "../MainContentScrollerPlaylist/MainContentScrollerPlaylist";

const MainContentScroller = () => {
  return (
    <div className="main-content-scroller-wrapper flex-row-start">
      <div className="playlists-wrapper flex-row-center">
        <MainContentScrollerPlaylist />
        <MainContentScrollerPlaylist />
        <MainContentScrollerPlaylist />
        <MainContentScrollerPlaylist />
        <MainContentScrollerPlaylist />
        <MainContentScrollerPlaylist />
        <MainContentScrollerPlaylist />
        <MainContentScrollerPlaylist />
      </div>
    </div>
  );
};

export default MainContentScroller;
