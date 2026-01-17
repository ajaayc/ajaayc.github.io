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
      // Wait for the panel to mount and have a height
      setTimeout(() => {
        rrtPanelRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 50);
    }
  };

  const scrollToSection = (id) => {
    const el = document.querySelector(`#${id}`);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div className="h-screen flex flex-col">
      {/* Top Navigation Bar */}
      <TopNavigationBar scrollToSection={scrollToSection} />

      {/* Main Content Area */}
      <div className="flex flex-1 overflow-hidden flex-col md:flex-row">

        {/* LEFT COLUMN: Left Panel */}
        <div className="flex-shrink-0 bg-green-50 md:h-full">
          <LeftPanel />
        </div>

        {/* RIGHT COLUMN: LLM + Portfolio */}
        <div className="flex flex-col flex-1 overflow-auto">
          {/* LLM Animation Panel */}
          <LLMAnimationPanel />

          {/* Portfolio */}
          <AJPortfolioPanel />

          {/* RRT Section */}
          <section id="rrt" className="py-8 px-0 space-y-4">
            {/* RRTPromptPanel: user presses Enter to start */}
            <RRTPromptPanel onEnter={handleStartRRT} />

            {/* RRTAnimationPanel: starts animation when rrtStarted is true */}
            <RRTAnimationPanel ref={rrtPanelRef} startAnimation={rrtStarted} />
          </section>
        </div>

      </div>
    </div>
  );
}

export default App;
