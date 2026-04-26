import React from 'react';
import { Link } from 'react-router-dom';

const AppDevelopment = () => {
  return (
    <div style={{ padding: '20px', color: 'white', background: '#111', minHeight: '100vh' }}>
      <h1>AppDevelopment Services</h1>
      <p>Coming soon...</p>
      <Link to="/" style={{ color: '#60a5fa' }}>Back to Home</Link>
    </div>
  );
};
export default AppDevelopment;
