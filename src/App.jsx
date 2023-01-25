import "./App.css";
import Footer from "./Footer";
import MainContent from "./MainContent";
import Photo from "./Photo";

function App() {
  return (
    <div className="App">
      <div className="outer-container">
        <div className="container">
          <Photo />
          <MainContent />
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
