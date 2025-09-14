const mongoose = require('mongoose');
require('dotenv').config();

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err));

// Movie schema
const movieSchema = new mongoose.Schema({
  title: String,
  genre: String,
  releaseYear: Number,
  director: String,
  cast: [String],
  synopsis: String,
  posterUrl: String,
  averageRating: Number
});

const Movie = mongoose.model('Movie', movieSchema);

// Sample movies
const movies = [
  {
    title: "Inception",
    genre: "Sci-Fi",
    releaseYear: 2010,
    director: "Christopher Nolan",
    cast: ["Leonardo DiCaprio", "Joseph Gordon-Levitt", "Elliot Page"],
    synopsis: "A thief who steals corporate secrets through dream-sharing technology.",
    posterUrl: "https://image-link.com/inception.jpg",
    averageRating: 0
  },
  {
    title: "Interstellar",
    genre: "Sci-Fi",
    releaseYear: 2014,
    director: "Christopher Nolan",
    cast: ["Matthew McConaughey", "Anne Hathaway", "Jessica Chastain"],
    synopsis: "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
    posterUrl: "https://image-link.com/interstellar.jpg",
    averageRating: 0
  },
  {
    title: "The Dark Knight",
    genre: "Action",
    releaseYear: 2008,
    director: "Christopher Nolan",
    cast: ["Christian Bale", "Heath Ledger", "Aaron Eckhart"],
    synopsis: "Batman sets out to dismantle the remaining criminal organizations that plague Gotham.",
    posterUrl: "https://image-link.com/darkknight.jpg",
    averageRating: 0
  }
];

// Insert movies
Movie.insertMany(movies)
  .then(() => {
    console.log('Sample movies added!');
    mongoose.connection.close();
  })
  .catch(err => console.log(err));
