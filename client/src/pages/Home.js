import React, { useEffect, useState } from 'react';
import { fetchMovies } from '../api/api';
import MovieCard from '../components/MovieCard';

const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const getMovies = async () => {
      try {
        const data = await fetchMovies();
        setMovies(data);
      } catch (err) {
        console.error('Error fetching movies:', err);
      }
    };
    getMovies();
  }, []);

  return (
    <div style={{ padding: '1rem' }}>
      <h1>Movies</h1>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {movies.length ? (
          movies.map(movie => <MovieCard key={movie._id || movie.title} movie={movie} />)
        ) : (
          <p>No movies found</p>
        )}
      </div>
    </div>
  );
};

export default Home;
