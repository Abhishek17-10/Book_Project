const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
  title: String,
  author: String,
  description: String,
  coverImage: String,
  ratings: [Number],
  coverImage:{
    type:String,
    required: false,
  }
});

module.exports = mongoose.model("Book", bookSchema);
