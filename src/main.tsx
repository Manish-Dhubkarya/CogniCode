import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.tsx';
import './index.css';

// 👇 This handles redirect from 404.html (refresh fix)
const redirect = new URLSearchParams(window.location.search).get('redirect');
if (redirect) {
  window.history.replaceState(null, '', redirect);
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter basename="/CogniCode_Website">
      <App />
    </BrowserRouter>
  </StrictMode>
);
