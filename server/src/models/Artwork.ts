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
    default: '$100'
  },
  location: {
    type: String,
    default: 'Heaven'
  },
  date: {
    type: Date,
    default: Date.now
  },
  imagePath: {
    type: String,
    default: "https://www.kindpng.com/picc/m/492-4929040_mystery-clipart-mystery-prize-question-mark-clip-art.png"
  }
});

let Artwork = mongoose.model('artwork', ArtworkSchema);
export default Artwork;
