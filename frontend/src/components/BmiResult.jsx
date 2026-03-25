import React from 'react';
import { LABELS } from '../constants';

const BmiResult = ({ result }) => {
  if (!result) return null;

  return (
    <div className="glass-card fade-in" style={{ 
      borderLeft: `8px solid ${result.color}`,
      display: 'flex', 
      flexDirection: 'column', 
      justifyContent: 'center', 
      alignItems: 'center',
      textAlign: 'center',
      gap: '1rem'
    }}>
      <h3 style={{ color: 'var(--text-muted)', fontSize: '1rem' }}>{LABELS.RESULT_TITLE}</h3>
      <div style={{ fontSize: '4rem', fontWeight: '900', color: result.color }}>
        {result.bmi}
      </div>
      <div style={{ 
        background: `${result.color}22`, 
        color: result.color, 
        padding: '0.5rem 1.5rem', 
        borderRadius: '50px',
        fontWeight: 'bold',
        fontSize: '1.2rem'
      }}>
        {result.category}
      </div>
      <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginTop: '1rem' }}>
        ผู้ใช้งาน: {result.name} | {result.date}
      </p>
    </div>
  );
};

export default BmiResult;
