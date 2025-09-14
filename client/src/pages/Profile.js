// client/src/pages/Profile.js
import React, { useEffect, useState } from 'react';
import { fetchProfile } from '../api/api';
import { useNavigate } from 'react-router-dom';

const Profile = () => {
  const [profile, setProfile] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const loadProfile = async () => {
      try {
        const data = await fetchProfile();
        setProfile(data);
      } catch (err) {
        alert('⚠️ Please log in first.');
        navigate('/login');
      }
    };
    loadProfile();
  }, [navigate]);

  if (!profile) return <p>Loading profile...</p>;

  return (
    <div className="profile-page">
      <h2>My Profile</h2>
      <p><strong>Name:</strong> {profile.name}</p>
      <p><strong>Email:</strong> {profile.email}</p>
    </div>
  );
};

export default Profile;
