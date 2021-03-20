const mongoose = require('mongoose');

const ArtworkSchema = mongoose.Schema({
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

module.exports = mongoose.model('artwork', ArtworkSchema);
