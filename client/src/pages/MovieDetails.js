import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import {
  fetchMovieDetails,
  fetchMovieReviews,
  submitReview,
  addToWatchlist
} from '../api/api';

const MovieDetails = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [reviewText, setReviewText] = useState('');
  const [reviewRating, setReviewRating] = useState(5);

  // Load movie and reviews
  useEffect(() => {
    const loadData = async () => {
      try {
        const movieData = await fetchMovieDetails(id);
        setMovie(movieData);

        const reviewData = await fetchMovieReviews(id);
        setReviews(reviewData);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    loadData();
  }, [id]);

  const handleReviewSubmit = async (e) => {
    e.preventDefault();
    try {
      const newReview = await submitReview(id, reviewRating, reviewText);
      setReviews([newReview, ...reviews]); // prepend the new review
      setReviewText('');
      setReviewRating(5);
    } catch (err) {
      console.error('Failed to submit review:', err);
    }
  };

  const handleAddToWatchlist = async () => {
    try {
      await addToWatchlist(id);
      alert('Added to watchlist!');
    } catch (err) {
      console.error('Failed to add to watchlist:', err);
    }
  };

  if (loading) return <p>Loading movie details...</p>;
  if (!movie) return <p>Movie not found</p>;

  return (
    <div className="movie-details">
      <h1>{movie.title}</h1>
      <img src={movie.posterUrl} alt={movie.title} style={{ maxWidth: '300px' }} />
      <p><strong>Genre:</strong> {movie.genre}</p>
      <p><strong>Release Year:</strong> {movie.releaseYear}</p>
      <p><strong>Director:</strong> {movie.director}</p>
      <p><strong>Cast:</strong> {movie.cast.join(', ')}</p>
      <p><strong>Synopsis:</strong> {movie.synopsis}</p>
      <p><strong>Average Rating:</strong> {movie.averageRating}</p>

      <button onClick={handleAddToWatchlist}>Add to Watchlist</button>

      <hr />

      <h2>Reviews</h2>
      {reviews.length === 0 && <p>No reviews yet</p>}
      <ul>
        {reviews.map((r) => (
          <li key={r._id}>
            <strong>{r.userName || 'Anonymous'}:</strong> {r.rating}⭐ - {r.text}
          </li>
        ))}
      </ul>

      <h3>Submit a Review</h3>
      <form onSubmit={handleReviewSubmit}>
        <label>
          Rating:
          <select
            value={reviewRating}
            onChange={(e) => setReviewRating(Number(e.target.value))}
          >
            {[5, 4, 3, 2, 1].map((n) => (
              <option key={n} value={n}>{n}</option>
            ))}
          </select>
        </label>
        <br />
        <label>
          Review:
          <textarea
            value={reviewText}
            onChange={(e) => setReviewText(e.target.value)}
            required
          />
        </label>
        <br />
        <button type="submit">Submit Review</button>
      </form>
    </div>
  );
};

export default MovieDetails;
