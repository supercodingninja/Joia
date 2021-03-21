import mongoose from 'mongoose';
const { Schema } = mongoose;

const ArtworkSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'users'
  },
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  category: {
    type: String,
    default: 'Painting'
  },
  size: {
    type: String,
  },
  price: {
    type: String,
    default: 'Painting'
  },
  location: {
    type: String,
    default: 'Painting'
  },
  date: {
    type: Date,
    default: Date.now
  }
});

let Artwork = mongoose.model('artwork', ArtworkSchema);
export default Artwork;
