const express = require("express");
const Deck = require("../../models/Deck");
const router = express.Router();

//item Model
const User = require("../../models/User");

// //@route Get api/Profiles
router.get("/", (req, res) => {
  User.find()
    .sort({ date: -1 })
    .then((users) => {
      res.json(users);
    });
});

//@route
router.post("/", (req, res) => {
  const newUser = new User({
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    username: req.body.username,
    password: req.body.password,
    studyStarted: req.body.studyStarted,
  });
  newUser.save().then((user) => res.json(user));
});

router.post("/login", (req, res) => {
  User.findOne({ username: req.body.username }).then((user) => {
    if (req.body.password === user.password) {
      res.json(user);
    } else {
      console.log("access denied");
    }
  });
});

// add card to the selected deck
// if deck doesn't exist, create one
//

router.put("/:id", (req, res) => {
  User.findById(req.params.id).then((user) => {
    //user.decks //array
    // look for deck in decks
    for (let i = 0; i < user.decks.length; i++) {
      if (user.decks[i].subject === "english") {
        user.decks[i].box1.push({
          _id: "id",
          title: "Get a move on",
          level: 0,
        });
      }
    }
  });

  User.findByIdAndUpdate(
    req.params.id,
    { decks: [] },
    { new: true },
    (err, user) => {
      if (err) return res.status(500).send(err);
      return res.send(user);
    }
  );
});

// Add cards to deck and current studying
router.put("/addcardstodeck/:id", (req, res) => {
  User.findById(req.params.id).then((user) => {
    let userDecks = user.decks;
    let currentDeck = [];
    let deckPosition = 0;
    for (let i = 0; i < userDecks.length; i++) {
      if (userDecks[i].subject === req.body.subject) {
        currentDeck = userDecks[i];
        deckPosition = i;
        break;
      }
    }

    for (let j = 0; j < currentDeck.quantityOfCardsToAdd; j++) {
      console.log(j + 1);
      currentDeck.box1.push("card " + j);
      currentDeck.currentStudying.store.push("jack " + j);
    }

    userDecks[deckPosition] = currentDeck;

    User.findByIdAndUpdate(
      req.params.id,
      { decks: userDecks },
      { new: true },
      (err, user) => {
        if (err) return res.status(500).send(err);
        return res.send(user);
      }
    );
  });
});

// Create an empty deck in users data
router.put("/createdeck/:id", (req, res) => {
  User.findById(req.params.id).then((user) => {
    let alreadyExists = false;

    for (let i = 0; i < user.decks.length; i++) {
      if (user.decks[i].subject === req.body.subject) {
        alreadyExists = true;
      }
    }

    if (!alreadyExists) {
      let updatedDecks = user.decks;
      updatedDecks.push(req.body);

      User.findByIdAndUpdate(
        req.params.id,
        { decks: updatedDecks },
        { new: true },
        (err, user) => {
          if (err) return res.status(500).send(err);
          return res.send(user);
        }
      );
    } else {
      console.log("alredy here - - - - -  > > > > ");
    }
  });
});

// Study started route
router.put("/studystarted/:id", (req, res) => {
  User.findByIdAndUpdate(
    req.params.id,
    { studyStarted: true },
    { new: true },
    (err, user) => {
      if (err) return res.status(500).send(err);
      return res.send(user);
    }
  );
});

// Update users select
router.put("/updateselectdeck/:id", (req, res) => {
  User.findByIdAndUpdate(
    req.params.id,
    { selectedDeck: req.body.selected },
    { new: true },
    (err, user) => {
      if (err) return res.status(500).send(err);
      return res.send(user);
    }
  );
});

const daysMap = {
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

const tempList2 = [
  { subject: "hello", level: 1 },
  { subject: "Hey", level: 1 },
  { subject: "Apple", level: 1 },
  { subject: "Oranges", level: 1 },
  { subject: "Pears", level: 1 },
  { subject: "Lemon", level: 1 },
]; // trash this after

// update Deck study btn pressed
router.put("/updatecurrentdeck/:id", (req, res) => {
  /* req.body
    selectedDeck

  */

  User.findById(req.params.id).then((user) => {
    let userDecks = user.decks;
    let currentDeck = userDecks[req.body.selectedDeck];

    if (!currentDeck.deckStarted) {
      currentDeck.deckStarted = true;
    } else {
      let day = currentDeck.leitnerDay + 1;
      if (day === 65) {
        day = 1;
      }
      currentDeck.leitnerDay = day;
    }

    // create a starting point
    let newStartingPoint = currentDeck.startingPoint;

    let sourceList = []

    // Get deck from decks
    Deck.findOne({subject: currentDeck.subject}).then((deck) => {
     sourceList = deck.store
     




//add cards to box1
for (
  let i = currentDeck.startingPoint;
  i < currentDeck.startingPoint + currentDeck.quantityOfCardsToAdd;
  i++
) {
  const card = sourceList[i] || null;

  if (card) {
    currentDeck.box1.push(card);
  } else {
    break;
  }

  newStartingPoint = i + 1;
}







    

    // update starting point
    currentDeck.startingPoint = newStartingPoint;

    // adding cards into current studying
    function checkAllBoxesAndAddItemsIntoCurrent() {
      let tempCurrent = [];

      const allBoxes = [
        currentDeck.box1,
        currentDeck.box2,
        currentDeck.box3,
        currentDeck.box4,
        currentDeck.box5,
        currentDeck.box6,
        currentDeck.box7,
      ];

      function checkBox(b) {
        if (b < 1) {
          return;
        }
        tempCurrent = [...tempCurrent, ...allBoxes[b - 1]];
        checkBox(b - 1);
      }

      checkBox(daysMap[currentDeck.leitnerDay]);

      return tempCurrent;
    }

    currentDeck.currentStudying.store = checkAllBoxesAndAddItemsIntoCurrent();

    // making study button unable for this deck
    currentDeck.studyButtonActive = false;

    //   userDecks[deckPosition] = currentDeck;
 
    User.findByIdAndUpdate(
      req.params.id,
      { decks: userDecks },
      { new: true },
      (err, user) => {
        if (err) return res.status(500).send(err);
        return res.send(user);
      }
    );




    })

  });
});

//cardbtn logic
router.put("/cardbtn/:id", (req, res) => {
  User.findById(req.params.id).then((user) => {
    let userDecks = user.decks;
    let currentDeck = userDecks[req.body.currentDeck];

    let card = currentDeck.currentStudying.store.shift();

    switch (card.level) {
      case 1:
        currentDeck.box1.shift();
        break;
      case 2:
        currentDeck.box2.shift();
        break;
      case 3:
        currentDeck.box3.shift();
        break;
      case 4:
        currentDeck.box4.shift();
        break;
      case 5:
        currentDeck.box5.shift();
        break;
      case 6:
        currentDeck.box6.shift();
        break;
      case 7:
        currentDeck.box7.shift();
        break;
      default:
        break;
    }

    if (req.body.btn === "Good") {
      card.level = card.level + 1;

      switch (card.level) {
        case 2:
          currentDeck.box2.push(card);
          break;
        case 3:
          currentDeck.box3.push(card);
          break;
        case 4:
          currentDeck.box4.push(card);
          break;
        case 5:
          currentDeck.box5.push(card);
          break;
        case 6:
          currentDeck.box6.push(card);
          break;
        case 7:
          currentDeck.box7.push(card);
          break;
        case 8:
          currentDeck.retiredBox.push(card);
          break;

        default:
          console.log("called default state  - check whats wrong");
          currentDeck.box1.push(card);
          break;
      }
    } else {
      // if again btn is pressed
      // -> change level of card to 1
      // -> send card to end of queue in current studying
      card.level = 1;
      currentDeck.box1.push(card);
      currentDeck.currentStudying.store.push(card);
    }

    // make study btn active
    if (currentDeck.currentStudying.store.length === 0) {
      currentDeck.studyButtonActive = true;
    }

    User.findByIdAndUpdate(
      req.params.id,
      { decks: userDecks },
      { new: true },
      (err, user) => {
        if (err) return res.status(500).send(err);
        return res.send(user);
      }
    );
  });
});
// //@route Get api/items
// router.delete("/:id", (req, res) => {
//   Users.findById(req.params.id)
//     .then((user) => user.remove().then(() => res.json({ success: true })))
//     .catch((err) => res.status(404).json({ success: false }));
// });
//
module.exports = router;
