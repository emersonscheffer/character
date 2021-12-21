// User Class

import { CurrentQueue } from "./CurrentQueue";

// import { Deck } from "./deckClass";

export class UserClass {
  constructor(
    currentDay = 0,
    currentMonth = 0,

    leitnerDay = 1,
    studyStarted = false,
    userName = ""
  ) {
    this.canvasLoaded = false;
    this.currentDay = currentDay;
    this.currentMonth = currentMonth;

    this.currentStudying = new CurrentQueue()

    this.decks = [];
    this.leitnerDay = leitnerDay;
    this.savedDay = 0;

    this.savedMonth = 0;

    this.selectedDeck = 0;
    this.studyButtonActive = false;

    this.studyStarted = studyStarted;
    this.userName = userName;
  }

  updateCanvasLoaded(status) {
    this.canvasLoaded = status;
  }

  updateCurrentDay(day) {
    this.currentDay = day;
  }

  updateCurrentMonth(month) {
    this.currentMonth = month;
  }

  updateCurrentStudying(study) {
    this.currentStudying = study;
  }

  updateDecks(decks) {
    this.decks = decks;
  }

  updateLeitnerDay(day) {
    this.leitnerDay = day;
  }

  updateSavedDay(day) {
    this.savedDay = day;
  }

  updateSavedMonth(month) {
    this.savedMonth = month;
  }

  updateSelectedDeck(deck) {
    this.selectedDeck = deck;
  }

  updateStudyButtonActive(status) {
    this.studyButtonActive = status;
  }

  updateStudyStarted(condition) {
    this.studyStarted = condition;
  }
  updateUserName(userNickName) {
    this.userName = userNickName;
  }
}
