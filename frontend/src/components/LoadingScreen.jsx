
import { useEffect, useState } from "react";
import Usdc from "../assets/images/Usdc.png";

function LoadingScreen({ onComplete }) {
  const [progress, setProgress] = useState(0);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const duration = 2200;
    const start = performance.now();

    let animationFrame;
    let completeTimeout;
    let fadeTimeout;

    const animate = (time) => {
      const elapsed = time - start;
      const percentage = Math.min(elapsed / duration, 1);

      const eased = 1 - Math.pow(1 - percentage, 3);

      setProgress(Math.floor(eased * 100));

      if (percentage < 1) {
        animationFrame = requestAnimationFrame(animate);
      } else {
        completeTimeout = setTimeout(() => {
          setFadeOut(true);

          fadeTimeout = setTimeout(() => {
            onComplete?.();
          }, 500);
        }, 250);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationFrame);
      clearTimeout(completeTimeout);
      clearTimeout(fadeTimeout);
    };
  }, [onComplete]);

  const floatingCoins = [
    {
      left: "4%",
      top: "12%",
      size: 18,
      delay: "0s",
      duration: "8s",
      rotate: "-8deg",
    },
    {
      left: "12%",
      top: "32%",
      size: 12,
      delay: "1.5s",
      duration: "10s",
      rotate: "12deg",
    },
    {
      left: "7%",
      top: "68%",
      size: 22,
      delay: "3s",
      duration: "11s",
      rotate: "-15deg",
    },
    {
      left: "18%",
      top: "84%",
      size: 14,
      delay: "0.5s",
      duration: "9s",
      rotate: "8deg",
    },

    {
      left: "28%",
      top: "10%",
      size: 11,
      delay: "2s",
      duration: "12s",
      rotate: "-10deg",
    },
    {
      left: "35%",
      top: "24%",
      size: 16,
      delay: "4s",
      duration: "9s",
      rotate: "15deg",
    },
    {
      left: "25%",
      top: "72%",
      size: 13,
      delay: "1s",
      duration: "10s",
      rotate: "-6deg",
    },
    {
      left: "39%",
      top: "88%",
      size: 20,
      delay: "3.5s",
      duration: "12s",
      rotate: "10deg",
    },

    {
      left: "58%",
      top: "9%",
      size: 15,
      delay: "1s",
      duration: "11s",
      rotate: "-12deg",
    },
    {
      left: "67%",
      top: "18%",
      size: 11,
      delay: "3s",
      duration: "9s",
      rotate: "7deg",
    },
    {
      left: "73%",
      top: "38%",
      size: 19,
      delay: "0s",
      duration: "10s",
      rotate: "-14deg",
    },
    {
      left: "62%",
      top: "78%",
      size: 13,
      delay: "2.5s",
      duration: "12s",
      rotate: "9deg",
    },

    {
      left: "82%",
      top: "12%",
      size: 21,
      delay: "4s",
      duration: "11s",
      rotate: "-7deg",
    },
    {
      left: "91%",
      top: "28%",
      size: 13,
      delay: "1s",
      duration: "9s",
      rotate: "13deg",
    },
    {
      left: "86%",
      top: "58%",
      size: 17,
      delay: "2s",
      duration: "10s",
      rotate: "-11deg",
    },
    {
      left: "94%",
      top: "82%",
      size: 11,
      delay: "0.5s",
      duration: "12s",
      rotate: "8deg",
    },

    {
      left: "48%",
      top: "5%",
      size: 9,
      delay: "3s",
      duration: "8s",
      rotate: "5deg",
    },
    {
      left: "52%",
      top: "92%",
      size: 16,
      delay: "1.5s",
      duration: "11s",
      rotate: "-9deg",
    },
  ];

  return (
    <div
      className={`fixed inset-0 z-[9999] flex min-h-screen items-center justify-center overflow-hidden bg-[#f6f5ef] text-black transition-opacity duration-500 ${
        fadeOut ? "pointer-events-none opacity-0" : "opacity-100"
      }`}
    >
      {/* =====================================================
          BACKGROUND
      ===================================================== */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {/* Extremely subtle central warmth */}

        <div className="absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#D4AF37]/[0.025] blur-[120px]" />

        {/* Subtle gold corner accents */}

        <div className="absolute left-[10%] top-[16%] h-32 w-32 rounded-full bg-[#D4AF37]/[0.018] blur-[90px]" />

        <div className="absolute bottom-[12%] right-[10%] h-40 w-40 rounded-full bg-[#D4AF37]/[0.018] blur-[100px]" />

        {/* =================================================
            SOFT ARCHITECTURAL BRICK
        ================================================= */}

        <div
          className="absolute -inset-20 scale-110 opacity-[0.025]"
          style={{
            backgroundImage: `
              linear-gradient(
                90deg,
                rgba(82, 67, 38, 0.65) 1px,
                transparent 1px
              ),
              linear-gradient(
                0deg,
                rgba(82, 67, 38, 0.65) 1px,
                transparent 1px
              )
            `,
            backgroundSize: "150px 76px",
            backgroundPosition: "0 0, 75px 38px",
          }}
        />

        {/* Soft architectural depth */}

        <div
          className="absolute -inset-20 scale-110 opacity-[0.012] blur-[8px]"
          style={{
            backgroundImage: `
              radial-gradient(
                ellipse at center,
                rgba(93, 72, 35, 0.55) 0%,
                rgba(93, 72, 35, 0.18) 35%,
                transparent 70%
              )
            `,
            backgroundSize: "170px 90px",
            backgroundPosition: "20px 10px",
          }}
        />

        {/* Clean center */}

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(246,245,239,0.92)_0%,rgba(246,245,239,0.62)_45%,rgba(246,245,239,0.2)_100%)]" />

        {/* =================================================
            FLOATING USDC COINS
        ================================================= */}

        {floatingCoins.map((coin, index) => (
          <div
            key={index}
            className="absolute opacity-[0.11]"
            style={{
              left: coin.left,
              top: coin.top,
              animation: `backgroundCoinFloat ${coin.duration} ease-in-out ${coin.delay} infinite`,
            }}
          >
            <img
              src={Usdc}
              alt=""
              aria-hidden="true"
              draggable="false"
              className="select-none object-contain"
              style={{
                width: `${coin.size}px`,
                height: `${coin.size}px`,
                transform: `rotate(${coin.rotate})`,
                filter:
                  "drop-shadow(0 5px 10px rgba(39,117,202,0.08))",
              }}
            />
          </div>
        ))}
      </div>

      {/* =====================================================
          SUBTLE GRID
      ===================================================== */}

      <div
        className="pointer-events-none absolute inset-0 opacity-[0.014]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,0,0,0.25) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.25) 1px, transparent 1px)",
          backgroundSize: "70px 70px",
        }}
      />

      {/* =====================================================
          SCAN LINE
      ===================================================== */}

      <div className="pointer-events-none absolute left-0 top-0 h-px w-full animate-[scan_3s_linear_infinite] bg-gradient-to-r from-transparent via-[#D4AF37]/40 to-transparent" />

      {/* =====================================================
          MAIN
      ===================================================== */}

      <div className="relative z-10 flex w-full max-w-md flex-col items-center px-6">
        {/* =================================================
            USDC VISUAL
        ================================================= */}

        <div className="relative mb-8 flex h-32 w-32 items-center justify-center">
          {/* Outer gold ring */}

          <div className="absolute inset-0 animate-[spin_10s_linear_infinite] rounded-full border border-black/[0.06] border-t-[#D4AF37]/70" />

          {/* Inner gold ring */}

          <div className="absolute inset-3 animate-[spin_7s_linear_infinite_reverse] rounded-full border border-black/[0.05] border-b-[#B28B20]/50" />

          {/* Subtle gold glow */}

          <div className="absolute h-24 w-24 rounded-full bg-[#D4AF37]/[0.07] blur-2xl" />

          {/* USDC image */}

          <div className="relative z-10 animate-[coinFloat_4s_ease-in-out_infinite]">
            <img
              src={Usdc}
              alt="USDC"
              className="h-20 w-20 select-none object-contain drop-shadow-[0_12px_20px_rgba(39,117,202,0.14)]"
              draggable="false"
            />
          </div>

          {/* Gold orbit dot */}

          <span className="absolute right-1 top-7 h-2 w-2 animate-pulse rounded-full bg-[#D4AF37] shadow-[0_0_12px_rgba(212,175,55,0.45)]" />

          {/* Small secondary dot */}

          <span className="absolute bottom-5 left-3 h-1.5 w-1.5 animate-pulse rounded-full bg-[#B28B20] shadow-[0_0_10px_rgba(178,139,32,0.35)]" />
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

        <div className="mt-5 inline-flex items-center gap-2 rounded-full border border-black/[0.05] bg-white/60 px-3 py-1.5 shadow-sm">
          <span className="relative flex h-1.5 w-1.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#D4AF37] opacity-40" />

            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-[#D4AF37]" />
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

            <span className="font-mono text-xs font-medium text-[#B28B20]">
              {progress}%
            </span>
          </div>

          <div className="h-[3px] w-full overflow-hidden rounded-full bg-black/[0.07]">
            <div
              className="h-full rounded-full bg-[#D4AF37] transition-[width] duration-100"
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
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#D4AF37]" />

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

        @keyframes backgroundCoinFloat {
          0%,
          100% {
            transform: translate3d(0, 0, 0) rotate(0deg);
          }

          25% {
            transform: translate3d(5px, -10px, 0) rotate(4deg);
          }

          50% {
            transform: translate3d(-4px, -18px, 0) rotate(-5deg);
          }

          75% {
            transform: translate3d(7px, -8px, 0) rotate(3deg);
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

