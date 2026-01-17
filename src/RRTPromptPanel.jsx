// RRTPromptPanel.jsx
import React, { useState, useEffect, useRef } from "react";

// Constants defined outside component to avoid re-creation
const RAW_PROMPT_TEXT = [
  "ajaay@SPECTRAL-PC ~ > \\",
  "cat something_cool.txt",
  "",
  "The bidirectional RRT-connect algorithm is my personal favorite.",
  "",
  "It elicits a spectacular probabilistic dance...two rapidly expanding trees of nodes in the configuration space.",
  "",
  "Reaching towards each other to find a connection... a collision-free path from start to end.",
  "",
  "Want to see it live in action?",
  "",
  "ajaay@SPECTRAL-PC ~ > \\",
  "bazel build //main:rrt_runner",
  "",
  "INFO: Build completed successfully, 2 total actions",
  "",
  "ajaay@SPECTRAL-PC ~ > \\",
  "bazel run ///main:rrt_runner",
  "------------------------------------",
  "         Press ENTER to run         ",
  "        the bidirectional RRT       ",
  "------------------------------------"
];

const HIGHLIGHT_LINES = [
  "------------------------------------",
  "         Press ENTER to run         ",
  "        the bidirectional RRT       ",
  "------------------------------------"
];

export default function RRTPromptPanel({ onEnter, height = 755 }) {
  const canvasRef = useRef(null);
  const [showCursor, setShowCursor] = useState(true);
  const [entered, setEntered] = useState(false);
  const [linesToDisplay, setLinesToDisplay] = useState([]);
  const [charIndex, setCharIndex] = useState(0);
  const [promptLines, setPromptLines] = useState([]);

  // Wrap text based on canvas width
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext("2d");
    if (!ctx) return; // Guard against null context
    
    const width = canvas.offsetWidth;
    const fontSize = 16;
    const padding = fontSize * 2;
    const font = `${fontSize}px monospace`;

    function wrapText() {
      const maxWidth = width - padding * 2;
      ctx.font = font; // Set font for measurement
      
      const wrappedLines = [];
      RAW_PROMPT_TEXT.forEach((para) => {
        // Keep empty lines as-is
        if (para === "") {
          wrappedLines.push("");
          return;
        }
        
        // Don't wrap highlight lines
        if (HIGHLIGHT_LINES.includes(para)) {
          wrappedLines.push(para);
          return;
        }
        
        // Wrap regular text
        const words = para.split(" ");
        let line = "";
        words.forEach((word) => {
          const testLine = line + word + " ";
          if (ctx.measureText(testLine).width > maxWidth) {
            if (line !== "") {
              wrappedLines.push(line.trim());
              line = word + " ";
            } else {
              // Word is too long, add it anyway
              wrappedLines.push(word);
              line = "";
            }
          } else {
            line = testLine;
          }
        });
        if (line !== "") {
          wrappedLines.push(line.trim());
        }
      });
      
      setPromptLines(wrappedLines);
    }

    // Initial wrap
    wrapText();

    // Re-wrap on resize
    function handleResize() {
      wrapText();
    }

    window.addEventListener("resize", handleResize);
    
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [height]); // Only re-run when height changes

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext("2d");
    if (!ctx) return; // Guard against null context
    
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

        if (HIGHLIGHT_LINES.includes(line)) {
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

        if (HIGHLIGHT_LINES.includes(fullLine)) {
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
    return () => {
      cancelAnimationFrame(animationFrame);
    };
  }, [showCursor, linesToDisplay, charIndex, entered, height, promptLines]);

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
  }, [charIndex, linesToDisplay, entered, promptLines]);

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
