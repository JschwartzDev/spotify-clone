import LeftSideBar from "./Components/LeftSideBar/LeftSideBar";
import MainContent from "./Components/MainContent/MainContent";
import RightSideBar from "./Components/RightSideBar/RightSideBar";
import Footer from "./Components/Footer/Footer";
import LogIn from "./Components/LogIn/LogIn";

import { useState, useEffect } from "react";

function App() {
  const apiSearchUrl = "https://api.spotify.com/v1/search";
  const apiMeUrl = "https://api.spotify.com/v1/me";
  const userTopTracksUrl =
    "https://api.spotify.com/v1/me/top/tracks?time_range=long_term&limit=5";
  const userPlaylistsUrl = "https://api.spotify.com/v1/me/playlists?limit=8";
  const getTrackByIdUrl = "https://api.spotify.com/v1/tracks/";
  const getFeaturedPlaylistsUrl =
    "https://api.spotify.com/v1/browse/featured-playlists";
  const genreSeedsUrl =
    "https://api.spotify.com/v1/recommendations/available-genre-seeds";
  const getRecommendedByGenreSeedsUrl =
    "https://api.spotify.com/v1/recommendations?seed_genres=";

  const [token, setToken] = useState("");
  const [isSearching, setIsSearching] = useState(false);
  const [selectedPlaylist, setSelectedPlaylist] = useState("");
  const [searchKey, setSearchKey] = useState("");
  const [searchData, setSearchData] = useState("");
  const [artistTopTracks, setArtistTopTracks] = useState("");

  const [userData, setUserData] = useState("");
  const [userTopTracks, setUserTopTracks] = useState("");
  const [userPlaylists, setUserPlaylists] = useState("");

  const [featuredPlaylists, setFeaturedPlaylists] = useState("");
  const [genreSeeds, setGenreSeeds] = useState("");
  const [selectedGenre, setSelectedGenre] = useState("");
  const [recommended, setRecommended] = useState("");

  const [isPaused, setIsPaused] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const [currentTrack, setCurrentTrack] = useState("");

  const handleLogin = (token) => {
    console.log(token);
    setToken(token);
  };

  const handleLogOut = () => {
    window.localStorage.setItem("token", "");
    setToken("");
  };

  const handleSetSearching = () => {
    setSelectedPlaylist("");
    setIsSearching((current) => !current);
  };

  const handleSetSearchKey = (event) => {
    if (event.code === "Enter") {
      search();
    } else {
      setSearchKey(event.target.value);
    }
  };

  const handleSetSelectedPlaylist = (playlistId) => {
    const playlist = userPlaylists.filter((pl) => pl.id === playlistId)[0];
    console.log("playlist", playlist);
    setSelectedPlaylist(playlist);
  };

  const handleSelectTrack = async (trackId) => {
    const reqParams = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
    };
    console.log(trackId);
    const track = fetch(getTrackByIdUrl + trackId, reqParams)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setCurrentTrack(data);
      });
  };

  const handleSetSelectedGenre = (genre) => {
    console.log(genre);
    setSelectedGenre(genre);
  };

  const handleSetIsPaused = () => {
    setIsPaused((state) => (state ? !state : state));
  };

  const handleSetIsActive = () => {
    setIsActive((state) => (state ? !state : state));
  };

  useEffect(() => {
    const reqParams = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
    };

    fetch(getRecommendedByGenreSeedsUrl + selectedGenre, reqParams)
      .then((res) => res.json())
      .then((data) => {
        console.log("recommended", data.tracks);
        setRecommended(data.tracks);
      });
  }, [selectedGenre, token]);

  useEffect(() => {
    const reqParams = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
    };
    fetch(apiMeUrl, reqParams)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setUserData(data);
      });

    fetch(userTopTracksUrl, reqParams)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setUserTopTracks(data);
      });

    fetch(userPlaylistsUrl, reqParams)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setUserPlaylists(data.items);
      });

    fetch(getFeaturedPlaylistsUrl, reqParams)
      .then((res) => res.json())
      .then((data) => {
        console.log("featured playlists", data.playlists.items);
        setFeaturedPlaylists(data.playlists.items);
      });

    fetch(genreSeedsUrl, reqParams)
      .then((res) => res.json())
      .then((data) => {
        console.log("genre seeds", data.genres);
        setGenreSeeds(data.genres);
      });
  }, [apiMeUrl, token]);

  async function search() {
    console.log("search for " + searchKey);

    const searchParameters = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
    };

    const artistID = await fetch(
      "https://api.spotify.com/v1/search?q=" + searchKey + "&type=artist",
      searchParameters
    )
      .then((res) => res.json())
      .then((data) => {
        return data.artists.items[0].id;
      });

    const albums = await fetch(
      "https://api.spotify.com/v1/artists/" +
        artistID +
        "/albums" +
        "?include_groups=album&market=US&limit=50",
      searchParameters
    )
      .then((res) => res.json())
      .then((data) => {
        console.log("search data", data.items);
        setSearchData(data.items);
      });

    const artistTopTracks = await fetch(
      "https://api.spotify.com/v1/artists/" + artistID + "/top-tracks",
      searchParameters
    )
      .then((res) => res.json())
      .then((data) => {
        console.log("artist top tracks", data.tracks);
        setArtistTopTracks(data.tracks);
      });
  }

  if (!token) {
    return <LogIn handleLogin={handleLogin} />;
  }

  if (token) {
    return (
      <>
        <div className="app-wrapper flex-row-start">
          <LeftSideBar
            handleLogOut={handleLogOut}
            handleSetSearching={handleSetSearching}
            userPlaylists={userPlaylists}
            handleSetSelectedPlaylist={handleSetSelectedPlaylist}
          />
          <MainContent
            isSearching={isSearching}
            handleSetSearchKey={handleSetSearchKey}
            userPlaylists={userPlaylists}
            handleSetSelectedPlaylist={handleSetSelectedPlaylist}
            selectedPlaylist={selectedPlaylist}
            handleSelectTrack={handleSelectTrack}
            featuredPlaylists={featuredPlaylists}
            handleSetSelectedGenre={handleSetSelectedGenre}
            selectedGenre={selectedGenre}
            genreSeeds={genreSeeds}
            recommended={recommended}
            artistTopTracks={artistTopTracks}
            searchData={searchData}
          />
          <RightSideBar />
          <Footer token={token} />
        </div>
      </>
    );
  }
}

export default App;
