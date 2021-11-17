import { ADD_CARD, LOAD_STATE } from "./types";

export const addCardToDeckAction = (card) => (dispatch) => {
  // check if card is in the deck
  // const mdat = JSON.parse(localStorage.getItem("mdat")) || null;
  // console.log(mdat);

  localStorage.setItem(
    "mdat",
    JSON.stringify({
      // name: "mig",
      // leitnerDay: 1,
      // currentDay: 1,
      // currentMonth: 1,
      // studyStarted: false,
      deck: [
        // {
        //   title: "",
        //   formality: "-",
        //   meaning: "",
        //   example1: "",
        //   example2: "",
        //   example3: "",
        //   level: 1,
        // },
      ],
    })
  );
  console.log(card);
  dispatch({ type: ADD_CARD, payload: card });
};

export const loadSavedState = () => (dispatch) => {
  const mdat = JSON.parse(localStorage.getItem("mdat")) || null;
  if (mdat) {
    console.log("load successful");
    console.log(mdat["deck"]);
  } else {
    console.log("empty initial state or failed to retrieve");
  }

  //dispatch and change localstorage
  dispatch({ type: LOAD_STATE, payload: mdat });
};
