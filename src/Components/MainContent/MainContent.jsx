import MainContentStickyHeader from "../MainContentStickyHeader/MainContentStickyHeader";
import MainContentScroller from "../MainContentScroller/MainContentScroller";
import MainContentSearch from "../MainContentSearch/MainContentSearch";
import MainContentSelectedPlaylist from "../MainContentSelectedPlaylist/MainContentSelectedPlaylist";

const MainContent = ({
  isSearching,
  handleSetSearchKey,
  userPlaylists,
  handleSetSelectedPlaylist,
  selectedPlaylist,
  handleSelectTrack,
  featuredPlaylists,
  selectedGenre,
  handleSetSelectedGenre,
  genreSeeds,
  recommended,
  artistTopTracks,
  searchData,
}) => {
  return (
    <div className="main-content-wrapper flex-col-start mt-5 r-b-top">
      <MainContentStickyHeader
        isSearching={isSearching}
        handleSetSearchKey={handleSetSearchKey}
        selectedPlaylist={selectedPlaylist}
      />
      {isSearching ? (
        <MainContentSearch
          artistTopTracks={artistTopTracks}
          searchData={searchData}
          handleSelectTrack={handleSelectTrack}
        />
      ) : selectedPlaylist ? (
        <MainContentSelectedPlaylist
          selectedPlaylist={selectedPlaylist}
          handleSelectTrack={handleSelectTrack}
        />
      ) : (
        <MainContentScroller
          userPlaylists={userPlaylists}
          handleSetSelectedPlaylist={handleSetSelectedPlaylist}
          featuredPlaylists={featuredPlaylists}
          selectedGenre={selectedGenre}
          handleSetSelectedGenre={handleSetSelectedGenre}
          genreSeeds={genreSeeds}
          recommended={recommended}
        />
      )}
    </div>
  );
};

export default MainContent;
