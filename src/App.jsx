import LeftSideBar from "./Components/LeftSideBar/LeftSideBar";
import MainContent from "./Components/MainContent/MainContent";
import RightSideBar from "./Components/RightSideBar/RightSideBar";
import Footer from "./Components/Footer/Footer";
import LogIn from "./Components/LogIn/LogIn";

import { useState, useEffect } from "react";

function App() {
  const [token, setToken] = useState("");
  const [data, setData] = useState("");
  const [isSearching, setIsSearching] = useState(false);
  const [currentSearch, setCurrentSearch] = useState("");

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
          />
          <MainContent isSearching={isSearching} />
          <RightSideBar />
          <Footer />
        </div>
      </>
    );
  }
}

export default App;
