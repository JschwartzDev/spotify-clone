import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";

const MainContentScrollerPlaylist = () => {
  return (
    <div className="playlist-wrapper flex-row-between m-10 r-b h-box-light">
      <div className="flex-row-start">
        <img
          src="https://imgs.search.brave.com/kB72c56g0dI8znBc3dmfkz5Ogwh7cLzSm-eKnU7Yk9E/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pMC53/cC5jb20vc3RlcGhl/bmtwZWVwbGVzLmNv/bS93cC1jb250ZW50/L3VwbG9hZHMvMjAx/Ni8wNy9lYWdsZXMt/Z3JlYXRlc3QtaGl0/cy1jb3Zlci0yLmpw/Zz9yZXNpemU9NTAw/LDQ5OCZzc2w9MQ"
          alt=""
          className="playlist-image r-b"
        />
        <div className="artist-name m-10 pt-5">Name</div>
      </div>

      <div className="play-button m-10">
        <FontAwesomeIcon icon={faPlay} className="icon" />
      </div>
    </div>
  );
};

export default MainContentScrollerPlaylist;
