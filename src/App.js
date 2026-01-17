// App.js
import TopNavigationBar from './TopNavigationBar';
import RRTAnimationPanel from './RRTAnimationPanel';
import LLMAnimationPanel from './LLMAnimationPanel';
import AJPortfolioPanel from './AJPortfolioPanel';
import LeftPanel from './LeftPanel';
import RRTPromptPanel from './RRTPromptPanel';
import { useState, useRef } from 'react';

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
      {/* Top Navigation Bar */}
      <TopNavigationBar
        scrollToSection={(id) => {
          const el = document.getElementById(id);
          if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }}
      />

      {/* Main container */}
      <div className="flex flex-col md:flex-row w-full">
        {/* Left panel */}
        <div className="w-full md:w-80 md:h-auto md:fixed md:top-0 md:left-0">
          <LeftPanel />
        </div>

        {/* Right/main content */}
        <div className="flex-1 md:ml-80 md:pt-16">
          <LLMAnimationPanel />
          <AJPortfolioPanel />

          <section id="rrt" className="py-16 px-0 space-y-4">
            <RRTPromptPanel onEnter={handleStartRRT} />
            <RRTAnimationPanel ref={rrtPanelRef} startAnimation={rrtStarted} />
          </section>
        </div>
      </div>
    </div>
  );
}

export default App;
