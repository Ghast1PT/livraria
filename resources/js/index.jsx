import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';


const root = ReactDOM.createRoot(document.getElementById('root'));
var data = document.getElementById('root').getAttribute('data');

root.render(
  <React.StrictMode>
    <App data={data} />
  </React.StrictMode>
);
