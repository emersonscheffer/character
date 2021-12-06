// // temp file, just to get the date()

// //import "./cards.json"

// console.log(" - - - - - - ");

// const dataX = require("../character/client/src/cardsData.json");
// //console.log(dataX[0]);

// // const da = new Date

// // da.getDate()

// // console.log(da.getMonth() + 1, da.getDate())

// console.log(" - - - - - - ");

// class MyQueue {
//   constructor() {
//     this.store = [];
//   }
//   add(card) {
//     this.store.push(card);
//   }
//   isEmpty() {
//     return this.store.length < 1 ? true : false;
//   }

//   peek() {
//     return !this.isEmpty() ? this.store[0] : null;
//   }

//   dequeue() {
//     return !this.isEmpty() ? this.store.shift() : "empty";
//   }
// }

// let current = new MyQueue();
// current.add(dataX[0]);
// current.add(dataX[1]);
// current.add(dataX[2]);

// const showCard = () => {
//   let card = current.peek();

//   console.log("== == = == === == Show Card == = === == == ");

//   console.log(card.title);

//   console.log("== == = == === == Show Card == = === == == ");
// };

// showCard();

// const pressBtn = (answer) => {
//   const card = current.dequeue();
//   if (answer === "good") {
//   } else {
//     current.add(card);
//   }
// };

// pressBtn("good");

// console.log(current);

// showCard();
// pressBtn("no");

// console.log(current);

const days = {
  1: 1,
  2: 2,
  3: 1,
  4: 3,
  5: 1,
};

let current = [];

const box1 = [1, 2, 3, 4];
const box2 = [32, 34, 35];
const box3 = [222, 333, 444];
const box4 = [777, 888, 999];

const allBoxes = [box1, box2, box3, box4];

function checkBox(b) {
  if (b < 1) {
    return;
  }
  current = [...current, ...allBoxes[b - 1]];
  checkBox(b - 1);
}

// for (const day in days) {

checkBox(days[3]);

//   console.log(days[day])
// }
// let box = []
// checkBox(box + 1)

console.log(current);

for (let i = 1; i < 65; i++) {
  if (i % 64 === 0) {
    // console.log(i, " {i}`:7");
    console.log(String(i).concat(":7"))
  } else {
    console.log(i);
  }
}

