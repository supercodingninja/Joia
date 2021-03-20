import mongoose from 'mongoose';
const { Schema } = mongoose;

const ArtworkSchema = new Schema({
  title: String || Number,
  description: Text,
  type: String,
  size: String || Number,
  category: String,
  price: Number,
  location: String, /*From user*/
  artistName: String /*From user*/
});

const Artworks = mongoose.model("Shoe", ArtworkSchema);

export default Artworks;