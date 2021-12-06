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

let current = []

const box1 = [1, 2, 3, 4]
const box2 = [32, 34, 35]

const allBoxes = [box1, box2]

function checkBox(b){
  if(b < 1) {
    return
  } 
  current = [...current, ...allBoxes[b - 1]]
  checkBox(b - 1)
}

checkBox(allBoxes.length)
// let box = []
// checkBox(box + 1)



console.log(current)