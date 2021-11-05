// import "./App.css";
import "./reset.css";
import "./css/activityBar.css"


import ActivityBar from "./components/ActivityBar";
import PlayerName from "./components/PlayerName";
import BodyTemp from "./views/BodyTemp";
import LeitnerBox from "./views/LeitnerBox";

function App() {
  return (
    <div className="App">
      <div>
        <ActivityBar />
      </div>

      <PlayerName />
      <BodyTemp />

      <LeitnerBox />
    </div>
  );
}

export default App;
