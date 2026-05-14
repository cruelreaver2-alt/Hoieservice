import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

// Enable mouse wheel scrolling
const handleWheel = (e: WheelEvent) => {
  const scrollMultiplier = 3.5;
  const delta = e.deltaY * scrollMultiplier;
  window.scrollBy({ top: delta, behavior: 'auto' });
};

window.addEventListener('wheel', handleWheel, { passive: false, capture: true });

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
