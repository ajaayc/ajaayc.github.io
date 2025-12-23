import React, { useState, useEffect, useRef } from "react";

export default function RRTPromptPanel({ onEnter, height = 350 }) {
  const canvasRef = useRef(null);
  const [showCursor, setShowCursor] = useState(true); // only used for typing effect
  const [entered, setEntered] = useState(false);
  const [linesToDisplay, setLinesToDisplay] = useState([]);
  const [charIndex, setCharIndex] = useState(0);

  const promptLines = [
    "ajaay@SPECTRAL-PC> cat something_cool.txt",
    "",
    "The bidirectional RRT-connect algorithm is my personal favorite.",
    "It elicits a spectacular probabilistic dance...two rapidly expanding trees of nodes in the configuration space.",
    "Reaching towards each other to find a connection...a collision-free path from start to end.",
    "",
    "Want to see it live in action?",
    "",
    "ajaay@SPECTRAL-PC> bazel build //main:rrt_runner",
    "ajaay@SPECTRAL-PC> ./bazel-bin/main/rrt_runner",
    "-----------------------------------------------------------------------------",
    "Press ENTER to run the bidirectional RRT animation",
    "-----------------------------------------------------------------------------"
  ];

  // Draw the canvas
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const width = canvas.offsetWidth;
    const heightPx = height;
    canvas.width = width;
    canvas.height = heightPx;

    const fontSize = 16;
    const lineHeight = 22;
    const padding = 20;
    const font = `${fontSize}px monospace`;
    ctx.font = font;

    let animationFrame;

    function draw() {
      ctx.clearRect(0, 0, width, heightPx);

      // Background
      ctx.fillStyle = "#0b0f14";
      ctx.fillRect(0, 0, width, heightPx);

      // Draw all fully typed lines
      ctx.fillStyle = "#d9faff";
      linesToDisplay.forEach((line, i) => {
        ctx.fillText(line, padding, padding + i * lineHeight + fontSize);
      });

      // Draw current typing line if any
      if (!entered && linesToDisplay.length < promptLines.length) {
        const currentLine = promptLines[linesToDisplay.length].slice(0, charIndex);
        ctx.fillText(currentLine, padding, padding + linesToDisplay.length * lineHeight + fontSize);

        // Cursor for typing
        if (showCursor) {
          const textWidth = ctx.measureText(currentLine).width;
          ctx.fillRect(padding + textWidth + 4, padding + linesToDisplay.length * lineHeight, 10, fontSize);
        }
      }

      // After Enter pressed, show empty terminal prompt with solid cursor
      if (entered) {
        const promptY = padding + (linesToDisplay.length + 1) * lineHeight;
        ctx.fillText("ajaay@SPECTRAL-PC>", padding, promptY);
        // Solid cursor at end
        const textWidth = ctx.measureText("ajaay@SPECTRAL-PC> ").width;
        ctx.fillRect(padding + textWidth + 4, promptY - fontSize, 10, fontSize);
      }
    }

    function loop() {
      draw();
      animationFrame = requestAnimationFrame(loop);
    }

    loop();

    return () => cancelAnimationFrame(animationFrame);
  }, [showCursor, linesToDisplay, charIndex, entered, height]);

  // Blink cursor only during typing
  useEffect(() => {
    if (entered) return; // stop blinking after Enter
    const interval = setInterval(() => setShowCursor((prev) => !prev), 500);
    return () => clearInterval(interval);
  }, [entered]);

  // Typing effect
  useEffect(() => {
    if (entered) return; // stop typing after Enter
    if (linesToDisplay.length >= promptLines.length) return;

    const timeout = setTimeout(() => {
      const currentLine = promptLines[linesToDisplay.length];
      if (charIndex + 1 > currentLine.length) {
        setLinesToDisplay((prev) => [...prev, currentLine]);
        setCharIndex(0);
      } else {
        setCharIndex((i) => i + 1);
      }
    }, 10);

    return () => clearTimeout(timeout);
  }, [charIndex, linesToDisplay, entered]);

  // Listen for Enter key
  useEffect(() => {
    function handleKeyDown(e) {
      if (e.key === "Enter" && !entered) {
        setEntered(true);
        onEnter();
      }
    }
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [entered, onEnter]);

  return (
    <div
      className="w-full relative bg-black rounded-md shadow-lg overflow-hidden"
      style={{ height: `${height}px` }}
    >
      <canvas ref={canvasRef} className="w-full h-full" />
    </div>
  );
}
