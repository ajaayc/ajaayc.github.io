import TopNavigationBar from './TopNavigationBar';
import RRTAnimationPanel from './RRTAnimationPanel';
import LLMAnimationPanel from './LLMAnimationPanel';
import AJPortfolioPanel from './AJPortfolioPanel';
import { useRef } from 'react';

function App() {
  const portfolioRef = useRef(null);

  const scrollToSection = (id) => {
    if (!portfolioRef.current) return;
    const el = portfolioRef.current.querySelector(`#${id}`);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Top Navigation Bar */}
      <TopNavigationBar scrollToSection={scrollToSection} />

      {/* Full-width animation panel */}
      <RRTAnimationPanel />

      {/* Full-width animation panel */}
      <LLMAnimationPanel />

      {/* Portfolio with left panel and cards */}
      <div ref={portfolioRef} className="flex flex-1">
        <AJPortfolioPanel />
      </div>

    </div>
  );
}

export default App;
