import React from 'react';
import { Link } from 'react-router-dom';

const MovieCard = ({ movie }) => {
  return (
    <div className="movie-card">
      <Link to={`/movies/${movie._id}`}> {/* <- clickable */}
        <img src={movie.posterUrl} alt={movie.title} />
        <h3>{movie.title}</h3>
        <p>{movie.genre} | {movie.releaseYear}</p>
        <p>Rating: {movie.averageRating}</p>
      </Link>
    </div>
  );
};

export default MovieCard;
