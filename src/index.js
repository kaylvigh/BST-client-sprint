// index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import './style/globalStyle.css';
import TreeApp from './TreeApp';
import monitorPerformance from './monitorPerformance';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <TreeApp />
  </React.StrictMode>
);

monitorPerformance();
