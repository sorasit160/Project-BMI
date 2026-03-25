import React from 'react';
import { LABELS } from '../constants';

const BmiHistory = ({ history }) => {
  if (!history || history.length === 0) return null;

  return (
    <div className="glass-card fade-in" style={{ marginTop: '2rem', animationDelay: '0.2s' }}>
      <h3 style={{ marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
        {LABELS.HISTORY_TITLE}
      </h3>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        {history.map((item) => (
          <div key={item.id} style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '1rem',
            background: 'rgba(255, 255, 255, 0.02)',
            borderRadius: '12px',
            border: '1px solid var(--glass-border)',
          }}>
            <div>
              <div style={{ fontWeight: 'bold' }}>{item.name}</div>
              <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>{item.date}</div>
            </div>
            <div style={{ textAlign: 'right' }}>
              <div style={{ fontWeight: '900', color: item.color }}>{item.bmi}</div>
              <div style={{ fontSize: '0.8rem', color: item.color }}>{item.category}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BmiHistory;
