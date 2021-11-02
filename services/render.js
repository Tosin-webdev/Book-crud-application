const axios = require("axios");

exports.homeRoutes = (req, res) => {
  // Make a get request to /api/users
  axios
    .get("http://localhost:3000/api/users")
    .then((response) => {
      console.log(response.data);
      res.render("index", { users: response.data });
    })
    .catch((err) => {
      res.send(err);
    });
};

exports.adduser = (req, res) => {
  res.render("add-user");
};

exports.updateuser = (req, res) => {
  axios
    .get("http://localhost:3000/api/users", {
      params: { id: req.query.id },
    })
    .then((userdata) => {
      res.render("update-user", { user: userdata.data });
    })
    .catch((err) => {
      res.send(err);
    });
  res.render("update-user");
};
