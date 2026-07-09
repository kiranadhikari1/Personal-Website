import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter, Routes, Route } from 'react-router-dom';

import App from './App';
import Resume from './sections/Resume';
import Gaming from './sections/Gaming';
import './index.css';
import './App.css';
import './styles/navbar.css';
import './styles/hero.css';
import './styles/about.css';
import './styles/projects.css';
import './styles/contact.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <HashRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/gaming" element={<Gaming />} />
      </Routes>
    </HashRouter>
  </React.StrictMode>
);