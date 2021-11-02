let express = require("express");
const dotenv = require("dotenv");
let app = express();
const connectDB = require("./database/connection");

const port = 3000;

dotenv.config({ path: ".env" });

// mongoDB connection
connectDB();

// load routes
app.use("/", require("./routes/user.routes"));

// parse request
app.use(express.urlencoded({ extended: false }));

//  register view engine
app.set("view engine", "ejs");

// view public folder(css)
app.use(express.static("public"));

app.listen(port, () => {
  console.log(`app listening at http://localhost:${port}`);
});
