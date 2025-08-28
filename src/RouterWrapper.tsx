import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import VacantesPage from './pages/VacantesPage';

export default function RouterWrapper() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/vacantes" element={<VacantesPage />} />
        <Route path="/*" element={<App />} />
      </Routes>
    </BrowserRouter>
  );
}
