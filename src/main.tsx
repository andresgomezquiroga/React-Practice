import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'; // Asegúrate de importar tu archivo de estilos aqu

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
