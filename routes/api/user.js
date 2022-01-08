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
    password: req.body.password
  });
  newUser.save().then((user) => res.json(user));
});

router.post("/login", (req, res) => {

  User.findOne({username: req.body.username}).then((user) => {
    
    if(req.body.password === user.password) {
      res.json(user)
    } else {
      console.log("access denied")
    }
  })

});

// //@route Get api/items
// router.delete("/:id", (req, res) => {
//   Users.findById(req.params.id)
//     .then((user) => user.remove().then(() => res.json({ success: true })))
//     .catch((err) => res.status(404).json({ success: false }));
// });

module.exports = router;
