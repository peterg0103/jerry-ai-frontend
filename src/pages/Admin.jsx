import React from 'react';
import { Link } from 'react-router-dom';
import LTLanguageSwitcher from "../components/UI/LTLanguageSwitcher";

function Admin() {
  return (
    <div style={{ minHeight: '100vh', background: '#111827', color: 'white' }}>
      <header style={{ padding: '1rem', borderBottom: '1px solid #1f2937' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', justifyContent: 'space-between' }}>
          <span style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#60a5fa' }}>Jerry AI Admin</span>
          <Link to="/" style={{ color: '#9ca3af', textDecoration: 'none' }}>Back to Site</Link>
        </div>
      </header>
      <main style={{ padding: '2rem', maxWidth: '1200px', margin: '0 auto' }}>
        <h1 style={{ fontSize: '2rem', marginBottom: '2rem' }}>Admin Dashboard</h1>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1rem' }}>
          {['Total Users', 'Active Today', 'Total Messages', 'Response Time'].map((stat, i) => (
            <div key={i} style={{ background: '#1f2937', padding: '1.5rem', borderRadius: '0.5rem' }}>
              <div style={{ color: '#9ca3af', marginBottom: '0.5rem' }}>{stat}</div>
              <div style={{ fontSize: '2rem', fontWeight: 'bold' }}>{[42, 12, 156, '1.2s'][i]}</div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

export default Admin;
