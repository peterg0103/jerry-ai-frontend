import React from 'react';
import { Link } from 'react-router-dom';

const UploadBanner = () => {
  return (
    <div style={{ padding: '20px', color: 'white', background: '#111', minHeight: '100vh' }}>
      <h1>Upload Banner</h1>
      <p>Upload your company banners here - coming soon...</p>
      <Link to="/" style={{ color: '#60a5fa' }}>Back to Home</Link>
    </div>
  );
};

export default UploadBanner;
