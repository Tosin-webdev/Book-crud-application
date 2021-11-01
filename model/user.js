const mongoose = require("mongoose");

let schema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },

  release_year: {
    type: String,
    required: true,
  },

  genre: {
    type: String,
    required: true,
  },
});

const Userdb = mongoose.model("userdb", schema);

module.exports = Userdb;
