import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api';

// Create axios instance
const API = axios.create({ baseURL: API_URL });

// Add token to headers if available
API.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) config.headers.Authorization = `Bearer ${token}`;
    return config;
  },
  (error) => Promise.reject(error)
);

// =======================
// Movies
// =======================
export const fetchMovies = async () => {
  const response = await API.get('/movies');
  return response.data;
};

export const fetchMovieDetails = async (id) => {
  const response = await API.get(`/movies/${id}`);
  return response.data;
};

// =======================
// Reviews
// =======================
export const fetchMovieReviews = async (movieId) => {
  const response = await API.get(`/movies/${movieId}/reviews`);
  return response.data;
};

export const submitReview = async (movieId, rating, text) => {
  const response = await API.post(`/movies/${movieId}/reviews`, { rating, text });
  return response.data;
};

// =======================
// Auth
// =======================
export const loginUser = async (email, password) => {
  const response = await API.post('/auth/login', { email, password });
  return response.data;
};

export const registerUser = async (name, email, password) => {
  const response = await API.post('/auth/register', { name, email, password });
  return response.data;
};

// =======================
// User Profile & Watchlist
// =======================
export const fetchProfile = async () => {
  const response = await API.get('/users/profile');
  return response.data;
};

export const fetchWatchlist = async () => {
  const response = await API.get('/users/watchlist');
  return response.data;
};

export const addToWatchlist = async (movieId) => {
  const response = await API.post('/users/watchlist', { movieId });
  return response.data;
};

export const removeFromWatchlist = async (movieId) => {
  const response = await API.delete(`/users/watchlist/${movieId}`);
  return response.data;
};
