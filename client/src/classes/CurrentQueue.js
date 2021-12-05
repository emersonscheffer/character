export class CurrentQueue {
  constructor() {
    this.store = [];
  }
  add(card) {
    this.store.push(card);
  }
  isEmpty() {
    return this.store.length < 1 ? true : false;
  }

  peek() {
    return !this.isEmpty() ? this.store[0] : null;
  }

  dequeue() {
    return !this.isEmpty() ? this.store.shift() : "empty";
  }
}
