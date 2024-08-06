import express from 'express';
import multer from 'multer';
import {
  createBook,
  getBooks,
  updateBook,
  deleteBook,
} from '../controllers/bookController.js';
import { protect } from '../middleware/authMiddleware.js';

const router = express.Router();
const upload = multer({ dest: 'uploads/' }); // Specify your upload directory

router.route('/')
  .post(protect, upload.single('image'), createBook)
  .get(protect, getBooks);

router.route('/:id')
  .put(protect, upload.single('image'), updateBook)
  .delete(protect, deleteBook);

export default router;
