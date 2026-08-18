"use client";

import React, { useEffect, useRef, useState } from "react";

/**
 * ScrollSequence Background Component
 * 
 * USAGE NOTE:
 * - By default, it expects 160 frames named ezgif-frame-001.jpg to ezgif-frame-160.jpg in `/public/frames/`.
 * - To change the frame count, pass a different `frameCount` prop.
 * - To change the path, pass a custom `framePath` function.
 */

interface ScrollSequenceProps {
  frameCount?: number;
  framePath?: (index: number) => string;
}

export default function ScrollSequence({
  frameCount = 160,
  framePath = (index) => `/frames/ezgif-frame-${index.toString().padStart(3, "0")}.jpg`,
}: ScrollSequenceProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [loaded, setLoaded] = useState(false);
  const [progress, setProgress] = useState(0);
  const imagesRef = useRef<HTMLImageElement[]>([]);
  const currentFrameRef = useRef(-1);

  // 1. Preload all frames
  useEffect(() => {
    let loadedCount = 0;
    const images: HTMLImageElement[] = [];
    let isCancelled = false;

    for (let i = 1; i <= frameCount; i++) {
      const img = new Image();
      img.src = framePath(i);
      img.onload = () => {
        if (isCancelled) return;
        loadedCount++;
        setProgress((loadedCount / frameCount) * 100);
        if (loadedCount === frameCount) {
          setLoaded(true);
        }
      };
      img.onerror = () => {
        if (isCancelled) return;
        loadedCount++; // prevent getting completely stuck if 1 frame fails
        setProgress((loadedCount / frameCount) * 100);
        if (loadedCount === frameCount) {
          setLoaded(true);
        }
      }
      images.push(img);
    }

    imagesRef.current = images;

    return () => {
      isCancelled = true;
    };
  }, [frameCount, framePath]);

  // 2. Setup canvas, resize and scroll listener
  useEffect(() => {
    if (!loaded) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Draw frame with object-fit: cover behavior
    const drawFrame = (frameIndex: number) => {
      if (frameIndex === currentFrameRef.current) return;
      currentFrameRef.current = frameIndex;

      const img = imagesRef.current[frameIndex];
      if (!img || !img.width) return;

      const canvasRatio = canvas.width / canvas.height;
      const imgRatio = img.width / img.height;
      let drawWidth, drawHeight, offsetX, offsetY;

      if (canvasRatio > imgRatio) {
        drawWidth = canvas.width;
        drawHeight = canvas.width / imgRatio;
        offsetX = 0;
        offsetY = (canvas.height - drawHeight) / 2;
      } else {
        drawWidth = canvas.height * imgRatio;
        drawHeight = canvas.height;
        offsetX = (canvas.width - drawWidth) / 2;
        offsetY = 0;
      }

      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
    };

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      
      const prevFrame = currentFrameRef.current;
      currentFrameRef.current = -1; 
      drawFrame(Math.max(0, prevFrame));
    };

    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const scrollY = window.scrollY;
          
          const heroEl = document.getElementById('hero-scroll');
          const middleEl = document.getElementById('middle-content');
          const outroEl = document.getElementById('outro-scroll');

          let frameIndex = 0;

          if (heroEl && middleEl && outroEl) {
            const heroTop = heroEl.offsetTop;
            const heroHeight = heroEl.offsetHeight - window.innerHeight;
            
            const middleTop = middleEl.offsetTop;

            const outroTop = outroEl.offsetTop;
            const outroHeight = outroEl.offsetHeight - window.innerHeight;

            if (scrollY < middleTop) {
              // Phase 1: Inside Hero -> frames 16 to 114 (indices 15 to 113)
              const fraction = Math.max(0, Math.min(1, (scrollY - heroTop) / (heroHeight || 1)));
              frameIndex = 15 + Math.floor(fraction * (113 - 15));
            } else if (scrollY >= middleTop && scrollY < outroTop) {
              // Phase 2: Inside Middle -> stuck on frame 114 (index 113)
              frameIndex = 113;
            } else {
              // Phase 3: Inside Outro -> frames 115 to 160 (indices 114 to 159)
              const fraction = Math.max(0, Math.min(1, (scrollY - outroTop) / (outroHeight || 1)));
              const remainingFrames = frameCount - 1 - 113;
              frameIndex = 113 + Math.floor(fraction * remainingFrames);
            }
          } else {
            // Fallback if elements aren't found
            const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
            const scrollFraction = maxScroll > 0 ? Math.max(0, Math.min(1, scrollY / maxScroll)) : 0;
            frameIndex = Math.max(15, Math.min(frameCount - 1, Math.floor(scrollFraction * frameCount)));
          }

          drawFrame(frameIndex);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScroll, { passive: true });

    handleResize();
    handleScroll();

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [loaded, frameCount]);

  return (
    <>
      {!loaded && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "#000",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 9999,
            color: "#fff",
            fontFamily: "system-ui, sans-serif",
          }}
        >
          <div style={{ marginBottom: "1rem", fontSize: "0.875rem", letterSpacing: "0.05em", textTransform: "uppercase" }}>
            Loading sequence... {Math.round(progress)}%
          </div>
          <div style={{ width: "200px", height: "2px", backgroundColor: "rgba(255,255,255,0.2)", overflow: "hidden" }}>
            <div style={{ width: `${progress}%`, height: "100%", backgroundColor: "#fff", transition: "width 0.1s" }} />
          </div>
        </div>
      )}

      <canvas
        ref={canvasRef}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: 0,
          opacity: loaded ? 1 : 0,
          transition: "opacity 1s ease-in-out",
          pointerEvents: "none",
        }}
      />
    </>
  );
}
