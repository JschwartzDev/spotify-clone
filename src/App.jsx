import LeftSideBar from "./Components/LeftSideBar/LeftSideBar";
import MainContent from "./Components/MainContent/MainContent";
import RightSideBar from "./Components/RightSideBar/RightSideBar";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <>
      <div className="app-wrapper flex-row-start">
        <LeftSideBar />
        <MainContent />
        <RightSideBar />
        <Footer />
      </div>
    </>
  );
}

export default App;
