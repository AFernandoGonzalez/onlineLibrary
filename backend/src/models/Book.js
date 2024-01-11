// models/Book.js

const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
    title: { type: String, required: true },
    author: { type: String, required: true },
    category: { type: String },
    // Add other properties as needed
});

const Book = mongoose.model('Book', bookSchema);

module.exports = Book;
