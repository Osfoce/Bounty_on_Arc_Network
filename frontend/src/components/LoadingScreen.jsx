
import { useEffect, useState } from "react";
import Usdc from "../assets/images/Usdc.png";

function LoadingScreen({ onComplete }) {
  const [progress, setProgress] = useState(0);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const duration = 2200;
    const start = performance.now();

    let animationFrame;

    const animate = (time) => {
      const elapsed = time - start;
      const percentage = Math.min(elapsed / duration, 1);

      // Smooth loading animation
      const eased = 1 - Math.pow(1 - percentage, 3);

      setProgress(Math.floor(eased * 100));

      if (percentage < 1) {
        animationFrame = requestAnimationFrame(animate);
      } else {
        setTimeout(() => {
          setFadeOut(true);

          setTimeout(() => {
            onComplete?.();
          }, 500);
        }, 250);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrame);
  }, [onComplete]);

  return (
    <div
      className={`fixed inset-0 z-[9999] flex min-h-screen items-center justify-center overflow-hidden bg-white text-black transition-opacity duration-500 ${
        fadeOut ? "pointer-events-none opacity-0" : "opacity-100"
      }`}
    >
      {/* =====================================================
          BACKGROUND
      ===================================================== */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {/* Main USDC glow */}
        <div className="absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#2775CA]/[0.06] blur-[110px]" />

        {/* Pink accent glow */}
        <div className="absolute left-[12%] top-[18%] h-32 w-32 rounded-full bg-fuchsia-500/[0.04] blur-[80px]" />

        {/* Blue accent glow */}
        <div className="absolute bottom-[12%] right-[12%] h-40 w-40 rounded-full bg-[#2775CA]/[0.04] blur-[90px]" />
      </div>

      {/* =====================================================
          SUBTLE GRID
      ===================================================== */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,0,0,0.25) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.25) 1px, transparent 1px)",
          backgroundSize: "50px 50px",
        }}
      />

      {/* =====================================================
          SCAN LINE
      ===================================================== */}
      <div className="pointer-events-none absolute left-0 top-0 h-px w-full animate-[scan_3s_linear_infinite] bg-gradient-to-r from-transparent via-[#2775CA]/40 to-transparent" />

      {/* =====================================================
          MAIN
      ===================================================== */}
      <div className="relative z-10 flex w-full max-w-md flex-col items-center px-6">
        {/* =================================================
            USDC VISUAL
        ================================================= */}
        <div className="relative mb-8 flex h-32 w-32 items-center justify-center">
          {/* Outer rotating ring */}
          <div className="absolute inset-0 animate-[spin_10s_linear_infinite] rounded-full border border-[#2775CA]/15 border-t-[#2775CA]/70" />

          {/* Inner rotating ring */}
          <div className="absolute inset-3 animate-[spin_7s_linear_infinite_reverse] rounded-full border border-fuchsia-500/10 border-b-fuchsia-500/50" />

          {/* Soft glow */}
          <div className="absolute h-24 w-24 rounded-full bg-[#2775CA]/10 blur-2xl" />

          {/* USDC image */}
          <div className="relative z-10 animate-[coinFloat_4s_ease-in-out_infinite]">
            <img
              src={Usdc}
              alt="USDC"
              className="h-20 w-20 select-none object-contain drop-shadow-[0_12px_20px_rgba(39,117,202,0.18)]"
              draggable="false"
            />
          </div>

          {/* Small orbit dot */}
          <span className="absolute right-1 top-7 h-2 w-2 animate-pulse rounded-full bg-[#2775CA] shadow-[0_0_12px_rgba(39,117,202,0.5)]" />

          {/* Pink orbit dot */}
          <span className="absolute bottom-5 left-3 h-1.5 w-1.5 animate-pulse rounded-full bg-fuchsia-500 shadow-[0_0_10px_rgba(217,70,239,0.5)]" />
        </div>

        {/* =================================================
            BRAND
        ================================================= */}
        <h1 className="text-center text-2xl font-bold tracking-[0.2em] text-black">
          HAPPY BOUNTY
        </h1>

        <p className="mt-2 text-center text-[10px] font-medium uppercase tracking-[0.35em] text-black/35">
          The Future of Web3 Work
        </p>

        {/* =================================================
            ARC BADGE
        ================================================= */}
        <div className="mt-5 inline-flex items-center gap-2 rounded-full border border-black/[0.08] bg-black/[0.025] px-3 py-1.5">
          <span className="relative flex h-1.5 w-1.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#2775CA] opacity-40" />

            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-[#2775CA]" />
          </span>

          <span className="text-[9px] font-semibold uppercase tracking-[0.2em] text-black/45">
            Built for Arc
          </span>
        </div>

        {/* =================================================
            PROGRESS
        ================================================= */}
        <div className="mt-10 w-full">
          <div className="mb-3 flex items-center justify-between">
            <span className="text-[10px] font-medium uppercase tracking-[0.2em] text-black/40">
              Initializing Network
            </span>

            <span className="font-mono text-xs font-medium text-[#2775CA]">
              {progress}%
            </span>
          </div>

          {/* Track */}
          <div className="h-[3px] w-full overflow-hidden rounded-full bg-black/[0.07]">
            <div
              className="h-full rounded-full bg-gradient-to-r from-[#2775CA] via-[#2775CA] to-fuchsia-500 transition-[width] duration-100"
              style={{
                width: `${progress}%`,
              }}
            />
          </div>
        </div>

        {/* =================================================
            STATUS
        ================================================= */}
        <div className="mt-6 flex w-full items-center justify-between text-[9px] uppercase tracking-[0.18em] text-black/30">
          <span>
            {progress < 35
              ? "Connecting"
              : progress < 70
                ? "Loading Bounties"
                : progress < 100
                  ? "Verifying Rewards"
                  : "Ready"}
          </span>

          <span className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#2775CA]" />
            Network Online
          </span>
        </div>

        {/* =================================================
            BOTTOM TEXT
        ================================================= */}
        <div className="mt-10 flex items-center gap-3 text-[9px] uppercase tracking-[0.25em] text-black/20">
          <span>Find</span>

          <span className="h-px w-5 bg-black/10" />

          <span>Build</span>

          <span className="h-px w-5 bg-black/10" />

          <span>Earn</span>
        </div>
      </div>

      {/* =====================================================
          CORNER DETAILS
      ===================================================== */}
      <div className="absolute left-6 top-6 text-[8px] uppercase tracking-[0.25em] text-black/20">
        HB // 001
      </div>

      <div className="absolute bottom-6 right-6 text-[8px] uppercase tracking-[0.25em] text-black/20">
        ARC // USDC NETWORK
      </div>

      {/* =====================================================
          ANIMATIONS
      ===================================================== */}
      <style>{`
        @keyframes scan {
          0% {
            transform: translateY(-10vh);
            opacity: 0;
          }

          20% {
            opacity: 1;
          }

          80% {
            opacity: 1;
          }

          100% {
            transform: translateY(110vh);
            opacity: 0;
          }
        }

        @keyframes coinFloat {
          0%,
          100% {
            transform: translateY(0) rotateZ(-2deg);
          }

          50% {
            transform: translateY(-8px) rotateZ(2deg);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          * {
            animation: none !important;
          }
        }
      `}</style>
    </div>
  );
}

export default LoadingScreen;
