const TracksTable = ({ trackList, width, handleSelectTrack }) => {
  const convertTrackLengthFromMS = (ms) => {
    return (
      String(ms / 1000 / 60).substring(0, 1) +
      "m" +
      String(ms / 1000 / 60).substring(1, 4) +
      "s"
    );
  };

  const getArtists = (artistArray) => {
    return artistArray.reduce((str, el) => str + ` ${el.name}`, "");
  };

  const shortenName = (trackName) => {
    if (trackName.length > 20) {
      return trackName.substring(0, 20) + "...";
    } else {
      return trackName;
    }
  };

  return (
    <div className="tracks-table-wrapper flex-col-center">
      <div
        className="tracks-table w-100"
        style={{ width: width ? width + "%" : "100%" }}
      >
        {!trackList ? (
          ""
        ) : (
          <table>
            <tr className="table-headers">
              <th style={{ width: "5%" }}>#</th>
              <th className="w-40">Name</th>
              <th className="w-10">Album</th>
              <th className="w-25">Artists</th>
              <th className="w-5">faClock</th>
              <th className="w-20">Release</th>
            </tr>
            {trackList.map((track) => {
              return (
                <tr
                  key={track.id}
                  className="h-box"
                  onClick={() => handleSelectTrack(track.id)}
                >
                  <td>{trackList.indexOf(track) + 1}</td>
                  <td>{shortenName(track.name)}</td>
                  <td>
                    <img src={track.album.images[2].url} alt="" />
                  </td>
                  <td>{getArtists(track.artists)}</td>
                  <td>{convertTrackLengthFromMS(track.duration_ms)}</td>
                  <td>{track.album.release_date}</td>
                </tr>
              );
            })}
          </table>
        )}
      </div>
    </div>
  );
};

export default TracksTable;
