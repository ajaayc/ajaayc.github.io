import React, { useEffect, useRef } from "react";

/**
 * LLMAnimationPanel
 * -----------------
 * A lightweight animated panel that visually simulates an LLM generating text.
 */

const SAMPLE_TEXT = [
  "Initializing large language model...Loading parameters (7.2B)...Aligning neural weights...Calibrating attention layers...",
  "Ready. Generating response:",
  "\najaay@SPECTRAL-PC> cat welcome_to_the_show.txt",
  "\nWho am I, you may ask?",
  "\nThe name's AJ. AJ Chandrasekaran.",
  "\nWelcome to my personal site.",
  "\najaay@SPECTRAL-PC>"
].join("\n");

export default function LLMAnimationPanel({ height = 330 }) {
  const canvasRef = useRef(null);

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
    const boldFont = `bold ${fontSize}px monospace`;

    ctx.font = normalFont;

    let charIndex = 0;
    let lines = [""];
    let cursorVisible = true;
    let typingDone = false;

    function wrapText() {
      const maxWidth = width - padding * 2;
      const rawText = SAMPLE_TEXT.slice(0, charIndex);
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

        lines.push(line);
      });
    }

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
        let x = padding;
        const y = padding + i * lineHeight;

        const highlightTokens = ["AJ Chandrasekaran", "AJ"];
        let remaining = line;

        while (remaining.length > 0) {
          let matchIndex = -1;
          let matchedToken = null;

          for (const token of highlightTokens) {
            const idx = remaining.indexOf(token);
            if (idx !== -1 && (matchIndex === -1 || idx < matchIndex)) {
              matchIndex = idx;
              matchedToken = token;
            }
          }

          if (matchIndex === -1) {
            ctx.font = normalFont;
            ctx.fillStyle = "#d9faff";
            ctx.fillText(remaining, x, y);
            x += ctx.measureText(remaining).width;
            break;
          }

          if (matchIndex > 0) {
            const before = remaining.slice(0, matchIndex);
            ctx.font = normalFont;
            ctx.fillStyle = "#d9faff";
            ctx.fillText(before, x, y);
            x += ctx.measureText(before).width;
          }

          ctx.font = boldFont;
          ctx.fillStyle = "#ff4d4d";
          ctx.fillText(matchedToken, x, y);
          x += ctx.measureText(matchedToken).width;

          remaining = remaining.slice(matchIndex + matchedToken.length);
        }
      });

      // Cursor (solid when done)
      if (cursorVisible) {
        const lastLine = visibleLines[visibleLines.length - 1] || "";
        ctx.font = normalFont;
        const cursorX = padding + ctx.measureText(lastLine).width;
        const cursorY = padding + (visibleLines.length - 1) * lineHeight;
        ctx.fillStyle = "#d9faff";
        ctx.fillRect(cursorX + 2, cursorY - fontSize + 4, 10, fontSize);
      }
    }

    const typingInterval = setInterval(() => {
      if (charIndex < SAMPLE_TEXT.length) {
        charIndex++;
        wrapText();
      } else if (!typingDone) {
        typingDone = true;
        cursorVisible = true; // solid cursor at end
        clearInterval(cursorInterval);
      }
      draw();
    }, 8);

    const cursorInterval = setInterval(() => {
      if (!typingDone) {
        cursorVisible = !cursorVisible;
      }
    }, 500);

    function handleResize() {
      width = canvas.offsetWidth;
      canvas.width = width;
      canvas.height = heightPx;
      ctx.font = normalFont;
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
