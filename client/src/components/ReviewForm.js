import React, { useState } from 'react';
import API from '../api/api';

const ReviewForm = ({ movieId, onReviewAdded }) => {
  const [rating, setRating] = useState(5);
  const [reviewText, setReviewText] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await API.post(`/reviews/${movieId}`, { rating, reviewText });
      setRating(5);
      setReviewText('');
      onReviewAdded();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Rating:</label>
      <input type="number" value={rating} min="1" max="5" onChange={e => setRating(e.target.value)} />
      <label>Review:</label>
      <textarea value={reviewText} onChange={e => setReviewText(e.target.value)}></textarea>
      <button type="submit">Submit Review</button>
    </form>
  );
};

export default ReviewForm;

