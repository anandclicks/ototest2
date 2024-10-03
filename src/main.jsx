import React, { StrictMode } from 'react';
import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { UserContextProvider } from './ContextApi/Usercontext.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <StrictMode>
   <UserContextProvider>
   <App />
   </UserContextProvider>
  </StrictMode>
    </BrowserRouter>
);
