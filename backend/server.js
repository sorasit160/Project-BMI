const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

// In-memory history for simplicity (as requested "easy to understand")
let history = [];

// BMI Categories in Thai as requested
const getBMICategory = (bmi) => {
  if (bmi < 18.5) return { category: 'ผอม / น้ำหนักน้อย', color: '#3498db' };
  if (bmi < 23.0) return { category: 'ปกติ / สุขภาพดี', color: '#2ecc71' };
  if (bmi < 25.0) return { category: 'ท้วม / โรคอ้วนระดับ 1', color: '#f1c40f' };
  if (bmi < 30.0) return { category: 'อ้วน / โรคอ้วนระดับ 2', color: '#e67e22' };
  return { category: 'อ้วนมาก / โรคอ้วนระดับ 3', color: '#e74c3c' };
};

// API: Calculate BMI
app.post('/api/calculate', (req, res) => {
  const { weight, height, name } = req.body;

  if (!weight || !height) {
    return res.status(400).json({ error: 'กรุณากรอกน้ำหนักและส่วนสูง' });
  }

  const heightInMeters = height / 100;
  const bmiValue = (weight / (heightInMeters * heightInMeters)).toFixed(2);
  const result = {
    id: Date.now(),
    name: name || 'ผู้ใช้งาน',
    weight,
    height,
    bmi: parseFloat(bmiValue),
    ...getBMICategory(bmiValue),
    date: new Date().toLocaleString('th-TH'),
  };

  history.unshift(result); // Add to beginning of history
  if (history.length > 10) history.pop(); // Keep only last 10 records

  res.json(result);
});

// API: Get History
app.get('/api/history', (req, res) => {
  res.json(history);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
