import RecentSearchCard from "../RecentSearchCard/RecentSearchCard";
import TracksTable from "../TracksTable/TracksTable";

const MainContentSearch = ({
  artistTopTracks,
  searchData,
  handleSelectTrack,
}) => {
  return (
    <div className="main-content-search-wrapper w-100">
      {searchData && (
        <div className="search-results-wrapper w-100">
          <h3 className="ml-5 mb-10 w-100">Top Tracks</h3>
          <TracksTable
            width={100}
            trackList={artistTopTracks}
            handleSelectTrack={handleSelectTrack}
          />
          <div className="flex-row-around w-100">
            <h3 className="ml-5 w-100">Artist Albums</h3>
            {searchData.map((album) => {
              return <RecentSearchCard album={album} />;
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default MainContentSearch;
