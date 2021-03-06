import { CurrentQueue } from "./CurrentQueue";

export class Deck {
  constructor(subject) {
    this.subject = subject;
    this.store = [];

    this.box1 = [];
    this.box2 = [];
    this.box3 = [];
    this.box4 = [];
    this.box5 = [];
    this.box6 = [];
    this.box7 = [];
    this.retiredBox = [];

    this.quantityOfCardsToAdd = 4;

    this.currentStudying = new CurrentQueue();

    this.leitnerDay = 1;

    this.deckStarted = false;

    this.studyButtonActive = true;

    this.startingPoint = 0

    this.savedMonth = 0;

    this.savedDay = 0;
  }

  addCardIntoDeck(card) {
    this.store.push(card);
  }

  changeQuantityOfCardsToStudy(n) {
    this.quantityOfCardsToAdd = n;
  }

  addFullDeck(deck) {
    this.store = deck;
  }
}
