import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import LeitnerFirstStripe from "../components/leitnerComponents/LeitnerFirstStripe";
import LeitnerTimeLine from "../components/leitnerComponents/LeitnerTimeLine";
import LeitnerTimeLineDayIndicator from "../components/leitnerComponents/LeitnerTimeLineDayIndicator";
import LeitnerTimeLineSideMenu from "../components/leitnerComponents/LeitnerTimeLineSideMenu";
import LeitnerTimeLineButton from "../components/leitnerComponents/LeitnerTimeLineButton";
import LeitnerCard from "../components/leitnerComponents/LeitnerCard"

import {
  loadSavedStateOrStartNewUser,
  studyButtonAction,
} from "../actions/leitnerBoxActions";
import LeitnerLevelBoxContainer from "../components/leitnerComponents/LeitnerLevelBoxContainer";

const LeitnerBoxGrid = () => {
  const dispatch = useDispatch();
  const {
    deck,
    boxLevel1,
    boxLevel2,
    boxLevel3,
    boxLevel4,
    boxLevel5,
    boxLevel6,
    boxLevel7,
    cardDisplay
  } = useSelector((state) => state.leitnerBox);
  const boxes = [
    boxLevel1,
    boxLevel2,
    boxLevel3,
    boxLevel4,
    boxLevel5,
    boxLevel6,
    boxLevel7,
  ];
  //columns in layout
  //const cols = 8;

  useEffect(() => {
    dispatch(loadSavedStateOrStartNewUser());
  }, [dispatch]);

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
          backgroundColor: "blue",
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
        <LeitnerTimeLineDayIndicator />
      </div>

      <div
        style={{
          //backgroundColor: "green",
          gridArea: "leftside",
        }}
      >
        <LeitnerLevelBoxContainer deck={deck} boxes={boxes} />
      </div>

      <div
        style={{
          backgroundColor: "pink",
          gridArea: "control",
          display: "grid",
        }}
      >
        <LeitnerTimeLineButton
          pressedMe={dispatch(studyButtonAction)}
          isDisabled={false}
          buttonTxt={"Study"}
        />
      </div>

      <div
        style={{
          backgroundColor: "white",
          height: "400px",
          //gridColumn: "2/8",
          //gridRow: "4",
          gridArea: "canvas",
          display: "grid"
        }}
      >
       <LeitnerCard cardDisplay={cardDisplay}/>
      </div>

      <div
        style={{
          backgroundColor: "black",
          //height: "auto",
          //gridColumn: "8/9",
          //gridRow: "3/4",
          gridArea: "rightside",
        }}
      >
        right side / list
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
