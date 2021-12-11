// User Class

export class UserClass {
  constructor(
    currentDay = 0,
    currentMonth = 0,
    deck = [],
    leitnerDay = 1,
    studyStarted = false,
    userName = ""
  ) {
    this.currentDay = currentDay;
    this.currentMonth = currentMonth;
    this.deck = deck;
    this.leitnerDay = leitnerDay;
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



// userName: "",
//   deck: [],

//   boxLevel1: [],
//   boxLevel2: [],
//   boxLevel3: [],
//   boxLevel4: [],
//   boxLevel5: [],
//   boxLevel6: [],
//   boxLevel7: [],

  // boxRetired: [],

  // currentMonth: 0,
  // currentDay: 0,

  // savedMonth: 0,
  // savedDay: 0,

  // leitnerDay: 1, 
  // studyStarted: false,

  // cardsToAddQuantity: 2,

  // studyButtonActive: true,

  // currentStudying: new CurrentQueue(),
  // quantityOfCardsToAdd: 2,

  // canvasLoaded: false,