import { useEffect } from "react";

const LogIn = ({ handleLogin }) => {
  const APP_ID = "74709eb159e748e6a63afc85c78b0675";
  const REDIRECT_URI = "http://localhost:5173/";
  const AUTH_ENDPOIINT = "https://accounts.spotify.com/authorize";
  const RESPONSE_TYPE = "token";

  useEffect(() => {
    const hash = window.location.hash;
    let token = window.localStorage.getItem("token");

    if (!token && hash) {
      //console.log(hash);
      //console.log(hash.substring(14, hash.length - 34));
      token = hash.substring(14, hash.length - 34);

      window.location.hash = "";
      window.localStorage.setItem("token", token);
    }

    handleLogin(token);
  }, []);

  return (
    <div className="login-wrapper w-100 flex-col-center">
      <button className="button submit flex-col-center">
        <a
          href={`${AUTH_ENDPOIINT}?client_id=${APP_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}&scope=user-read-private playlist-read-private playlist-read-collaborative user-top-read user-read-recently-played`}
          className="w-100 h-100 flex-col-center"
        >
          Sign In
        </a>
      </button>
    </div>
  );
};

export default LogIn;
