
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// Register Service Worker for PWA
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    // We use a simple relative path to avoid the 'Invalid URL' error from the URL constructor.
    // Modern browsers resolve this correctly relative to the current script's location.
    navigator.serviceWorker.register('./sw.js')
      .then(registration => {
        console.log('SW: Registered with scope:', registration.scope);
      })
      .catch(error => {
        // If relative registration fails, we try to use the origin to bypass sandbox quirks.
        console.warn('SW: Relative registration failed, trying origin-based...', error);
        const originSwUrl = window.location.origin + window.location.pathname.replace(/\/[^\/]*$/, '/sw.js');
        navigator.serviceWorker.register(originSwUrl)
          .then(reg => console.log('SW: Registered with origin URL:', reg.scope))
          .catch(err => console.error('SW: Registration completely failed:', err));
      });
  });
}

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("Could not find root element to mount to");
}

const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
