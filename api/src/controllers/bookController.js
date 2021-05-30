const express = require('express');

const Book = require('../models/Book');

const router = express.Router();

router.get('/books', async (req, res) => {
  try {
    const books = await Book.find();

    return res.status(200).json(books);
  } catch (err) {
    return res.status(500).json(err);
  }
});

router.get('/books/:bookId', async (req, res) => {
  try {
    const book = await Book.findOne({ _id: req.params.bookId });

    return res.status(200).json(book);
  } catch (err) {
    return res.status(500).json(err);
  }
});

router.post('/books', async (req, res) => {
  try {
    const book = await Book.create(req.body);

    return res.status(201).json(book);
  } catch (err) {
    return res.status(500).json(err);
  }
});

router.put('/books/:bookId', async (req, res) => {
  try {
    const book = await Book.findOne({ _id: req.params.bookId });

    const updatedBook = await book.updateOne(req.body);

    return res.status(200).json(updatedBook);
  } catch (err) {
    return res.status(500).json(err);
  }
});

module.exports = (app) => app.use('/api', router);
