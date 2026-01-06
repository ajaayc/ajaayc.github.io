// RRTPromptPanel.jsx
import React, { useState, useEffect, useRef } from "react";

export default function RRTPromptPanel({ onEnter, height = 350 }) {
  const canvasRef = useRef(null);
  const [showCursor, setShowCursor] = useState(true);
  const [entered, setEntered] = useState(false);
  const [linesToDisplay, setLinesToDisplay] = useState([]);
  const [charIndex, setCharIndex] = useState(0);

  const promptLines = [
    "ajaay@SPECTRAL-PC ~ > cat something_cool.txt",
    "",
    "The bidirectional RRT-connect algorithm is my personal favorite.",
    "",
    "It elicits a spectacular probabilistic dance...two rapidly expanding",
    "trees of nodes in the configuration space.",
    "",
    "Reaching towards each other to find a connection...a collision-free path from start to end.",
    "",
    "Want to see it live in action?",
    "",
    "ajaay@SPECTRAL-PC ~ > bazel build //main:rrt_runner",
    "ajaay@SPECTRAL-PC ~ > ./bazel-bin/main/rrt_runner",
    "-----------------------------------------------------------------------------",
    "Press ENTER to run the bidirectional RRT animation",
    "-----------------------------------------------------------------------------"
  ];

  const highlightLines = [
    "-----------------------------------------------------------------------------",
    "Press ENTER to run the bidirectional RRT animation",
    "-----------------------------------------------------------------------------"
  ];

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const width = canvas.offsetWidth;
    const heightPx = height;
    canvas.width = width;
    canvas.height = heightPx;

    // Updated font size and spacing to match LLMAnimationPanel
    const fontSize = Math.floor(heightPx * 0.035);
    const lineHeight = fontSize * 1.5;
    const padding = fontSize * 2; // padding same as LLM panel
    const font = `${fontSize}px monospace`;
    const boldFont = `bold ${fontSize}px monospace`;

    ctx.font = font;

    let animationFrame;

    function draw() {
      ctx.clearRect(0, 0, width, heightPx);

      // Background
      ctx.fillStyle = "#0b0f14";
      ctx.fillRect(0, 0, width, heightPx);

      // Glow effect
      ctx.shadowColor = "#4cc9f0";
      ctx.shadowBlur = 10;

      // Draw typed lines
      linesToDisplay.forEach((line, i) => {
        let x = padding;
        const y = padding + i * lineHeight;

        if (highlightLines.includes(line)) {
          ctx.font = boldFont;
          ctx.fillStyle = "#ff4d4d";
          ctx.fillText(line, x, y);
        } else {
          ctx.font = font;
          ctx.fillStyle = "#d9faff";
          ctx.fillText(line, x, y);
        }
      });

      // Draw current typing line
      if (!entered && linesToDisplay.length < promptLines.length) {
        const currentLine = promptLines[linesToDisplay.length].slice(0, charIndex);
        let x = padding;
        const y = padding + linesToDisplay.length * lineHeight;

        if (highlightLines.includes(promptLines[linesToDisplay.length])) {
          ctx.font = boldFont;
          ctx.fillStyle = "#ff4d4d";
        } else {
          ctx.font = font;
          ctx.fillStyle = "#d9faff";
        }

        ctx.fillText(currentLine, x, y);

        // Updated cursor size to match LLM panel
        if (showCursor) {
          const textWidth = ctx.measureText(currentLine).width;
          ctx.fillRect(x + textWidth + 2, y - fontSize, fontSize / 2, fontSize);
        }
      }

      // After Enter pressed, show solid prompt
      if (entered) {
        const promptY = padding + linesToDisplay.length * lineHeight;
        ctx.font = font;
        ctx.fillStyle = "#d9faff";
        ctx.fillText("ajaay@SPECTRAL-PC ~ >", padding, promptY);
        const textWidth = ctx.measureText("ajaay@SPECTRAL-PC ~ > ").width;
        ctx.fillRect(padding + textWidth + 2, promptY - fontSize, fontSize / 2, fontSize);
      }

      ctx.shadowBlur = 0;
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
    if (entered) return;
    const interval = setInterval(() => setShowCursor((prev) => !prev), 500);
    return () => clearInterval(interval);
  }, [entered]);

  // Typing effect
  useEffect(() => {
    if (entered) return;
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
