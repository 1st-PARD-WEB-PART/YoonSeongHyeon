import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import firebaseapp from './firebase';
console.log(firebaseapp);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
