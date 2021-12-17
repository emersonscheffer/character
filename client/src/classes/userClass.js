// User Class

import { Deck } from "./deckClass";

export class UserClass {
  constructor(
    currentDay = 0,
    currentMonth = 0,
    deck = [],
    leitnerDay = 1,
    studyStarted = false,
    userName = ""
  ) {
    this.quantityOfCardsToAdd = 2; // move this to card class

    this.canvasLoaded = false;
    this.currentDay = currentDay;
    this.currentMonth = currentMonth;

    this.currentStudying = [];
    this.deck = deck;
    this.decks = []
    this.leitnerDay = leitnerDay;
    this.savedDay = 0;

    this.savedMonth = 0;

    this.selectedDeck = 1;
    this.studyButtonActive = false;

    this.studyStarted = studyStarted;
    this.userName = userName;
  }

  updateDay(day) {
    this.currentDay = day;
  }

  updateMonth(month) {
    this.currentMonth = month;
  }

  //insert card in Deck
  insertCard(card) {
    this.deck.push(card);
  }

  updateLeitnerDay(day) {
    this.leitnerDay = day;
  }

  updateStudyStarted(condition) {
    this.studyStarted = condition;
  }
  updateUserName(userNickName) {
    this.userName = userNickName;
  }
}

//   boxLevel1: [],
//   boxLevel2: [],
//   boxLevel3: [],
//   boxLevel4: [],
//   boxLevel5: [],
//   boxLevel6: [],
//   boxLevel7: [],

// boxRetired: [],

// canvasLoaded: false,
