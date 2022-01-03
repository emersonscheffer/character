// User Class

import { CurrentQueue } from "./CurrentQueue";

// import { Deck } from "./deckClass";

export class UserClass {
  constructor() {
    this.canvasLoaded = false;
    this.currentDay = 0;
    this.currentMonth = 0;

    this.decks = [];

    this.savedDay = 0;

    this.savedMonth = 0;

    this.selectedDeck = 0;
    this.studyButtonActive = true;

    this.studyStarted = false;
    this.userName = "";
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

  updateDeckInDecks(pos, deck) {
    this.decks[pos] = deck;
  }

  updateDecks(decks) {
    this.decks = decks;
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
