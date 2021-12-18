import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import LeitnerFirstStripe from "../components/leitnerComponents/LeitnerFirstStripe";
import LeitnerTimeLine from "../components/leitnerComponents/LeitnerTimeLine";
import LeitnerTimeLineDayIndicator from "../components/leitnerComponents/LeitnerTimeLineDayIndicator";
import LeitnerTimeLineSideMenu from "../components/leitnerComponents/LeitnerTimeLineSideMenu";
import LeitnerTimeLineStudyButton from "../components/leitnerComponents/LeitnerTimeLineStudyButton";
import LeitnerCard from "../components/leitnerComponents/LeitnerCard";

import {
  loadSavedStateOrStartNewUser,
  studyButtonAction,
  cardButtonsActions,
  changeDay,
  loadApp,
  //isCurrentStudyingEmpty,
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

//import { CurrentQueue } from "../classes/CurrentQueue";

const LeitnerBoxGrid = () => {
  const dispatch = useDispatch();
  const {
    decks,
    selectedDeck,
    studyButtonActive,
    currentStudying,
    leitnerDay,
  } = useSelector((state) => state.leitnerBox);

  

  

  const colorsArr = [COLOR1, COLOR2, COLOR3, COLOR4, COLOR5, COLOR6, COLOR7];

  const studyBtnPressed = () => {
    dispatch(studyButtonAction());
  };

  const buttonsInCardPressed = (btnPressed) => {
    dispatch(cardButtonsActions(btnPressed));
  };

  // useEffect(() => {
  //   dispatch(loadSavedStateOrStartNewUser());
  // }, [dispatch]);

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
      <div
        style={{
          backgroundColor: "gray",
          gridArea: "stripe",
        }}
      >
        <LeitnerFirstStripe />
      </div>

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
        <LeitnerTimeLine leitnerDay={leitnerDay} />
        <LeitnerTimeLineDayIndicator leitnerDay={leitnerDay} />
      </div>

      <div
        style={{
          //backgroundColor: "green",
          gridArea: "leftside",
        }}
      >
        

        <LeitnerLevelBoxContainer cDeck={decks[selectedDeck]} />
        
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
        <LeitnerTimeLineStudyButton
          pressedMe={studyBtnPressed}
          activeButton={studyButtonActive}
          buttonTxt={"Study"}
        />
      </div>

      <div
        style={{
          backgroundColor: BACKGROUND,
          height: "400px",
          gridArea: "canvas",
          display: "grid",
        }}
      >
        {currentStudying.isEmpty() ? null : (
          <LeitnerCard
            colorsArr={colorsArr}
            cardDisplay={currentStudying.peek()}
            btnFn={buttonsInCardPressed}
          />
        )}
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
