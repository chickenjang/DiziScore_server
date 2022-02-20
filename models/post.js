const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
  body: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Number,
    required: true,
  },
  grade: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model("post", postSchema);
