import React, { useState, useRef } from 'react';
import TopNavigationBar from './TopNavigationBar';
import LLMAnimationPanel from './LLMAnimationPanel';
import AJPortfolioPanel from './AJPortfolioPanel';
import LeftPanel from './LeftPanel';
import RRTPromptPanel from './RRTPromptPanel';
import RRTAnimationPanel from './RRTAnimationPanel';

function App() {
  const [rrtStarted, setRrtStarted] = useState(false);
  const rrtPanelRef = useRef(null);

  const handleStartRRT = () => {
    setRrtStarted(true);
    if (rrtPanelRef.current) {
      setTimeout(() => {
        rrtPanelRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 50);
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Top Navigation Bar (fixed on all screens) */}
      <TopNavigationBar scrollToSection={(id) => {
        const el = document.querySelector(`#${id}`);
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }} />

      {/* Layout container: left panel + main content */}
      <div className="flex flex-col md:flex-row">
        {/* LEFT PANEL */}
        <div className="w-full md:w-80 md:h-screen md:fixed md:top-16 left-0 bg-green-50 border-r border-green-200 pt-16 md:pt-0">
          <LeftPanel />
        </div>

        {/* MAIN CONTENT */}
        <div className="flex-1 md:ml-80 pt-0 md:pt-16">
          <LLMAnimationPanel />
          <AJPortfolioPanel />

          {/* RRT Section */}
          <section id="rrt" className="py-4">
            <RRTPromptPanel onEnter={handleStartRRT} />
            <RRTAnimationPanel ref={rrtPanelRef} startAnimation={rrtStarted} />
          </section>
        </div>
      </div>
    </div>
  );
}

export default App;
