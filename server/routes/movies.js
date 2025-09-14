const express = require('express');
const router = express.Router();
const Movie = require('../models/Movie');

// GET /api/movies
router.get('/', async (req, res) => {
  try {
    const movies = await Movie.find(); // fetch all movies from MongoDB
    res.json(movies);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to fetch movies' });
  }
});

module.exports = router;
