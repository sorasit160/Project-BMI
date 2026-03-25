import React, { useState } from 'react';
import { LABELS } from '../constants';

const BmiForm = ({ onResult }) => {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [name, setName] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!weight || !height) return;

    setLoading(true);
    try {
      const response = await fetch('http://localhost:5000/api/calculate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ weight: Number(weight), height: Number(height), name }),
      });
      const data = await response.json();
      onResult(data);
    } catch (error) {
      console.error(error);
      alert(LABELS.BACKEND_ERROR);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="glass-card fade-in" style={{ animationDelay: '0.1s' }}>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
        <div className="input-group">
          <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-muted)' }}>{LABELS.NAME}</label>
          <input 
            type="text" 
            value={name} 
            onChange={(e) => setName(e.target.value)}
            placeholder="เช่น สมชาย"
            style={inputStyle}
          />
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
          <div className="input-group">
            <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-muted)' }}>{LABELS.WEIGHT}</label>
            <input 
              type="number" 
              required 
              value={weight} 
              onChange={(e) => setWeight(e.target.value)}
              placeholder="0.0"
              style={inputStyle}
            />
          </div>
          <div className="input-group">
            <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-muted)' }}>{LABELS.HEIGHT}</label>
            <input 
              type="number" 
              required 
              value={height} 
              onChange={(e) => setHeight(e.target.value)}
              placeholder="0.0"
              style={inputStyle}
            />
          </div>
        </div>
        <button 
          type="submit" 
          disabled={loading}
          style={buttonStyle}
        >
          {loading ? 'กำลังคำนวณ...' : LABELS.CALCULATE}
        </button>
      </form>
    </div>
  );
};

const inputStyle = {
  width: '100%',
  padding: '1rem',
  background: 'rgba(255, 255, 255, 0.03)',
  border: '1px solid var(--glass-border)',
  borderRadius: '12px',
  color: 'white',
  outline: 'none',
  transition: 'all 0.3s ease',
};

const buttonStyle = {
  width: '100%',
  padding: '1.2rem',
  background: 'linear-gradient(to right, var(--primary), var(--secondary))',
  border: 'none',
  borderRadius: '12px',
  color: 'white',
  fontWeight: 'bold',
  cursor: 'pointer',
  transition: 'transform 0.2s ease, opacity 0.2s ease',
  marginTop: '1rem',
};

export default BmiForm;
