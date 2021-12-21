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

    this.quantityOfCardsToAdd = 2;
  }

  addCardIntoDeck(card){
    this.store.push(card)
  }

  changeQuantityOfCardsToStudy(n){
    this.quantityOfCardsToAdd = n
  }

  addFullDeck(deck) {
    this.store = deck
  }

}