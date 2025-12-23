import React, { useState, useEffect, useRef } from "react";

export default function RRTPromptPanel({ onEnter, height = 200 }) {
  const canvasRef = useRef(null);
  const [showCursor, setShowCursor] = useState(true);
  const [entered, setEntered] = useState(false);

  const promptText = "Press ENTER to run the bidirectional RRT animation";

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

      // Text
      ctx.fillStyle = "#d9faff";
      ctx.fillText(promptText, padding, padding + fontSize);

      // Cursor
      if (!entered && showCursor) {
        const textWidth = ctx.measureText(promptText).width;
        ctx.fillStyle = "#d9faff";
        ctx.fillRect(padding + textWidth + 4, padding, 10, fontSize);
      }
    }

    function loop() {
      draw();
      animationFrame = requestAnimationFrame(loop);
    }

    loop();

    return () => cancelAnimationFrame(animationFrame);
  }, [showCursor, entered, height]);

  // Blink cursor
  useEffect(() => {
    const interval = setInterval(() => setShowCursor((prev) => !prev), 500);
    return () => clearInterval(interval);
  }, []);

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
    <div className="w-full relative bg-black rounded-md shadow-lg overflow-hidden" style={{ height: `${height}px` }}>
      <canvas ref={canvasRef} className="w-full h-full" />
    </div>
  );
}
