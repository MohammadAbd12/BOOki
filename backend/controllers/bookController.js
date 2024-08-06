import asyncHandler from 'express-async-handler';
import Book from '../models/bookModel.js';

// @desc    Create a new book
// @route   POST /api/books
// @access  Private
const createBook = asyncHandler(async (req, res) => {
  const { title, description } = req.body;

  if (!title || !description) {
    return res.status(400).json({ message: 'Title and description are required' });
  }

  const book = await Book.create({ title, description }); // Removed image handling
  res.status(201).json(book);
});

// @desc    Get all books
// @route   GET /api/books
// @access  Private
const getBooks = asyncHandler(async (req, res) => {
  const books = await Book.find({});
  res.json(books);
});

// @desc    Update a book
// @route   PUT /api/books/:id
// @access  Private
const updateBook = asyncHandler(async (req, res) => {
  const { title, description } = req.body;

  // Find the existing book
  const existingBook = await Book.findById(req.params.id);
  if (!existingBook) {
    return res.status(404).json({ message: 'Book not found' });
  }

  // Prepare update data
  const updateData = {};
  if (title) updateData.title = title;
  if (description) updateData.description = description;

  // Update the book
  const updatedBook = await Book.findByIdAndUpdate(req.params.id, updateData, {
    new: true,
    runValidators: true,
  });

  // Check if the book was updated
  if (!updatedBook) {
    return res.status(404).json({ message: 'Book not found' });
  }

  res.json(updatedBook);
});

// @desc    Delete a book
// @route   DELETE /api/books/:id
// @access  Private
const deleteBook = asyncHandler(async (req, res) => {
  const book = await Book.findById(req.params.id);
  if (!book) {
    return res.status(404).json({ message: 'Book not found' });
  }

  // Remove the book from the database
  await Book.findByIdAndRemove(req.params.id);
  res.json({ message: 'Book removed' });
});

export { createBook, getBooks, updateBook, deleteBook };
