import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx'; // ✅ Must match the file name
import './index.css'; // or whatever CSS you use

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
