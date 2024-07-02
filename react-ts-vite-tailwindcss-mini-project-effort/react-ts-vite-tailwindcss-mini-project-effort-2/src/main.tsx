import React from 'react'
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';

// default app 
import CustomApp from './App.tsx'

// styling global
import './index.css' 

ReactDOM.createRoot(document.getElementById('root')!).render(
  <>
    <Router>
    <CustomApp />
    </Router>
  </>,
)
