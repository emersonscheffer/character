export class CurrentQueue {
  constructor() {
    this.data = [];
  }
  add() {
    this.data.push();
  }

  isEmpty() {
    return this.data.length === 0 ? true : false;
  }

  dequeue() {
    return !this.isEmpty ? this.data.shift() : null;
  }
}
