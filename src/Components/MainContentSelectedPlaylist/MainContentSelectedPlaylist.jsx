import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { faShuffle } from "@fortawesome/free-solid-svg-icons";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { faClock } from "@fortawesome/free-solid-svg-icons";

import { useState, useEffect } from "react";

const MainContentSelectedPlaylist = ({
  selectedPlaylist,
  handleSelectTrack,
}) => {
  const playlistTracksUrl =
    "https://api.spotify.com/v1/playlists/" + selectedPlaylist.id + "/tracks";

  const [selectedPlaylistTracks, setSelectedPlaylistTracks] = useState("");

  const token = window.localStorage.getItem("token");

  useEffect(() => {
    const reqParams = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
    };

    fetch(playlistTracksUrl, reqParams)
      .then((res) => res.json())
      .then((data) => {
        console.log("playlist tracks", data.items);
        setSelectedPlaylistTracks(data.items);
      });
  }, [playlistTracksUrl]);

  const convertTrackLengthFromMS = (ms) => {
    return (
      String(ms / 1000 / 60).substring(0, 1) +
      "m" +
      String(ms / 1000 / 60).substring(1, 4) +
      "s"
    );
  };

  const convertDateTrackAdded = (date) => {
    return String(date.substring(0, date.indexOf(":") - 3));
  };

  return (
    <div className="selected-playlist-wrapper flex-col-start w-100">
      <div className="tracks-table-button-group flex-row-between p-10 w-100">
        <div className="left-icons">
          <FontAwesomeIcon icon={faPlay} className="icon ml-5 mr-5" />
          <FontAwesomeIcon icon={faShuffle} className="icon ml-5 mr-5" />
        </div>
        <div className="right-icons">
          <FontAwesomeIcon icon={faSearch} className="icon ml-5 mr-5" />
        </div>
      </div>
      <div className="flow-col-start p-10 w-100">
        <table className="tracks-table w-100">
          <thead>
            <tr>
              <th>#</th>
              <th>Title</th>
              <th>Artist</th>
              <th>Date Added</th>
              <th>
                <FontAwesomeIcon icon={faClock} className="icon ml-5 mr-5" />
              </th>
            </tr>
          </thead>
          <tbody>
            {!selectedPlaylistTracks
              ? ""
              : selectedPlaylistTracks.map((item) => {
                  return (
                    <tr key={item.track.id} className="table-track h-box">
                      <td>{selectedPlaylistTracks.indexOf(item) + 1}</td>
                      <td onClick={() => handleSelectTrack(item.track.id)}>
                        {item.track.name}
                      </td>
                      <td>{item.track.album.artists[0].name}</td>
                      <td>{convertDateTrackAdded(item.added_at)}</td>
                      <td>
                        {convertTrackLengthFromMS(item.track.duration_ms)}
                      </td>
                    </tr>
                  );
                })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MainContentSelectedPlaylist;
