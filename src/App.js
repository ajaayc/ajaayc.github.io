import TopAnimationPanel from './TopAnimationPanel';
import AJPortfolioPanel from './AJPortfolioPanel';

function App() {
  return (
    <div className="relative">
      {/* Top full-width animation panel */}
      <TopAnimationPanel />

      {/* Portfolio panel below the animation */}
      <AJPortfolioPanel />
    </div>
  );
}

export default App;
