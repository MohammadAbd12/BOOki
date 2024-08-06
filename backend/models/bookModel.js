import mongoose from 'mongoose';

const bookSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  
  originalName: {
    type: String, // Original name of the file
    required: false,
  },
}, {
  timestamps: true,
});

const Book = mongoose.model('Book', bookSchema);
export default Book;

