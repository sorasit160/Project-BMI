import React, { useState, useEffect } from 'react';
import BmiForm from './components/BmiForm';
import BmiResult from './components/BmiResult';
import BmiHistory from './components/BmiHistory';
import { LABELS, API_BASE_URL } from './constants';
import './App.css';

function App() {
  const [result, setResult] = useState(null);
  const [history, setHistory] = useState([]);

  const fetchHistory = async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/history`);
      const data = await response.json();
      setHistory(data);
    } catch (error) {
      console.error('Failed to fetch history:', error);
    }
  };

  useEffect(() => {
    fetchHistory();
  }, []);

  const handleNewResult = (newResult) => {
    setResult(newResult);
    // Refresh history
    fetchHistory();
  };

  return (
    <div className="app-container">
      <h1 className="title fade-in">{LABELS.TITLE}</h1>
      <p className="subtitle fade-in">{LABELS.SUBTITLE}</p>

      <div className="container">
        <BmiForm onResult={handleNewResult} />
        {result ? (
          <BmiResult result={result} />
        ) : (
          <div className="glass-card fade-in" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', color: 'var(--text-muted)' }}>
            กรุณากรอกข้อมูลเพื่อคำนวณผลลัพธ์
          </div>
        )}
      </div>

      <BmiHistory history={history} />
      
      <footer style={{ marginTop: '3rem', textAlign: 'center', color: 'var(--text-muted)', fontSize: '0.8rem' }}>
        &copy; {new Date().getFullYear()} BMI Calculator - พัฒนาด้วย React และ Express
      </footer>
    </div>
  );
}

export default App;
