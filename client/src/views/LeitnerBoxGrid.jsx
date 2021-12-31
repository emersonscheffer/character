import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import LeitnerFirstStripe from "../components/leitnerComponents/LeitnerFirstStripe";
import LeitnerTimeLine from "../components/leitnerComponents/LeitnerTimeLine";
import LeitnerTimeLineDayIndicator from "../components/leitnerComponents/LeitnerTimeLineDayIndicator";
import LeitnerTimeLineSideMenu from "../components/leitnerComponents/LeitnerTimeLineSideMenu";
import LeitnerStudyButton from "../components/leitnerComponents/LeitnerStudyButton";
import LeitnerCard from "../components/leitnerComponents/LeitnerCard";

import SelectDeckModal from "../components/leitnerComponents/SelectDeckModal";

import {
  loadSavedStateOrStartNewUser,
  studyButtonAction,
  cardButtonsActions,
  changeDay,
  loadApp,
  selectDeckActions,
  showSelectDeckModalActions,
  hideSelectDeckModalActions,
} from "../actions/leitnerBoxActions";

import LeitnerLevelBoxContainer from "../components/leitnerComponents/LeitnerLevelBoxContainer";
import {
  BACKGROUND,
  COLOR1,
  COLOR2,
  COLOR3,
  COLOR4,
  COLOR5,
  COLOR6,
  COLOR7,
} from "../colors";

import { CurrentQueue } from "../classes/CurrentQueue";

const LeitnerBoxGrid = () => {
  const dispatch = useDispatch();
  const {
    decks,
    selectedDeck,
    studyButtonActive,
    studyStarted,
    showSelectDeckModal,
  } = useSelector((state) => state.leitnerBox);

  // let cs = decks[selectedDeck].currentStudying.store || [];
  // const current = new CurrentQueue();
  // current.addArr(cs);
  // console.log(current.isEmpty() || null);

  const colorsArr = [COLOR1, COLOR2, COLOR3, COLOR4, COLOR5, COLOR6, COLOR7];

  const studyBtnPressed = () => {
    studyStarted
      ? dispatch(studyButtonAction(decks[selectedDeck]))
      : dispatch(showSelectDeckModalActions());
  };

  const buttonsInCardPressed = (btnPressed) => {
    dispatch(cardButtonsActions(btnPressed));
  };

  useEffect(() => {
    dispatch(loadSavedStateOrStartNewUser());
  }, [dispatch]);

  // temp decks array for select deck modal
  //
  const tempDecksArr = ["English", "Math", "Electric Guitar"];

  const selectedDeckPressed = (a) => {
    console.log(tempDecksArr[a]);

    dispatch(selectDeckActions(a));
  };

  return (
    <div
      style={{
        display: "grid",
        // gridTemplateColumns: "repeat(" + cols + ", 1fr)",
        // gridTemplateRows: "25px 90px 65px auto",
        // gridTemplateAreas:"header header header header"
        gridTemplate: `
          "stripe stripe stripe" 25px
          "timeline timeline timeline" 110px
          "leftside control rightside" 50px
          "leftside canvas rightside" auto
          "footer footer footer" 25px
          / 1fr 3fr 1fr
        `,
      }}
    >
      {/*                 SELECT DECK MODAL              */}
      {/*                 SELECT DECK MODAL              */}
      {/*                 SELECT DECK MODAL              */}
      {/*                 SELECT DECK MODAL              */}
      {/*                 SELECT DECK MODAL              */}

      {showSelectDeckModal ? (
        <SelectDeckModal
          decks={tempDecksArr}
          selectFn={(a) => selectedDeckPressed(a)}
          closeModalFn={() => dispatch(hideSelectDeckModalActions())}
        />
      ) : null}
      {/* SELECT DECK MODAL  */}

      <div
        style={{
          backgroundColor: "gray",
          gridArea: "stripe",
        }}
      >
        <LeitnerFirstStripe />
      </div>

      {/*                TIMELINE              */}
      {/*                TIMELINE              */}
      {/*                TIMELINE              */}
      {/*                TIMELINE              */}
      {/*                TIMELINE              */}

      <div
        style={{
          backgroundColor: BACKGROUND,
          gridArea: "timeline",
          display: "grid",
          gridTemplate: `
            "sideMenu timeline" 80%
            "bottomSideMenu indicator" 20%
            / 75px 1fr
          `,
        }}
      >
        <LeitnerTimeLineSideMenu />
        <LeitnerTimeLine />
        {/* //leitnerDay={decks[selectedDeck].leitnerDay} */}
        <LeitnerTimeLineDayIndicator />
        {/* leitnerDay={decks[selectedDeck].leitnerDay} */}
      </div>

      {/*              LEVEL BOXES             */}
      {/*              LEVEL BOXES             */}
      {/*              LEVEL BOXES             */}
      {/*              LEVEL BOXES             */}
      {/*              LEVEL BOXES             */}

      <div
        style={{
          backgroundColor: BACKGROUND,
          gridArea: "leftside",
        }}
      >
        {studyStarted ? (
          <LeitnerLevelBoxContainer
            selectedDeck={decks[selectedDeck]}
            showSelectDeckFn={ ()=>dispatch(showSelectDeckModalActions()) }
          />
        ) : null}
      </div>

      <div
        style={{
          backgroundColor: "lightGray",
          gridArea: "control",
          display: "grid",
          gridTemplate: `
            "load studyBtn settings" 100% 
            / 1fr 1fr 1fr
          `,
        }}
      >
        {/* temp load app button */}

        <div
          onClick={() => dispatch(loadApp())}
          style={{
            gridArea: "load",
            justifySelf: "center",
            alignSelf: "center",
            backgroundColor: "red",
          }}
        >
          <h1 style={{ padding: 7 }}>Load App</h1>
        </div>

        {/* // temp change day button */}
        <div
          onClick={() => dispatch(changeDay())}
          style={{
            gridArea: "settings",
            justifySelf: "center",
            alignSelf: "center",
            width: "50%",
            height: "50%",
            backgroundColor: "lightblue",
          }}
        >
          day change
        </div>

        {/*                    STUDY BTN                  */}
        {/*                    STUDY BTN                  */}
        {/*                    STUDY BTN                  */}
        {/*                    STUDY BTN                  */}
        {/*                    STUDY BTN                  */}

        <LeitnerStudyButton
          pressedMe={studyBtnPressed}
          activeButton={studyButtonActive}
          buttonTxt={studyStarted ? "Study" : "Select Deck"}
        />
      </div>

      {/*              CANVAS    LEITNER CARD              */}
      {/*              CANVAS    LEITNER CARD              */}
      {/*              CANVAS    LEITNER CARD              */}
      {/*              CANVAS    LEITNER CARD              */}
      {/*              CANVAS    LEITNER CARD              */}

      <div
        style={{
          backgroundColor: BACKGROUND,
          height: "400px",
          gridArea: "canvas",
          display: "grid",
        }}
      >
        {/* <LeitnerCard
          colorsArr={colorsArr}
          //cardDisplay={current.peek()}
          btnFn={buttonsInCardPressed}
        /> */}
      </div>

      <div
        style={{
          backgroundColor: "#f2f2f2",

          gridArea: "rightside",
        }}
      >
        {/* right side / list */}
      </div>
      <div
        style={{
          gridArea: "footer",
          fontSize: "9px",
          fontWeight: "bold",
          fontFamily: "monospace",
          alignSelf: "center",
          justifySelf: "end",
          paddingRight: "40px",
          color: "gray",
        }}
      >
        CREATED BY EMERSON
      </div>
    </div>
  );
};
export default LeitnerBoxGrid;
