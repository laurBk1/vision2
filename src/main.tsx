import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

// Initialize Trusted Types policy for React
if (window.trustedTypes && window.trustedTypes.createPolicy) {
  try {
    window.trustedTypes.createPolicy('react-app', {
      createHTML: (input: string) => input,
      createScript: (input: string) => input,
      createScriptURL: (input: string) => input
    });
  } catch (e) {
    // Policy already exists, continue
  }
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
