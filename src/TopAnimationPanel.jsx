// TopAnimationPanel with bidirectional RRT visualization including obstacles and highlighting final path
// Tailwind CSS + Framer Motion required

import React, { useRef, useEffect, useState } from 'react';

export default function TopAnimationPanel() {
  const canvasRef = useRef(null);
  const [animationComplete, setAnimationComplete] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const start = { x: 100, y: canvas.height / 2 };
    const goal = { x: canvas.width - 100, y: canvas.height / 2 };
    const nodesStart = [{ node: start, parent: null }];
    const nodesGoal = [{ node: goal, parent: null }];

    const obstacles = [
      { x: canvas.width/2 - 100, y: canvas.height/2 - 50, width: 200, height: 100 },
      { x: canvas.width/3, y: canvas.height/3, width: 100, height: 150 },
      { x: canvas.width*0.7, y: canvas.height*0.3, width: 120, height: 80 }
    ];

    function distance(a, b) {
      return Math.hypot(a.x - b.x, a.y - b.y);
    }

    function randomNode() {
      return { x: Math.random() * canvas.width, y: Math.random() * canvas.height };
    }

    function nearest(nodes, point) {
      return nodes.reduce((a, b) => (distance(a.node, point) < distance(b.node, point) ? a : b));
    }

    function stepToward(from, to, stepSize = 20) {
      const theta = Math.atan2(to.y - from.y, to.x - from.x);
      return { x: from.x + stepSize * Math.cos(theta), y: from.y + stepSize * Math.sin(theta) };
    }

    function collidesWithObstacles(node) {
      return obstacles.some(obs => node.x >= obs.x && node.x <= obs.x + obs.width && node.y >= obs.y && node.y <= obs.y + obs.height);
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

    function drawNode(node, color = 'green') {
      ctx.fillStyle = color;
      ctx.beginPath();
      ctx.arc(node.x, node.y, 5, 0, 2 * Math.PI);
      ctx.fill();
    }

    function drawLine(a, b, color = 'blue', width = 2) {
      ctx.strokeStyle = color;
      ctx.lineWidth = width;
      ctx.beginPath();
      ctx.moveTo(a.x, a.y);
      ctx.lineTo(b.x, b.y);
      ctx.stroke();
    }

    function drawGoalStar(goal) {
      ctx.fillStyle = 'gold';
      ctx.font = '30px Arial';
      ctx.fillText('★', goal.x - 15, goal.y + 10);
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

    function animate() {
      if (connected) return;

      // Expand start tree
      let newNodeStart;
      for (let attempt = 0; attempt < 10; attempt++) {
        const rand1 = randomNode();
        const nearestStart = nearest(nodesStart, rand1);
        const candidate = stepToward(nearestStart.node, rand1);
        if (!collidesWithObstacles(candidate) && isPathFree(nearestStart.node, candidate)) {
          newNodeStart = { node: candidate, parent: nearestStart }; 
          nodesStart.push(newNodeStart);
          drawLine(nearestStart.node, newNodeStart.node, 'green');
          drawNode(newNodeStart.node, 'green');
          break;
        }
      }

      // Expand goal tree
      let newNodeGoal;
      for (let attempt = 0; attempt < 10; attempt++) {
        const rand2 = randomNode();
        const nearestGoal = nearest(nodesGoal, rand2);
        const candidate = stepToward(nearestGoal.node, rand2);
        if (!collidesWithObstacles(candidate) && isPathFree(nearestGoal.node, candidate)) {
          newNodeGoal = { node: candidate, parent: nearestGoal };
          nodesGoal.push(newNodeGoal);
          drawLine(nearestGoal.node, newNodeGoal.node, 'red');
          drawNode(newNodeGoal.node, 'red');
          break;
        }
      }

      // Check for connection
      for (const nStart of nodesStart) {
        for (const nGoal of nodesGoal) {
          if (distance(nStart.node, nGoal.node) < 10 && isPathFree(nStart.node, nGoal.node)) {
            // Trace back path
            let path = [];
            let temp = nStart;
            while (temp) { path.push(temp.node); temp = temp.parent; }
            path.reverse();
            temp = nGoal;
            while (temp) { path.push(temp.node); temp = temp.parent; }
            finalPath = path;

            drawFinalPath(finalPath);
            connected = true;
            setAnimationComplete(true);
            return;
          }
        }
      }

      if (!connected) requestAnimationFrame(animate);
    }

    function initialDraw() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      drawObstacles();
      ctx.fillStyle = 'green';
      ctx.fillRect(start.x - 10, start.y - 10, 20, 20); // start node
      drawGoalStar(goal);
    }

    initialDraw();
    requestAnimationFrame(animate);

    window.addEventListener('resize', () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initialDraw();
      if (connected) drawFinalPath(finalPath);
    });
  }, []);

  return (
    <div className="w-full h-screen relative bg-green-100">
      <canvas ref={canvasRef} className="w-full h-full" />
      {!animationComplete && (
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-6xl font-bold text-green-700">Hi, I'm AJ</h1>
        </div>
      )}
    </div>
  );
}