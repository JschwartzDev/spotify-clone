import SideBar from "./Components/SideBar/SideBar";
import MainContent from "./Components/MainContent/MainContent";
import RightSideBar from "./Components/RightSideBar/RightSideBar";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <>
      <div className="app-wrapper flex-row-start">
        <SideBar />
        <MainContent />
        <RightSideBar />
        <Footer />
      </div>
    </>
  );
}

export default App;
