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
import LeitnerBox from "./views/LeitnerBox";
import HomeSideMenu from "./views/HomeSideMenu";

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
                <div
                  style={{
                    height: "100%",
                    backgroundColor: "gray",
                    width: "100%",
                    display: "grid",
                    gridTemplate: `
                      "side_menu content"
                      / 50px 1fr
                  `,
                  }}
                >
                  <HomeSideMenu />
                  <LeitnerBox />
                </div>
              }
            />

            {/* <Route
              path="/decklist"
              element={
                <div
                  style={{
                    height: "100%",
                    backgroundColor: "gray",
                    width: "100%",
                    display: "grid",
                    gridTemplate: `
                      "side_menu content"
                      / 50px 1fr
                  `,
                  }}
                >
                  
                  <LeitnerBox />
                </div>
              }
            /> */}

            <Route path="/selectdecks" element={

              <div style={{
                height: "100%",
                backgroundColor: "gray",
                width: "100%",
                display: "grid",
                gridTemplate: `
                  "side_menu content"
                  / 50px 1fr
              `,
              }} >

                <HomeSideMenu />
                <DeckList />
              </div>
            
            
            } />
          </Routes>
        </Router>
      </div>
    </Provider>
  );
}

export default App;
