// TopAnimationPanel.jsx
import React, { useRef, useEffect, useState } from 'react';

export default function TopAnimationPanel({ navbarId }) {
  const canvasRef = useRef(null);
  const initializedRef = useRef(false);
  const [panelHeight, setPanelHeight] = useState(window.innerHeight);

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

  useEffect(() => {
    // 🔒 Prevent double initialization (React Strict Mode fix)
    if (initializedRef.current) return;
    initializedRef.current = true;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = panelHeight;

    const start = { x: 100, y: canvas.height / 2 };
    const goal = { x: canvas.width - 100, y: canvas.height / 2 };

    const nodesStart = [{ node: start, parent: null }];
    const nodesGoal = [{ node: goal, parent: null }];

    function distance(a, b) {
      return Math.hypot(a.x - b.x, a.y - b.y);
    }

    function rectContainsPoint(rect, p) {
      return (
        p.x >= rect.x &&
        p.x <= rect.x + rect.width &&
        p.y >= rect.y &&
        p.y <= rect.y + rect.height
      );
    }

    function generateRandomObstacles(count = 25) {
      const obstacles = [];
      const minSize = 60;
      const maxSize = 160;
      const padding = 40;

      while (obstacles.length < count) {
        const width = minSize + Math.random() * (maxSize - minSize);
        const height = minSize + Math.random() * (maxSize - minSize);

        const x =
          padding + Math.random() * (canvas.width - width - 2 * padding);
        const y =
          padding + Math.random() * (canvas.height - height - 2 * padding);

        const candidate = { x, y, width, height };

        if (
          rectContainsPoint(candidate, start) ||
          rectContainsPoint(candidate, goal)
        ) {
          continue;
        }

        obstacles.push(candidate);
      }

      return obstacles;
    }

    const obstacles = generateRandomObstacles();

    function randomNode() {
      return { x: Math.random() * canvas.width, y: Math.random() * canvas.height };
    }

    function nearest(nodes, point) {
      return nodes.reduce((a, b) =>
        distance(a.node, point) < distance(b.node, point) ? a : b
      );
    }

    function stepToward(from, to, stepSize = 20) {
      const theta = Math.atan2(to.y - from.y, to.x - from.x);
      return {
        x: from.x + stepSize * Math.cos(theta),
        y: from.y + stepSize * Math.sin(theta)
      };
    }

    function collidesWithObstacles(node) {
      return obstacles.some(obs =>
        node.x >= obs.x &&
        node.x <= obs.x + obs.width &&
        node.y >= obs.y &&
        node.y <= obs.y + obs.height
      );
    }

    function isPathFree(a, b, stepSize = 5) {
      const dist = distance(a, b);
      const steps = Math.ceil(dist / stepSize);
      for (let i = 1; i <= steps; i++) {
        const t = i / steps;
        const x = a.x + t * (b.x - a.x);
        const y = a.y + t * (b.y - a.y);
        if (collidesWithObstacles({ x, y })) return false;
      }
      return true;
    }

    let connected = false;
    let finalPath = [];

    function drawNode(node, type = 'circle', color = 'green', size = 1) {
      ctx.fillStyle = color;
      ctx.beginPath();

      if (type === 'circle') {
        ctx.arc(node.x, node.y, 5 * size, 0, 2 * Math.PI);
        ctx.fill();
      } else if (type === 'square') {
        const s = 12 * size;
        ctx.fillRect(node.x - s / 2, node.y - s / 2, s, s);
      } else if (type === 'star') {
        const spikes = 5;
        const outerRadius = 14 * size;
        const innerRadius = 6 * size;
        let rot = Math.PI / 2 * 3;
        let x = node.x;
        let y = node.y;
        let step = Math.PI / spikes;

        ctx.moveTo(x, y - outerRadius);
        for (let i = 0; i < spikes; i++) {
          let xx = x + Math.cos(rot) * outerRadius;
          let yy = y + Math.sin(rot) * outerRadius;
          ctx.lineTo(xx, yy);
          rot += step;

          xx = x + Math.cos(rot) * innerRadius;
          yy = y + Math.sin(rot) * innerRadius;
          ctx.lineTo(xx, yy);
          rot += step;
        }
        ctx.closePath();
        ctx.fill();
      }
    }

    function drawLine(a, b, color = 'blue', width = 2) {
      ctx.strokeStyle = color;
      ctx.lineWidth = width;
      ctx.beginPath();
      ctx.moveTo(a.x, a.y);
      ctx.lineTo(b.x, b.y);
      ctx.stroke();
    }

    function drawObstacles() {
      ctx.fillStyle = 'gray';
      obstacles.forEach(obs => ctx.fillRect(obs.x, obs.y, obs.width, obs.height));
    }

    function drawFinalPath(path) {
      for (let i = 0; i < path.length - 1; i++) {
        drawLine(path[i], path[i + 1], 'purple', 4);
      }
    }

    function initialDraw() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      drawObstacles();

      const text = 'AJ Chandrasekaran';
      ctx.fillStyle = 'green';
      ctx.font = '54px Arial';
      ctx.textBaseline = 'bottom';
      const textWidth = ctx.measureText(text).width;
      ctx.fillText(text, canvas.width - textWidth - 20, canvas.height - 20);

      drawNode(start, 'square', 'green', 1.8);
      drawNode(goal, 'star', 'yellow', 1.8);
    }

    function animate() {
      if (connected) return;

      const randStart = randomNode();
      const nearestStart = nearest(nodesStart, randStart);
      const newStart = stepToward(nearestStart.node, randStart);
      if (!collidesWithObstacles(newStart) && isPathFree(nearestStart.node, newStart)) {
        const node = { node: newStart, parent: nearestStart };
        nodesStart.push(node);
        drawLine(nearestStart.node, newStart, 'green');
        drawNode(newStart, 'circle', 'green');
      }

      const randGoal = randomNode();
      const nearestGoal = nearest(nodesGoal, randGoal);
      const newGoal = stepToward(nearestGoal.node, randGoal);
      if (!collidesWithObstacles(newGoal) && isPathFree(nearestGoal.node, newGoal)) {
        const node = { node: newGoal, parent: nearestGoal };
        nodesGoal.push(node);
        drawLine(nearestGoal.node, newGoal, 'red');
        drawNode(newGoal, 'circle', 'red');
      }

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
            drawFinalPath(finalPath);
            connected = true;
            return;
          }
        }
      }

      requestAnimationFrame(animate);
    }

    initialDraw();
    requestAnimationFrame(animate);
  }, [panelHeight]);

  return (
    <div className="w-full relative bg-green-100" style={{ height: `${panelHeight}px` }}>
      <canvas ref={canvasRef} className="w-full h-full" />
    </div>
  );
}
