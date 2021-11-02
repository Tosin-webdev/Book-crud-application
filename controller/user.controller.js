var Userdb = require("../model/user");

// create and save user
exports.create = (req, res) => {
  // validate request
  if (!req.body) {
    res.status(400).send({ message: "content cannot be empty" });
    return;
  }
};

const user = new Userdb({
  name: req.body.name,
  email: req.body.email,
  gender: req.body.gender,
  status: req.body.status,
});

// console.log(user);
user.save(user);
