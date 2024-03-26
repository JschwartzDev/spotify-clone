import RecentSearchCard from "../RecentSearchCard/RecentSearchCard";
import GenresCard from "../GenresCard/GenresCard";

const MainContentSearch = () => {
  return (
    <div className="main-content-search-wrapper w-100">
      <h3 className="m-10 pl-5">Recent Searches</h3>
      <div className="recents-wrapper p-10">
        <RecentSearchCard />
        <RecentSearchCard />
        <RecentSearchCard />
        <RecentSearchCard />
      </div>
      <h3 className="m-10 pl-5">Browse All Genres</h3>
      <div className="genres-wrapper p-10 flex-row-between">
        <GenresCard />
        <GenresCard />
        <GenresCard />
        <GenresCard />
        <GenresCard />
        <GenresCard />
        <GenresCard />
        <GenresCard />
        <GenresCard />
        <GenresCard />
        <GenresCard />
        <GenresCard />
      </div>
    </div>
  );
};

export default MainContentSearch;
