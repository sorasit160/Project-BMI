# BMI Calculator (React + Express)

เว็บแอปพลิเคชันสำหรับคำนวณดัชนีมวลกาย (BMI) ที่มาพร้อมกับดีไซน์ทันสมัย (Glassmorphism) และระบบประวัติการคำนวณ

## โครงสร้างโปรเจกต์
- `/backend`: Node.js + Express API สำหรับคำนวณและเก็บประวัติ
- `/frontend`: React + Vite พร้อมการตกแต่งด้วย Vanilla CSS

## วิธีการใช้งาน

### 1. การติดตั้ง (Setup)
คุณต้องติดตั้ง Node.js ในเครื่องก่อน จากนั้นทำตามขั้นตอนดังนี้:

**สำหรับ Backend:**
```bash
cd backend
npm install
npm start
```
*Server จะรันอยู่ที่ http://localhost:5000*

**สำหรับ Frontend:**
```bash
cd frontend
npm install
npm run dev
```
*แอปพลิเคชันจะรันอยู่ที่ http://localhost:5173*

### 2. การพัฒนาต่อ (Extensibility)
- **UI/UX**: แก้ไขได้ที่ `frontend/src/App.css`
- **Logic**: แก้ไขได้ที่ `backend/server.js`
- **Labels**: แก้ไขภาษาหรือข้อความได้ที่ `frontend/src/constants/index.js`

## เทคโนโลยีที่ใช้
- Frontend: React, Vite, Vanilla CSS
- Backend: Node.js, Express, CORS
- Design: Glassmorphism UI
