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
    this.currentStudying = []
    this.studyButtonActive = false
    this.savedMonth = 0
    this.savedDay = 0
    this.quantityOfCardsToAdd = 2
    this.canvasLoaded = false

    
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