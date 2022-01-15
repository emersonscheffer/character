import React from "react";
import { useDispatch } from "react-redux";
import { createDeckAction } from "../actions/usersActions";
import { Deck } from "../classes/deckClass";

const HomeSideMenu = ({ area, selectFn }) => {
  const selectAndSend = (page) => {
    selectFn(page);
  };

  const dispatch = useDispatch();

  const emptyDeck = new Deck("math")

  return (
    <div
      style={{
        backgroundColor: "lightgray",
        width: "100%",
        height: "100vh",
        gridArea: area,
        display: "grid",
        gridTemplateRows: "50px",
      }}
    >
      <h1 onClick={() => selectAndSend("home")}>Home</h1>
      <h1 onClick={() => selectAndSend("leitner_box")}>Leitner Box</h1>
      <h1
        onClick={() =>
          dispatch(createDeckAction("61e287b5f2dd6553979bdfcd", emptyDeck))
        }
      >
        Action Button
      </h1>
    </div>
  );
};

export default HomeSideMenu;
