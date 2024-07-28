import React from 'react';
import ReactDOM from 'react-dom/client';
import Website from './Website';
import './index.css';

const root = document.querySelector('.root');

if (root) {
  ReactDOM.createRoot(root).render(
    <React.StrictMode>
      <Website />
    </React.StrictMode>,
  );
} else {
  console.log(`Root element not found.`);
}
