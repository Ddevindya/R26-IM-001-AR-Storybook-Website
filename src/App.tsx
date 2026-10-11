import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { ScrollToTop } from './components/common/ScrollToTop';

import { HomePage } from './pages/HomePage';
import { AboutResearchPage } from './pages/AboutResearchPage';
import { ComponentsPage } from './pages/ComponentsPage';
import { ArchitecturePage } from './pages/ArchitecturePage';
import { ShowcasePage } from './pages/ShowcasePage';
import { PublicationsPage } from './pages/PublicationsPage';
import { DocumentsPage } from './pages/DocumentsPage';
import { TeamPage } from './pages/TeamPage';
import { JourneyPage } from './pages/JourneyPage';
import { FutureVisionPage } from './pages/FutureVisionPage';
import { ContactPage } from './pages/ContactPage';

export function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen bg-white text-[#17243D]">
        <Navbar />
        <main className="grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/research" element={<AboutResearchPage />} />
            <Route path="/components" element={<ComponentsPage />} />
            <Route path="/architecture" element={<ArchitecturePage />} />
            <Route path="/showcase" element={<ShowcasePage />} />
            <Route path="/documents" element={<DocumentsPage />} />
            <Route path="/team" element={<TeamPage />} />
            <Route path="/journey" element={<JourneyPage />} />
            <Route path="/future" element={<FutureVisionPage />} />
            <Route path="/contact" element={<ContactPage />} />
            {/* Redirect any unmatched routes to Home */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
