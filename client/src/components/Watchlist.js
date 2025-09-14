import React, { useEffect, useState } from 'react';
import API from '../api/api';
import MovieCard from './MovieCard';

const Watchlist = ({ userId }) => {
  const [watchlist, setWatchlist] = useState([]);

  useEffect(() => {
    const fetchWatchlist = async () => {
      const res = await API.get(`/users/${userId}/watchlist`);
      setWatchlist(res.data);
    };
    fetchWatchlist();
  }, [userId]);

  return (
    <div>
      <h2>My Watchlist</h2>
      <div className="watchlist">
        {watchlist.map(item => <MovieCard key={item._id} movie={item.movie} />)}
      </div>
    </div>
  );
};

export default Watchlist;

