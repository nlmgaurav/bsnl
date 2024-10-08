import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Individual from './pages/Individual';
import Enterprise from './pages/Enterprise';
import Tenders from './pages/Tenders';
import Investors from './pages/Investors';
import AboutBSNL from './pages/AboutBSNL';
import NotFound from './pages/NotFound';

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/individual" element={<Individual />} />
      <Route path="/enterprise" element={<Enterprise />} />
      <Route path="/tenders" element={<Tenders />} />
      <Route path="/investors" element={<Investors />} />
      <Route path="/about-bsnl" element={<AboutBSNL />} />
      <Route path="*" element={<NotFound />} /> {/* Wildcard for 404 */}
    </Routes>
  );
}

export default AppRoutes;
