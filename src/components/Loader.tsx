import React, { useState, useEffect } from "react";

export default function Loader() {
  const [showLoader, setShowLoader] = useState(true);
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    // Disable body scroll while loader is active
    document.body.style.overflow = "hidden";

    const handleLoad = () => {
      // Elegant 1.2s delay to allow the beautiful golden ray animation to play smoothly
      const timer = setTimeout(() => {
        setIsFading(true);
        const removeTimer = setTimeout(() => {
          setShowLoader(false);
          document.body.style.overflow = "";
        }, 500); // matches the CSS opacity transition duration
        return () => clearTimeout(removeTimer);
      }, 1200);
      return () => clearTimeout(timer);
    };

    // If page is already loaded, trigger transition immediately, otherwise listen to window load
    if (document.readyState === "complete") {
      handleLoad();
    } else {
      window.addEventListener("load", handleLoad);
      return () => {
        window.removeEventListener("load", handleLoad);
      };
    }
  }, []);

  if (!showLoader) return null;

  // Generate 16 spokes
  // 8 long spokes at even angles (0, 45, 90...) -> color: #d4af37
  // 8 shorter spokes at odd angles (22.5, 67.5...) -> color: #e8c766
  const spokes = Array.from({ length: 16 }).map((_, i) => {
    const angle = i * 22.5;
    const isEven = i % 2 === 0;
    
    // Spoke styles
    const height = isEven ? "32px" : "20px";
    const width = isEven ? "3px" : "2px";
    const color = isEven ? "#d4af37" : "#e8c766";
    // Centering offsets
    const translateY = isEven ? "-54px" : "-48px";

    return (
      <div
        key={i}
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          width: width,
          height: height,
          backgroundColor: color,
          borderRadius: "9999px",
          transform: `translate(-50%, -50%) rotate(${angle}deg) translateY(${translateY})`,
          transformOrigin: "center center",
        }}
      />
    );
  });

  return (
    <div
      role="status"
      aria-label="Loading"
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center transition-opacity duration-500 ease-out"
      style={{
        backgroundColor: "#faf8f2",
        opacity: isFading ? 0 : 1,
        pointerEvents: isFading ? "none" : "auto",
      }}
    >
      {/* Styles for continuous smooth rotating and pulsing */}
      <style>{`
        @keyframes loader-spin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        @keyframes loader-pulse {
          0%, 100% {
            transform: translate(-50%, -50%) scale(1);
            box-shadow: 0 0 15px rgba(212, 175, 55, 0.4), inset 0 0 10px rgba(255, 255, 255, 0.6);
          }
          50% {
            transform: translate(-50%, -50%) scale(1.08);
            box-shadow: 0 0 35px rgba(212, 175, 55, 0.8), inset 0 0 15px rgba(255, 255, 255, 0.8);
          }
        }
        .animate-loader-spin {
          animation: loader-spin 6s linear infinite;
        }
        .animate-loader-pulse {
          animation: loader-pulse 2s ease-in-out infinite;
        }
      `}</style>

      {/* Main concentric loader core */}
      <div className="relative w-[160px] h-[160px]">
        {/* Rotating spokes ring */}
        <div className="absolute inset-0 animate-loader-spin">
          {spokes}
        </div>

        {/* Centered glowing circle and Cross */}
        <div
          className="absolute top-1/2 left-1/2 w-16 h-16 rounded-full animate-loader-pulse"
          style={{
            background: "radial-gradient(circle, #fff8e6 0%, #f5deA0 50%, #d4af37 100%)",
            border: "1px solid rgba(212, 175, 55, 0.3)",
          }}
        >
          {/* Minimalist Golden Cross */}
          {/* Vertical bar */}
          <div
            style={{
              position: "absolute",
              left: "50%",
              top: "50%",
              width: "4px",
              height: "28px",
              backgroundColor: "#8a6d1f",
              borderRadius: "1px",
              transform: "translate(-50%, -50%)",
            }}
          />
          {/* Horizontal bar */}
          <div
            style={{
              position: "absolute",
              left: "50%",
              top: "calc(50% - 4px)",
              width: "20px",
              height: "4px",
              backgroundColor: "#8a6d1f",
              borderRadius: "1px",
              transform: "translateX(-50%)",
            }}
          />
        </div>
      </div>
    </div>
  );
}
