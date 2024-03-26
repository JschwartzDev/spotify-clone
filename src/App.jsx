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

  const [token, setToken] = useState("");
  const [isSearching, setIsSearching] = useState(false);
  const [searchKey, setSearchKey] = useState("");
  const [searchData, setSearchData] = useState("");

  const [userData, setUserData] = useState("");
  const [userTopTracks, setUserTopTracks] = useState("");
  const [userPlaylists, setUserPlaylists] = useState("");
  const handleLogin = (token) => {
    setToken(token);
  };

  const handleLogOut = () => {
    window.localStorage.setItem("token", "");
    setToken("");
  };

  const handleSetSearching = () => {
    setIsSearching((current) => !current);
  };

  const handleSetSearchKey = (event) => {
    if (event.code === "Enter") {
      search();
    } else {
      setSearchKey(event.target.value);
    }
  };

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
        console.log(data);
        setSearchData(data);
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
          />
          <MainContent
            isSearching={isSearching}
            handleSetSearchKey={handleSetSearchKey}
            userPlaylists={userPlaylists}
          />
          <RightSideBar />
          <Footer />
        </div>
      </>
    );
  }
}

export default App;
