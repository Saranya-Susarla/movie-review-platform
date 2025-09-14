import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <nav style={{ padding: '1rem', borderBottom: '1px solid #ccc' }}>
    <Link to="/" style={{ marginRight: '1rem' }}>Home</Link>
    <Link to="/movies" style={{ marginRight: '1rem' }}>Movies</Link>
    <Link to="/profile" style={{ marginRight: '1rem' }}>Profile</Link>
    <Link to="/login" style={{ marginRight: '1rem' }}>Login</Link>
    <Link to="/register">Register</Link>
  </nav>
);

export default Header;
