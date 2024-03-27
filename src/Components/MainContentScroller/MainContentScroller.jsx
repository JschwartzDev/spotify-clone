import MainContentScrollerPlaylist from "../MainContentScrollerPlaylist/MainContentScrollerPlaylist";
import MainContentMix from "../MainContentMix/MainContentMix";
import RecommendedCard from "../RecommendedCard/RecommendedCard";
import { useState } from "react";

const MainContentScroller = ({
  userPlaylists,
  handleSetSelectedPlaylist,
  featuredPlaylists,
  selectedGenre,
  handleSetSelectedGenre,
  genreSeeds,
  recommended,
}) => {
  const [isSelecting, setIsSelecting] = useState(false);
  return (
    <div className="main-content-scroller-wrapper flex-row-start w-100">
      <div className="playlists-wrapper flex-row-center">
        {userPlaylists
          ? userPlaylists.map((playlist) => {
              return (
                <MainContentScrollerPlaylist
                  key={playlist.id}
                  playlistId={playlist.id}
                  playlistName={playlist.name}
                  playlistImage={playlist.images[2].url}
                  handleSetSelectedPlaylist={handleSetSelectedPlaylist}
                />
              );
            })
          : ""}
      </div>
      <div className="mt-10 mb-10 w-100 flex-row-between">
        <h2 className="ml-10 ">Featured Playlists</h2>
      </div>
      <div className=" w-100 mixes-wrapper flex-row-around">
        {!featuredPlaylists
          ? ""
          : featuredPlaylists.map((playlist) => {
              return (
                <MainContentMix
                  name={playlist.name}
                  image={playlist.images[0].url}
                  id={playlist.id}
                  key={playlist.id}
                />
              );
            })}
      </div>
      <div className="mt-10 mb-10 w-100 flex-row-between">
        <h2 className="ml-10 pb-10">Find Playlists</h2>
        <div className="dropdown-wrapper flex-col-center">
          <button
            className="selected-genre-wrapper button flex-col-center p-5 mr-10 r-b w-100 mb-5"
            onClick={() => setIsSelecting((cur) => !cur)}
          >
            {selectedGenre ? selectedGenre : "Select A Genre"}
          </button>
        </div>
      </div>
      {!isSelecting ? (
        ""
      ) : (
        <div className="flex-row-end options-wrapper mr-10 r-b-bottom w-100">
          <div className="options r-b-bottom p-5">
            {!genreSeeds
              ? ""
              : genreSeeds.map((genre) => {
                  return (
                    <button
                      className="option w-100 p-5"
                      onClick={() => {
                        setIsSelecting(false);
                        handleSetSelectedGenre(genre);
                      }}
                      key={genre}
                    >
                      {genre}
                    </button>
                  );
                })}
          </div>
        </div>
      )}
      <div className="w-100 flex-row-around">
        {!recommended ? (
          <div className="placeholder-wrapper flex-col-center w-100">
            Pick A Genre To get Started
          </div>
        ) : (
          recommended.map((track) => {
            return (
              <RecommendedCard
                image={track.album.images[1].url}
                name={track.name}
                id={track.id}
                key={track.id}
              />
            );
          })
        )}
      </div>
    </div>
  );
};

export default MainContentScroller;
