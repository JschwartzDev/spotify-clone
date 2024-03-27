import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShuffle } from "@fortawesome/free-solid-svg-icons";
import { faBackwardStep } from "@fortawesome/free-solid-svg-icons";
import { faForwardStep } from "@fortawesome/free-solid-svg-icons";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { faPause } from "@fortawesome/free-solid-svg-icons";
import { faRepeat } from "@fortawesome/free-solid-svg-icons";

import { useState, useEffect } from "react";

const FooterSongControls = ({ token }) => {
  const track = {
    name: "",
    album: {
      images: [{ url: "" }],
    },
    artists: [{ name: "" }],
  };
  const [is_paused, setPaused] = useState(true);
  const [is_active, setActive] = useState(false);
  const [player, setPlayer] = useState(undefined);
  const [current_track, setTrack] = useState(track);
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://sdk.scdn.co/spotify-player.js";
    script.async = true;

    document.body.appendChild(script);

    window.onSpotifyWebPlaybackSDKReady = () => {
      console.log("token kek", token);
      const player = new window.Spotify.Player({
        name: "Web Playback SDK",
        getOAuthToken: (cb) => {
          cb(token);
        },
        volume: 0.5,
      });

      setPlayer(player);

      player.addListener("player_state_changed", (state) => {
        if (!state) {
          return;
        }

        setTrack(track_window.current_track);
        setPaused(paused);

        player.getCurrentState().then((state) => {
          !state ? setActive(false) : setActive(true);
        });
      });

      player.connect();
    };
  }, []);
  return (
    <div className="song-controls-wrapper flex-col-center p-10 mb-10">
      <div className="control-row flex-row-center w-100">
        <FontAwesomeIcon icon={faShuffle} className="icon ml-10 mr-10" />
        <FontAwesomeIcon icon={faBackwardStep} className="icon ml-10 mr-10" />
        {is_paused ? (
          <FontAwesomeIcon
            icon={faPlay}
            className="icon ml-10 mr-10"
            onClick={() => setPaused((cur) => !cur)}
          />
        ) : (
          <FontAwesomeIcon
            icon={faPause}
            className="icon ml-10 mr-10"
            onClick={() => setPaused((cur) => !cur)}
          />
        )}
        <FontAwesomeIcon icon={faForwardStep} className="icon ml-10 mr-10" />
        <FontAwesomeIcon icon={faRepeat} className="icon ml-10 mr-10" />
      </div>
      <div className="timer-row w-50 mt-10">
        <div className="timer-wrapper w-100">
          <div className="timer w-50"></div>
        </div>
      </div>
    </div>
  );
};

export default FooterSongControls;
