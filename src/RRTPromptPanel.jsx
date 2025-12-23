import React, { useEffect, useRef, useState } from "react";

export default function RRTPromptPanel({ height = 330, onStart }) {
  const canvasRef = useRef(null);
  const [charIndex, setCharIndex] = useState(0);
  const [cursorVisible, setCursorVisible] = useState(true);
  const [textLines, setTextLines] = useState(["Press Enter to start RRT animation..."]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    let width = canvas.offsetWidth;
    const heightPx = height;
    canvas.width = width;
    canvas.height = heightPx;

    const fontSize = 14;
    const lineHeight = 22;
    const padding = 20;

    const normalFont = `${fontSize}px monospace`;
    ctx.font = normalFont;

    let lines = [...textLines];

    function draw() {
      ctx.clearRect(0, 0, width, heightPx);

      // Background
      ctx.fillStyle = "#0b0f14";
      ctx.fillRect(0, 0, width, heightPx);

      // Glow
      ctx.shadowColor = "#4cc9f0";
      ctx.shadowBlur = 8;

      const maxLines = Math.floor((heightPx - padding * 2) / lineHeight);
      const visibleLines = lines.slice(-maxLines);

      visibleLines.forEach((line, i) => {
        const x = padding;
        const y = padding + i * lineHeight;
        ctx.fillStyle = "#d9faff";
        ctx.fillText(line, x, y);
      });

      // Cursor
      if (cursorVisible) {
        const lastLine = visibleLines[visibleLines.length - 1] || "";
        const cursorX = padding + ctx.measureText(lastLine).width;
        const cursorY = padding + (visibleLines.length - 1) * lineHeight;
        ctx.fillStyle = "#d9faff";
        ctx.fillRect(cursorX + 2, cursorY - fontSize + 4, 10, fontSize);
      }
    }

    const cursorInterval = setInterval(() => {
      setCursorVisible((v) => !v);
    }, 500);

    function handleResize() {
      width = canvas.offsetWidth;
      canvas.width = width;
      canvas.height = heightPx;
      ctx.font = normalFont;
      draw();
    }

    window.addEventListener("resize", handleResize);

    draw();

    return () => {
      clearInterval(cursorInterval);
      window.removeEventListener("resize", handleResize);
    };
  }, [height, textLines, cursorVisible]);

  // Handle Enter key
  useEffect(() => {
    function handleKeyDown(e) {
      if (e.key === "Enter") {
        if (onStart) onStart();
      }
    }
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onStart]);

  return (
    <div style={{ width: "100%", height }}>
      <canvas
        ref={canvasRef}
        style={{ width: "100%", height: "100%", display: "block" }}
      />
    </div>
  );
}
