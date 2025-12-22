import React, { useEffect, useRef } from "react";

/**
 * LLMAnimationPanel
 * -----------------
 * A lightweight animated panel that visually simulates an LLM generating text.
 * Designed for use at the top of a personal website (hero / header area).
 *
 * Visual behavior:
 * - Monospaced "terminal-like" text
 * - Characters appear one-by-one with a blinking cursor
 * - Lines wrap naturally and scroll upward when full
 * - Subtle glow effect for a modern AI aesthetic
 */

const SAMPLE_TEXT = [
  "\najaay@SPECTRAL-PC> cat welcome_to_the_show.txt",
  "\nBehold! The bidirectional-RRT! An algorithm, which relays a spectacular show. Two trees each reaching towards each other across a configuration space of deadly obstacles.",
  "It remains my favorite algorithm.",
  "\nWho am I, you may ask?",
  "\nThe name's AJ. AJ Chandrasekaran.",
  "\najaay@SPECTRAL-PC>"
].join("\n");

export default function LLMAnimationPanel({ height = 260 }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    let width = canvas.offsetWidth;
    let heightPx = height;
    canvas.width = width;
    canvas.height = heightPx;

    const fontSize = 14;
    const lineHeight = 22;
    const padding = 20;

    ctx.font = `${fontSize}px monospace`;

    let charIndex = 0;
    let lines = [""];
    let cursorVisible = true;

    function wrapText() {
      const maxWidth = width - padding * 2;
      const rawText = SAMPLE_TEXT.slice(0, charIndex);
      
      // Split by newlines first
      const paragraphs = rawText.split("\n");
    
      lines = [];
    
      paragraphs.forEach((para) => {
        const words = para.split(" ");
        let line = "";
    
        words.forEach((word) => {
          const testLine = line + word + " ";
          if (ctx.measureText(testLine).width > maxWidth) {
            lines.push(line);
            line = word + " ";
          } else {
            line = testLine;
          }
        });
    
        lines.push(line); // push remaining line
      });
    }

    function draw() {
      ctx.clearRect(0, 0, width, heightPx);

      // Background
      ctx.fillStyle = "#0b0f14";
      ctx.fillRect(0, 0, width, heightPx);

      // Text glow
      ctx.shadowColor = "#4cc9f0";
      ctx.shadowBlur = 8;
      ctx.fillStyle = "#d9faff";

      const maxLines = Math.floor((heightPx - padding * 2) / lineHeight);
      const visibleLines = lines.slice(-maxLines);

      visibleLines.forEach((line, i) => {
        ctx.fillText(line, padding, padding + i * lineHeight);
      });

      // Cursor
      if (cursorVisible) {
        const lastLine = visibleLines[visibleLines.length - 1] || "";
        const cursorX = padding + ctx.measureText(lastLine).width;
        const cursorY = padding + (visibleLines.length - 1) * lineHeight;
        ctx.fillRect(cursorX + 2, cursorY - fontSize + 4, 10, fontSize);
      }
    }

    const typingInterval = setInterval(() => {
      if (charIndex < SAMPLE_TEXT.length) {
        charIndex++;
        wrapText();
      }
      draw();
    }, 15);

    const cursorInterval = setInterval(() => {
      cursorVisible = !cursorVisible;
    }, 500);

    function handleResize() {
      width = canvas.offsetWidth;
      canvas.width = width;
      canvas.height = heightPx;
      ctx.font = `${fontSize}px monospace`;
      wrapText();
    }

    window.addEventListener("resize", handleResize);

    return () => {
      clearInterval(typingInterval);
      clearInterval(cursorInterval);
      window.removeEventListener("resize", handleResize);
    };
  }, [height]);

  return (
    <div style={{ width: "100%", height }}>
      <canvas
        ref={canvasRef}
        style={{ width: "100%", height: "100%", display: "block" }}
      />
    </div>
  );
}
