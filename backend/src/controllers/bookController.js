// controllers/bookController.js

const Book = require('../models/Book');

// Create a new book
exports.createBook = async (req, res) => {
    try {
        const newBook = new Book(req.body);
        const savedBook = await newBook.save();
        res.status(201).json(savedBook);
    } catch (error) {
        res.status(500).json({ error: 'Error creating a new book' });
    }
};

// Get all books
exports.getAllBooks = async (req, res) => {
    try {
        const books = await Book.find();
        res.status(200).json(books);
    } catch (error) {
        res.status(500).json({ error: 'Error getting books' });
    }
};

// Get a single book by ID
exports.getBookById = async (req, res) => {
    try {
        const book = await Book.findById(req.params.id);
        if (!book) {
            res.status(404).json({ error: 'Book not found' });
        } else {
            res.status(200).json(book);
        }
    } catch (error) {
        res.status(500).json({ error: 'Error getting the book' });
    }
};

// Update a book by ID
exports.updateBook = async (req, res) => {
    try {
        const updatedBook = await Book.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
        });
        if (!updatedBook) {
            res.status(404).json({ error: 'Book not found' });
        } else {
            res.status(200).json(updatedBook);
        }
    } catch (error) {
        res.status(500).json({ error: 'Error updating the book' });
    }
};

// Delete a book by ID
exports.deleteBook = async (req, res) => {
    try {
        const deletedBook = await Book.findByIdAndDelete(req.params.id);
        if (!deletedBook) {
            res.status(404).json({ error: 'Book not found' });
        } else {
            res.status(200).json(deletedBook);
        }
    } catch (error) {
        res.status(500).json({ error: 'Error deleting the book' });
    }
};
