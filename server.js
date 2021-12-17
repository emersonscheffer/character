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
  6: 2,
  7: 1,
  8: 4,
  9: 1,
  10: 2,
  11: 1,
  12: 3,
  13: 1,
  14: 2,
  15: 1,
  16: 5,
  17: 1,
  18: 2,
  19: 1,
  20: 3,
  21: 1,
  22: 2,
  23: 1,
  24: 4,
  25: 1,
  26: 2,
  27: 1,
  28: 3,
  29: 1,
  30: 2,
  31: 1,
  32: 6,
  33: 1,
  34: 2,
  35: 1,
  36: 3,
  37: 1,
  38: 2,
  39: 1,
  40: 4,
  41: 1,
  42: 2,
  43: 1,
  44: 3,
  45: 1,
  46: 2,
  47: 1,
  48: 5,
  49: 1,
  50: 2,
  51: 1,
  52: 3,
  53: 1,
  54: 2,
  55: 1,
  56: 4,
  57: 1,
  58: 2,
  59: 1,
  60: 3,
  61: 1,
  62: 2,
  63: 1,
  64: 7,
};

let current = [];

const box1 = ["box 1 = "];
const box2 = ["box 2 = "];
const box3 = ["box 3 = "];
const box4 = ["box 4 = "];
const box5 = ["box 5 = "];
const box6 = ["box 6 = "];
const box7 = ["box 7 = "];

const allBoxes = [box1, box2, box3, box4, box5, box6, box7];

function checkBox(b) {
  if (b < 1) {
    return;
  }
  current = [...current, ...allBoxes[b - 1]];
  checkBox(b - 1);
}

// for (const day in days) {

checkBox(days[56]);

//   console.log(days[day])
// }
// let box = []
// checkBox(box + 1)

console.log(current);

// for (let i = 1; i < 65; i++) {
//   if (i % 64 === 0) {
//     console.log(String(i).concat(":7"))
//   } else if (i % 32 === 0) {
//     console.log(String(i).concat(":6,"))
//   } else if (i % 16 === 0) {
//     console.log(String(i).concat(":5,"))
//   } else if (i % 8 === 0) {
//     console.log(String(i).concat(":4,"))
//   } else if (i % 4 === 0) {
//     console.log(String(i).concat(":3,"))
//   } else if (i % 2 === 0) {
//     console.log(String(i).concat(":2,"))
//   } else if (i % 1 === 0) {
//     console.log(String(i).concat(":1,"))
//   }
// }


const decks = [

  { 
     subject : "english",
     quantityOfCards : 2,
     deck: [],
     box1: [],
     box2: [],
     box3: [],
     box4: [],
     box5: [],
     box6: [],
     box7: [],
     retiredBox: []

 },
 { 
     subject : "guitar",
     quantityOfCards : 2,
     deck: [],
     box1: [],
     box2: [],
     box3: [],
     box4: [],
     box5: [],
     box6: [],
     box7: [],
     retiredBox: []

 },


]


decks.forEach(deck => {
  console.log(" @@@@@@ ", deck.subject)
  console.log(" @@@@@@ ", deck.box1)

});

for (const deck of decks) {
  console.log(" ###### " , deck.subject)
}
//console.log(decks[0].subject, "---- this is the subject")