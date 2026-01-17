// RRTPromptPanel.jsx
import React, { useState, useEffect, useRef } from "react";

export default function RRTPromptPanel({ onEnter, height = 735 }) {
  const canvasRef = useRef(null);
  const [showCursor, setShowCursor] = useState(true);
  const [entered, setEntered] = useState(false);
  const [linesToDisplay, setLinesToDisplay] = useState([]);
  const [charIndex, setCharIndex] = useState(0);

  const promptLines = [
    "ajaay@SPECTRAL-PC ~ > \\",
    "cat something_cool.txt",
    "",
    "The bidirectional RRT-connect",
    "algorithm is my personal favorite.",
    "my personal favorite.",
    "",
    "It elicits a spectacular probabilistic",
    "dance...two rapidly expanding trees",
    "of nodes in the configuration space.",
    "",
    "Reaching towards each other to find a",
    "connection... a collision-free path",
    "from start to end.",
    "",
    "Want to see it live in action?",
    "",
    "ajaay@SPECTRAL-PC ~ > \\",
    "bazel build //main:rrt_runner",
    "",
    "INFO: Build completed successfully,",
    "2 total actions",
    "",
    "ajaay@SPECTRAL-PC ~ > \\",
    "bazel run ///main:rrt_runner",
    "------------------------------------------",
    "Press ENTER to run the bidirectional RRT",
    "------------------------------------------"
  ];

  const highlightLines = [
    "------------------------------------------",
    "Press ENTER to run the bidirectional RRT",
    "------------------------------------------"
  ];

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const width = canvas.offsetWidth;
    const heightPx = height;

    canvas.width = width;
    canvas.height = heightPx;

    const fontSize = 16;//Math.floor(heightPx * 0.035);
    const lineHeight = fontSize * 1.5;
    const padding = fontSize * 2;

    const font = `${fontSize}px monospace`;
    const boldFont = `bold ${fontSize}px monospace`;

    let animationFrame;

    function draw() {
      ctx.clearRect(0, 0, width, heightPx);

      // Background
      ctx.fillStyle = "#0b0f14";
      ctx.fillRect(0, 0, width, heightPx);

      // Base terminal glow (applies to all text)
      ctx.shadowColor = "#4cc9f0";
      ctx.shadowBlur = 6;

      // Draw completed lines
      linesToDisplay.forEach((line, i) => {
        const x = padding;
        const y = padding + i * lineHeight;

        if (highlightLines.includes(line)) {
          const pulse = !entered
            ? 8 + 6 * Math.sin(Date.now() * 0.004)
            : 6;

          ctx.shadowBlur = pulse;
          ctx.font = boldFont;
          ctx.fillStyle = "#ff4d4d";
          ctx.fillText(line, x, y);
          ctx.shadowBlur = 6; // restore baseline glow
        } else {
          ctx.font = font;
          ctx.fillStyle = "#d9faff";
          ctx.fillText(line, x, y);
        }
      });

      // Draw current typing line
      if (!entered && linesToDisplay.length < promptLines.length) {
        const fullLine = promptLines[linesToDisplay.length];
        const currentLine = fullLine.slice(0, charIndex);
        const x = padding;
        const y = padding + linesToDisplay.length * lineHeight;

        if (highlightLines.includes(fullLine)) {
          const pulse = 8 + 6 * Math.sin(Date.now() * 0.004);
          ctx.shadowBlur = pulse;
          ctx.font = boldFont;
          ctx.fillStyle = "#ff4d4d";
        } else {
          ctx.shadowBlur = 6;
          ctx.font = font;
          ctx.fillStyle = "#d9faff";
        }

        ctx.fillText(currentLine, x, y);

        // Cursor
        if (showCursor) {
          const textWidth = ctx.measureText(currentLine).width;
          ctx.fillRect(
            x + textWidth + 2,
            y - fontSize,
            fontSize / 2,
            fontSize
          );
        }
      }

      // After Enter is pressed
      if (entered) {
        const y = padding + linesToDisplay.length * lineHeight;
        ctx.shadowBlur = 6;
        ctx.font = font;
        ctx.fillStyle = "#d9faff";
        ctx.fillText("ajaay@SPECTRAL-PC ~ >", padding, y);

        const textWidth = ctx.measureText("ajaay@SPECTRAL-PC ~ > ").width;
        ctx.fillRect(
          padding + textWidth + 2,
          y - fontSize,
          fontSize / 2,
          fontSize
        );
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

  // Cursor blink
  useEffect(() => {
    if (entered) return;
    const interval = setInterval(() => setShowCursor(prev => !prev), 500);
    return () => clearInterval(interval);
  }, [entered]);

  // Typing effect
  useEffect(() => {
    if (entered) return;
    if (linesToDisplay.length >= promptLines.length) return;

    const timeout = setTimeout(() => {
      const line = promptLines[linesToDisplay.length];
      if (charIndex + 1 > line.length) {
        setLinesToDisplay(prev => [...prev, line]);
        setCharIndex(0);
      } else {
        setCharIndex(i => i + 1);
      }
    }, 10);

    return () => clearTimeout(timeout);
  }, [charIndex, linesToDisplay, entered]);

  // Enter key listener
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
