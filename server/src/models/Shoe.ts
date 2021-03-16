import mongoose from 'mongoose';
const { Schema } = mongoose;

const ShoeSchema = new Schema({
  make: String,
  model: String
});

const Shoe = mongoose.model("Shoe", ShoeSchema);

export default Shoe;