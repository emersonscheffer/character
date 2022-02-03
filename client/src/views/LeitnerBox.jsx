import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { cardBtnGoodActions, updateCurrentDeckActions, updateSelectDeckActions } from "../actions/usersActions";
import CanvasCard from "../components/leitnerComponents/CanvasCard";
import DecksDisplay from "../components/leitnerComponents/DecksDisplay";
import LevelBoxContainer from "../components/leitnerComponents/LevelBoxContainer";
import StudyControl from "../components/leitnerComponents/StudyControl";
import TimeLine from "../components/leitnerComponents/TimeLine";

const LeitnerBox = ({ area }) => {
  const dispatch = useDispatch();
  const { deck } = useSelector((state) => state.leitnerBox);
  const { user } = useSelector((state) => state.usersReducer);

  const loadDeckInfo = (deck) => {
    dispatch(updateSelectDeckActions(user._id, deck))
  } 

  const studyBtnPressed = () => {
    dispatch(updateCurrentDeckActions(user._id, user.selectedDeck))
  }

  const cardBtnGoodPressed = (btn) => {
    console.log(btn)
    dispatch(cardBtnGoodActions(user._id, user.selectedDeck, btn))
  }

  return (
    <div
      style={{
        gridArea: area,
        display: "grid",
        width: "100%",
        height: "100%",
        backgroundColor: "teal",
        display: "grid",
        gridTemplate: `
          ". . . . . . . . ." 15px
          ". timeline timeline timeline timeline timeline timeline timeline ." 100px
          ". decks_display study_ctrl study_ctrl study_ctrl study_ctrl study_ctrl . ." 80px
          ". level_boxes canvas canvas canvas canvas canvas . ." auto
          / 15px 1fr 1fr 1fr 1fr 1fr 1fr 1fr 15px
        `,
      }}
    >
      {/*       TIMELINE      */}
      {/*       TIMELINE      */}
      {/*       TIMELINE      */}

      <TimeLine leitnerDay={user.decks[user.selectedDeck].leitnerDay} />

      {/*      DECKS DISPLAY      */}
      {/*      DECKS DISPLAY      */}
      {/*      DECKS DISPLAY      */}

      <DecksDisplay area="decks_display" decklist={user.decks} pickDeckFn={(deck)=>loadDeckInfo(deck)}/>

      {/*     SIDE LEVEL BOXES      */}
      {/*     SIDE LEVEL BOXES      */}
      {/*     SIDE LEVEL BOXES      */}

      <LevelBoxContainer selectedDeck={user.decks[user.selectedDeck]} />

      {/*      STUDY_CONTROL      */}
      {/*      STUDY_CONTROL      */}
      {/*      STUDY_CONTROL      */}

      <StudyControl area="study_ctrl" studyBtnFN={studyBtnPressed} studyBtnStatus={user.decks[user.selectedDeck].studyButtonActive}/>

      {/*      CANVAS / CARD      */}
      {/*      CANVAS / CARD      */}
      {/*      CANVAS / CARD      */}

      <CanvasCard area="canvas" studying={user.decks[user.selectedDeck].currentStudying.store} btnFnGood={(t) => cardBtnGoodPressed(t)}/>

    </div>
  );
};

export default LeitnerBox;
