import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addCardsToStudy, createDeckAction } from "../actions/usersActions";
import { Deck } from "../classes/deckClass";

const HomeSideMenu = ({ area, selectFn }) => {
  const selectAndSend = (page) => {
    selectFn(page);
  };

  const { user } = useSelector((state) => state.usersReducer);

  const dispatch = useDispatch();

  

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
        // onClick={() =>
        //   dispatch(createDeckAction(user._id, emptyDeck))
        // }
      >
        Action Button
      </h1>
      <h1
        onClick={() =>
          dispatch(addCardsToStudy(user._id, {subject: "guitar"}))
        }
      >
        Erase decks
      </h1>
    </div>
  );
};

export default HomeSideMenu;
