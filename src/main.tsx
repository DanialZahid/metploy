import React from 'react';
import ReactDOM from 'react-dom/client';
import './css/index.css';

const root = document.querySelector('.root');

if (root) {
  ReactDOM.createRoot(root).render(<React.StrictMode></React.StrictMode>);
} else {
  console.log(`Root element not found.`);
}
