const mongoose = require("mongoose");

const schema = mongoose.Schema;

const bookSchema = schema(
  {
    title: {
      type: String,
      required: true,
    },
    author: {
      type: String,
      required: true,
    },
    genre: {
      type: String,
      required: true,
    },
    publicationYear: {
      type: Number,
    },
    avilableCopies: {
      type: Number,
      required: true,
      default: 1,
    },
    totalCopies: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

const Book = mongoose.model("Book", bookSchema);

module.exports = new Book();
