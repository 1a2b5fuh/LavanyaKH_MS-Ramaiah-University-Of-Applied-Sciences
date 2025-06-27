import React, { useState } from 'react';

function App() {
  const [form, setForm] = useState({
    safety: 5,
    schools: 5,
    nightlife: 5,
    parks: 5,
    affordability: 5,
    public_transport: 5
  });
  const [results, setResults] = useState([]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: Number(e.target.value) });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch('http://localhost:5000/match', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form)
    });
    const data = await res.json();
    setResults(data.matches);
  };

  // Elegant background
  const backgroundStyle = {
    minHeight: '100vh',
    width: '100vw',
    background: 'linear-gradient(120deg, #f8fafc 0%, #e0e7ef 100%)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  };

  const cardStyle = {
    background: 'rgba(255,255,255,0.98)',
    borderRadius: 24,
    boxShadow: '0 8px 32px rgba(44, 62, 80, 0.12)',
    padding: 44,
    maxWidth: 540,
    width: '100%',
    fontFamily: 'Segoe UI, Arial, sans-serif',
    border: '1px solid #e3e8ee'
  };

  const sliderStyle = {
    width: 180,
    marginLeft: 16,
    accentColor: '#3b82f6'
  };

  const labelStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    fontWeight: 500,
    marginBottom: 14,
    color: '#2d3748'
  };

  const buttonStyle = {
    background: 'linear-gradient(90deg, #3b82f6 0%, #60a5fa 100%)',
    color: '#fff',
    border: 'none',
    borderRadius: 10,
    padding: '13px 32px',
    fontWeight: 600,
    fontSize: 18,
    cursor: 'pointer',
    marginTop: 24,
    boxShadow: '0 2px 8px rgba(59, 130, 246, 0.13)',
    letterSpacing: 0.5
  };

  const resultCard = {
    background: '#f1f5fb',
    borderRadius: 10,
    padding: 16,
    marginBottom: 14,
    boxShadow: '0 1px 6px rgba(59,130,246,0.07)',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    fontSize: 17
  };

  return (
    <div style={backgroundStyle}>
      <div style={cardStyle}>
        <h2 style={{
          color: '#2563eb',
          textAlign: 'center',
          marginBottom: 32,
          letterSpacing: 1.2,
          fontWeight: 700,
          fontSize: 32
        }}>
          NeighborFit <br/>
          <span style={{ fontSize: 18, color: '#64748b', fontWeight: 400, marginLeft: 8 }}>
            Find Your Neighborhood
          </span>
        </h2>
        <form onSubmit={handleSubmit}>
          {Object.keys(form).map((key) => (
            <div key={key} style={labelStyle}>
              <label htmlFor={key} style={{ flex: 1, textTransform: 'capitalize' }}>
                {key.replace('_', ' ')}
              </label>
              <input
                id={key}
                type="range"
                min="1"
                max="10"
                name={key}
                value={form[key]}
                onChange={handleChange}
                style={sliderStyle}
              />
              <span style={{
                width: 32,
                textAlign: 'center',
                color: '#2563eb',
                fontWeight: 600,
                fontSize: 18
              }}>
                {form[key]}
              </span>
            </div>
          ))}
          <div style={{ textAlign: 'center' }}>
            <button type="submit" style={buttonStyle}>
              Find My Neighborhood
            </button>
          </div>
        </form>
        <div style={{ marginTop: 44 }}>
          <h3 style={{
            color: '#2563eb',
            marginBottom: 20,
            letterSpacing: 0.7,
            fontWeight: 600,
            fontSize: 22
          }}>
            Best Matches:
          </h3>
          {results.length === 0 && (
            <div style={{ color: '#94a3b8', textAlign: 'center', fontSize: 16 }}>
              No results yet. Adjust preferences and submit!
            </div>
          )}
          <ul style={{ listStyle: 'none', padding: 0 }}>
            {results.map((r, idx) => (
              <li key={idx} style={resultCard}>
                <span style={{ fontWeight: 600, color: '#2563eb' }}>{r.name}</span>
                <span style={{ color: '#64748b', fontWeight: 500 }}>Score: {r.score}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;