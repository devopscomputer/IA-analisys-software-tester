import React from 'react';
import ReactDOM from 'react-dom/client';
import HomeScreen from './screens/HomeScreen'; // A HomeScreen é renderizada diretamente

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <HomeScreen />  // Renderizando diretamente, sem fragment ou div
);
