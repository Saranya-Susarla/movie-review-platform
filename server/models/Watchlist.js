const mongoose = require('mongoose');

const watchlistSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  movie: { type: mongoose.Schema.Types.ObjectId, ref: 'Movie', required: true },
  dateAdded: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Watchlist', watchlistSchema);

