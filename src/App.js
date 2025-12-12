import React from 'react';
import TopNavigationBar from './TopNavigationBar';
import TopAnimationPanel from './TopAnimationPanel';
import AJPortfolioPanel from './AJPortfolioPanel';

function App() {
  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="relative">
      {/* Navbar at the top */}
      <TopNavigationBar scrollToSection={scrollToSection} id="top-nav" />

      {/* Animation panel under the navbar */}
      <TopAnimationPanel navbarId="top-nav" />

      {/* Portfolio panel */}
      <AJPortfolioPanel />
    </div>
  );
}

export default App;
