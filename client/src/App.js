import { Provider } from "react-redux";
import store from "./store";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useNavigate,
} from "react-router-dom";

import "./reset.css";
import "./css/activityBar.css";

import Home from "./views/Home";
import NavigateTest from "./views/NavigateTest";
import DeckList from "./components/leitnerComponents/DeckList";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Router>
          <Routes>
            <Route
              exact
              path="/character"
              // render={() => (
              //   <div>
              //     <Home />
              //   </div>
              // )}
              element={<Home />}
            />

            <Route
              path="/leitnerbox"
              element={
                <div>
                  
                  Hello
                  <Link to={"/character"}>press here</Link>
                  <button>Press me</button>

                  <NavigateTest />
                </div>
              }
            />


              <Route path="/selectdecks" element={<DeckList />} />

          </Routes>
        </Router>
      </div>
    </Provider>
  );
}

export default App;
