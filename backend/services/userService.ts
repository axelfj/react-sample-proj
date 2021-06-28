const router = require("express").Router();
let User = require("../models/user.model");


// TODO no deberían haber rutas por defecto ni add - create - update - delete
// TODO 

router.route("/user:id").get((req, res) => {
  console.log("hola");
  User.find()
    .then((users) => res.json(users))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/user").post((req, res) => {
  const username = req.body.username;

  const newUser = new User({ username });

  const result = newUser
    .save()
    .then(() => res.json("User added!"))
    .catch((err) => res.status(400).json("Error: " + err));

  console.log(
    `New listing created with the following id: ${result.insertedId}`
  );
});

router.route("/user").put((req, res) => {
  const { username, firstname, lastname, password } = req.body.user;

  const updatedUser = new User({ username, firstname, lastname, password });

  const result = updatedUser
    .update()
    .then(() => res.json("User added!"))
    .catch((err) => res.status(400).json("Error: " + err));

  console.log(`${result.matchedCount} document(s) matched the query criteria.`);
  console.log(`${result.modifiedCount} document(s) was/were updated.`);
});

module.exports = router;
