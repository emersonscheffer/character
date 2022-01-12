import { Provider } from "react-redux";
import store from "./store";

// import "./App.css";
import "./reset.css";
import "./css/activityBar.css";
import ClockInfo from "./views/ClockInfo";

// import ActivityBar from "./components/ActivityBar";
// import PlayerName from "./components/PlayerName";
// import BodyTemp from "./views/BodyTemp";
//import LeitnerBox from "./views/LeitnerBox";
// import LeitnerBoxGrid from "./views/LeitnerBoxGrid";
import Home from "./views/Home";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        {/* <div>
        <ActivityBar />
      </div>

      <PlayerName />
      <BodyTemp /> */}

        {/* <LeitnerBox /> */}
        {/* <LeitnerBoxGrid /> */}

        <Home />

        {/* <ClockInfo /> */}

      </div>
    </Provider>
  );
}

export default App;
