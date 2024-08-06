import express from 'express';
import { createBook, getBooks, updateBook, deleteBook } from '../controllers/bookController.js';
import { protect } from '../middleware/authMiddleware.js';
import upload from '../middleware/uploadMiddleware.js'; // Ensure this imports your multer setup

const router = express.Router();

// POST for creating a new book
router.route('/').post(protect, upload.single('image'), createBook).get(protect, getBooks);

// PUT for updating a book (ensure multer is applied here too)
router.route('/:id').put(protect, upload.single('image'), updateBook).delete(protect, deleteBook);

export default router;
