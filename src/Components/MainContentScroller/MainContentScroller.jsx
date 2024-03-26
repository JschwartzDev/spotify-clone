import MainContentScrollerPlaylist from "../MainContentScrollerPlaylist/MainContentScrollerPlaylist";
import MainContentMix from "../MainContentMix/MainContentMix";

const MainContentScroller = ({ userPlaylists }) => {
  return (
    <div className="main-content-scroller-wrapper flex-row-start w-100">
      <div className="playlists-wrapper flex-row-center">
        {userPlaylists
          ? userPlaylists.map((playlist) => {
              return (
                <MainContentScrollerPlaylist
                  key={playlist.id}
                  playlistName={playlist.name}
                  playlistImage={playlist.images[2].url}
                />
              );
            })
          : ""}
      </div>
      <div className="mt-10 mb-10 w-100 flex-row-between">
        <h2 className="ml-10 ">Your Top Mixes</h2>

        <h3 className="mr-10">Show all</h3>
      </div>
      <div className=" w-100 mixes-wrapper flex-row-around">
        <MainContentMix />
        <MainContentMix />
        <MainContentMix />
        <MainContentMix />
      </div>
      <div className="mt-10 mb-10 w-100 flex-row-between">
        <h2 className="ml-10 ">Made For You</h2>

        <h3 className="mr-10">Show all</h3>
      </div>
      <div className="w-100 flex-row-around">
        <MainContentMix />
        <MainContentMix />
        <MainContentMix />
        <MainContentMix />
      </div>
    </div>
  );
};

export default MainContentScroller;
