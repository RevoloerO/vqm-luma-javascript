import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom';
import { ProgressProvider } from './contexts/ProgressContext.jsx';
import { BookmarkProvider } from './contexts/BookmarkContext.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <ProgressProvider>
        <BookmarkProvider>
          <App />
        </BookmarkProvider>
      </ProgressProvider>
    </BrowserRouter>
  </StrictMode>
);
