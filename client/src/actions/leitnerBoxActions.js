import { ADD_CARD } from "./types";

export const addCardToDeckAction = (card) => (dispatch) => {
  // check if card is in the deck
  // const mdat = JSON.parse(localStorage.getItem("mdat")) || null;
  // console.log(mdat);

  // localStorage.setItem(
  //   "mdat",
  //   JSON.stringify({
  //     name: "mig",
  //     leitnerDay: 1,
  //     currentDay: 1,
  //     currentMonth: 1,
  //     studyStarted: false,
  //     deck: [
  //       {
  //         title: "",
  //         formality: "-",
  //         meaning: "",
  //         example1: "",
  //         example2: "",
  //         example3: "",
  //         level: 1,
  //       },
  //     ],
  //   })
  // );
console.log(card)
  dispatch({ type: ADD_CARD, payload: card });
};
