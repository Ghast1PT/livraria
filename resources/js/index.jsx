import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';


const root = ReactDOM.createRoot(document.getElementById('root'));
var books = document.getElementById('root').getAttribute('books');

root.render(
  <React.StrictMode>
    <App books={books} />
  </React.StrictMode>
);
