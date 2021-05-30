const mongoose = require('../database');

const BookSchema = new mongoose.Schema({
  title: {
    type: String,
    require: true,
  },
  author: {
    type: String,
    require: true,
  },
  gender: {
    type: String,
    require: true,
  },
  price: {
    type: Number,
    require: true,
  },
  publishing: {
    type: String,
    require: true,
  },
});

const Book = mongoose.model('Book', BookSchema);

module.exports = Book;
