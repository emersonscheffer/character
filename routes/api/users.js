const express = require("express");
const router = express.Router();

//item Model
const Users = require("../../models/Users");

//@route Get api/Profiles
router.get("/", (req, res) => {
  Users.find()
    .sort({ date: -1 })
    .then((users) => {
      res.json(users);
    });
});

//@route Get api/items
router.post("/", (req, res) => {
  const newUser = new Users({
    firstname: req.body.firstname,
    lastname: req.body.lastname,
  });
  newUser.save().then((user) => res.json(user));
});

//@route Get api/items
router.delete("/:id", (req, res) => {
  Users.findById(req.params.id)
    .then((user) => user.remove().then(() => res.json({ success: true })))
    .catch((err) => res.status(404).json({ success: false }));
});

module.exports = router;
