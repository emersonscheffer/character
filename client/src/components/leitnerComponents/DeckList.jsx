import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDecks } from "../../actions/decksActions";
import { createDeckAction, userStudyStarted } from "../../actions/usersActions";
import { Deck } from "../../classes/deckClass";
import DeckListItem from "./DeckListItem";

import { Link } from "react-router-dom";

import "../../css/style.css";

const DeckList = ({ area }) => {
  const dispatch = useDispatch();

  const { decks } = useSelector((state) => state.decksReducer);
  const { user } = useSelector((state) => state.usersReducer);

  const renderListItems = () => {
    let listItems = [];

    for (let i = 0; i < decks.length; i++) {
      listItems.push(
        <DeckListItem
          key={decks[i].subject}
          subject={decks[i].subject}
          quantity={decks[i].store.length}
          added={false}
          addFn={() =>
            dispatch(createDeckAction(user._id, new Deck(decks[i].subject)))
          }
        />
      );
    }

    return listItems;
  };

  useEffect(() => {
    dispatch(getDecks());
  }, [dispatch]);

  return (
    <div
      style={{
        gridArea: area,
        alignSelf: "start",
        justifySelf: "center",
        marginTop: "90px",
      }}
    >
      {renderListItems()}

      <Link
        className="deck-study-btn"
        to={"/leitnerbox"}
        onClick={() => dispatch(userStudyStarted(user._id))}
      >
        <h1>Study</h1>
      </Link>
    </div>
  );
};

export default DeckList;
