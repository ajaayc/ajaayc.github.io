import TopNavigationBar from './TopNavigationBar';
import RRTAnimationPanel from './RRTAnimationPanel';
import LLMAnimationPanel from './LLMAnimationPanel';
import AJPortfolioPanel from './AJPortfolioPanel';
import LeftPanel from './LeftPanel';
import RRTPromptPanel from './RRTPromptPanel';
import { useState, useRef } from 'react';

function App() {
  const portfolioRef = useRef(null);
  const [rrtStarted, setRrtStarted] = useState(false);

  //const rrtAnimationRef = useRef(null);
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
    if (!portfolioRef.current) return;
    const el = portfolioRef.current.querySelector(`#${id}`);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Top Navigation Bar */}
      <TopNavigationBar scrollToSection={scrollToSection} />

      {/* Main Content Area */}
      <div className="flex flex-1 w-full relative">

        {/* LEFT COLUMN: Left Panel */}
        <div className="w-80 shrink-0 h-screen fixed top-0 left-0">
          <LeftPanel />
        </div>

        {/* RIGHT COLUMN: LLM + Portfolio */}
        <div className="flex flex-col flex-1 ml-80">
          {/* LLM Animation Panel */}
          <LLMAnimationPanel />

          {/* Portfolio */}
          <div ref={portfolioRef}>
            <AJPortfolioPanel />
          </div>

          {/* RRT Section */}
          <section id="rrt" className="pt-16 pb-0 px-0">
          {/* RRTPromptPanel: user presses Enter to start */}
            <RRTPromptPanel onEnter={handleStartRRT} />

            {/* RRTAnimationPanel: starts animation when rrtStarted is true */}
            <RRTAnimationPanel ref={rrtPanelRef} navbarId="navbar" startAnimation={rrtStarted} />
          </section>
        </div>

      </div>



      {/* Full-width animation panel */}
      {/* <RRTAnimationPanel /> */}

    </div>
  );
}

export default App;
