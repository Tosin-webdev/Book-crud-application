let express = require("express");
const dotenv = require("dotenv");
const morgan = require("morgan");
let app = express();
const connectDB = require("./database/connection");

const port = 3000 || process.env.port;

dotenv.config({ path: ".env" });

// mongoDB connection
connectDB();

// parse request
app.use(express.urlencoded({ extended: true }));

//  register view engine
app.set("view engine", "ejs");

// view public folder(css)
app.use(express.static("public"));

// load routes
app.use("/", require("./routes/user.routes"));

app.listen(port, () => {
  console.log(`app listening at http://localhost:${port}`);
});
