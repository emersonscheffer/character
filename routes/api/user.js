const express = require("express");
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

router.put("/createdeck/:id", (req, res) => {
  console.log("creating deck for this id ", req.body)
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

// //@route Get api/items
// router.delete("/:id", (req, res) => {
//   Users.findById(req.params.id)
//     .then((user) => user.remove().then(() => res.json({ success: true })))
//     .catch((err) => res.status(404).json({ success: false }));
// });

module.exports = router;
