// require mongoose module
const axios = require("axios");

// displays home page
exports.homeRoutes = (req, res) => {
  // Make a get request to /api/users
  axios
    .get("/api/users")
    .then((response) => {
      // console.log(response.data);
      res.render("index", { users: response.data });
    })
    .catch((err) => {
      res.send(err);
    });
};

// display add user page
exports.adduser = (req, res) => {
  res.render("add_user");
};

// displays update user page
exports.updateuser = (req, res) => {
  axios
    .get("/api/users", {
      params: { id: req.query.id },
    })
    .then((userdata) => {
      console.log(userdata.data);
      res.render("update_user", { user: userdata.data });
    })
    .catch((err) => {
      res.send(err);
    });
};
