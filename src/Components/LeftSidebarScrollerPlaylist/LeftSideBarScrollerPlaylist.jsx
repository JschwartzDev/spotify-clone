const LeftSideBarScrollerPlaylist = () => {
  return (
    <div className="playlist flex-row-start h-box">
      <img
        src="https://imgs.search.brave.com/oDCvLHdj04HFh_orzLnUhCoLjSsCz7Z17cwu3tFsIRk/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9yZXNv/dXJjZXMudGlkYWwu/Y29tL2ltYWdlcy8y/MjhiYjljNS8wYjZk/LzQwMTgvYjBjZC9j/NzkyM2JkM2JjY2Iv/NjQweDY0MC5qcGc"
        alt=""
        className="playlist-image r-b mr-10"
      />
      <div className="playlist-details">
        <h3>playlist name</h3>
        <span>details</span>
      </div>
    </div>
  );
};

export default LeftSideBarScrollerPlaylist;
