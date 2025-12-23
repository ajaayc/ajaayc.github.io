import React, { useRef, useEffect, useState } from 'react';

export default function RRTAnimationPanel({ navbarId }) {
  const canvasRef = useRef(null);
  const initializedRef = useRef(false);
  const [panelHeight, setPanelHeight] = useState(window.innerHeight);
  const [startAnimation, setStartAnimation] = useState(false);

  const [obstacles, setObstacles] = useState([]);
  const [start, setStart] = useState({ x: 100, y: 0 });
  const [goal, setGoal] = useState({ x: 0, y: 0 });

  // Update panel height
  useEffect(() => {
    function updateHeight() {
      const navbar = document.getElementById(navbarId);
      const navbarHeight = navbar ? navbar.offsetHeight : 0;
      const fraction = 0.8;
      setPanelHeight((window.innerHeight - navbarHeight) * fraction);
    }

    updateHeight();
    window.addEventListener('resize', updateHeight);
    return () => window.removeEventListener('resize', updateHeight);
  }, [navbarId]);

  // Initialize static scene
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    // Use parent container width to avoid stretched drawing
    const width = canvas.parentElement.offsetWidth;
    const height = panelHeight;

    canvas.width = width;
    canvas.height = height;

    const s = { x: 100, y: height / 2 };
    const g = { x: width - 100, y: height / 2 };
    setStart(s);
    setGoal(g);

    function rectContainsPoint(rect, p) {
      return p.x >= rect.x && p.x <= rect.x + rect.width && p.y >= rect.y && p.y <= rect.y + rect.height;
    }

    function generateObstacles(count = 25) {
      const obs = [];
      const minSize = 60;
      const maxSize = 160;
      const padding = 40;
      while (obs.length < count) {
        const w = minSize + Math.random() * (maxSize - minSize);
        const h = minSize + Math.random() * (maxSize - minSize);
        const x = padding + Math.random() * (width - w - 2 * padding);
        const y = padding + Math.random() * (height - h - 2 * padding);
        const candidate = { x, y, width: w, height: h };
        if (rectContainsPoint(candidate, s) || rectContainsPoint(candidate, g)) continue;
        obs.push(candidate);
      }
      return obs;
    }

    const obsArray = generateObstacles();
    setObstacles(obsArray);

    // Draw static scene once
    ctx.clearRect(0, 0, width, height);
    ctx.fillStyle = 'gray';
    obsArray.forEach(o => ctx.fillRect(o.x, o.y, o.width, o.height));

    // Draw start node (square)
    ctx.fillStyle = 'green';
    ctx.fillRect(s.x - 10, s.y - 10, 20, 20);

    // Draw goal node (star)
    ctx.fillStyle = 'yellow';
    ctx.beginPath();
    const spikes = 5, outer = 14, inner = 6;
    let rot = Math.PI / 2 * 3;
    let x = g.x, y = g.y;
    let step = Math.PI / spikes;
    ctx.moveTo(x, y - outer);
    for (let i = 0; i < spikes; i++) {
      ctx.lineTo(x + Math.cos(rot) * outer, y + Math.sin(rot) * outer);
      rot += step;
      ctx.lineTo(x + Math.cos(rot) * inner, y + Math.sin(rot) * inner);
      rot += step;
    }
    ctx.closePath();
    ctx.fill();
  }, [panelHeight]);

  // Animation effect
  useEffect(() => {
    if (!startAnimation) return;
    if (initializedRef.current) return;
    initializedRef.current = true;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const width = canvas.width;
    const height = canvas.height;

    const nodesStart = [{ node: start, parent: null }];
    const nodesGoal = [{ node: goal, parent: null }];

    function distance(a, b) { return Math.hypot(a.x - b.x, a.y - b.y); }
    function randomNode() { return { x: Math.random() * width, y: Math.random() * height }; }
    function nearest(nodes, p) { return nodes.reduce((a, b) => distance(a.node, p) < distance(b.node, p) ? a : b); }
    function stepToward(from, to, stepSize = 20) {
      const theta = Math.atan2(to.y - from.y, to.x - from.x);
      return { x: from.x + stepSize * Math.cos(theta), y: from.y + stepSize * Math.sin(theta) };
    }
    function collides(node) { return obstacles.some(o => node.x >= o.x && node.x <= o.x + o.width && node.y >= o.y && node.y <= o.y + o.height); }
    function isPathFree(a, b, stepSize = 5) {
      const dist = distance(a, b);
      const steps = Math.ceil(dist / stepSize);
      for (let i = 1; i <= steps; i++) {
        const t = i / steps;
        const x = a.x + t * (b.x - a.x);
        const y = a.y + t * (b.y - a.y);
        if (collides({ x, y })) return false;
      }
      return true;
    }

    function drawNode(node, type = 'circle', color = 'green', size = 1) {
      ctx.fillStyle = color;
      ctx.beginPath();
      if (type === 'circle') ctx.arc(node.x, node.y, 5 * size, 0, 2 * Math.PI);
      else if (type === 'square') ctx.fillRect(node.x - 5 * size, node.y - 5 * size, 10 * size, 10 * size);
      ctx.fill();
    }
    function drawLine(a, b, color = 'blue', width = 2) { ctx.strokeStyle = color; ctx.lineWidth = width; ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(b.x, b.y); ctx.stroke(); }

    let connected = false;
    let finalPath = [];

    function animate() {
      if (connected) return;

      // Start tree
      const randStart = randomNode();
      const nearestStart = nearest(nodesStart, randStart);
      const newStart = stepToward(nearestStart.node, randStart);
      if (!collides(newStart) && isPathFree(nearestStart.node, newStart)) {
        const node = { node: newStart, parent: nearestStart };
        nodesStart.push(node);
        drawLine(nearestStart.node, newStart, 'green');
        drawNode(newStart, 'circle', 'green');
      }

      // Goal tree
      const randGoal = randomNode();
      const nearestGoal = nearest(nodesGoal, randGoal);
      const newGoal = stepToward(nearestGoal.node, randGoal);
      if (!collides(newGoal) && isPathFree(nearestGoal.node, newGoal)) {
        const node = { node: newGoal, parent: nearestGoal };
        nodesGoal.push(node);
        drawLine(nearestGoal.node, newGoal, 'red');
        drawNode(newGoal, 'circle', 'red');
      }

      // Check for connection
      for (const nStart of nodesStart) {
        for (const nGoal of nodesGoal) {
          if (distance(nStart.node, nGoal.node) < 10 && isPathFree(nStart.node, nGoal.node)) {
            let path = [];
            let t = nStart;
            while (t) { path.push(t.node); t = t.parent; }
            path.reverse();
            t = nGoal;
            while (t) { path.push(t.node); t = t.parent; }
            finalPath = path;
            for (let i = 0; i < finalPath.length - 1; i++) drawLine(finalPath[i], finalPath[i + 1], 'purple', 4);
            connected = true;
            return;
          }
        }
      }

      requestAnimationFrame(animate);
    }

    requestAnimationFrame(animate);
  }, [startAnimation, panelHeight, start, goal, obstacles]);

  return (
    <div className="w-full relative bg-green-100" style={{ height: `${panelHeight}px` }}>
      {!startAnimation && (
        <div className="absolute top-4 left-4 z-10">
          <button
            className="px-4 py-2 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition-colors"
            onClick={() => setStartAnimation(true)}
          >
            Check out this animation of a bidirection RRT! 
          </button>
        </div>
      )}
      <canvas ref={canvasRef} className="w-full h-full" />
    </div>
  );
}
