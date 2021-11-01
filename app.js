let express = require("express");
let app = express();
const connectDB = require("./database/connection");

const port = 3000;

// A get request for the home page
app.get("/", (req, res) => {
  res.render("index");
});

// A get request for the about page
app.get("/add-user", (req, res) => {
  res.render("add-user");
});

// A get request for the update user
app.get("/update-user", (req, res) => {
  res.render("update-user");
});

//  register view engine
app.set("view engine", "ejs");

// view public folder(css)
app.use(express.static("public"));

// mongoDB connection
connectDB();

app.listen(port, () => {
  console.log(`app listening at http://localhost:${port}`);
});
