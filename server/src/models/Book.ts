import mongoose from 'mongoose';
const { Schema } = mongoose;

const BookSchema = new Schema({
  author: String,
  title: String
});

const Book = mongoose.model("Book", BookSchema);

export default Book;