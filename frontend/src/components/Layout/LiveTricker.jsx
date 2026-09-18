
function LiveTricker() {
  const items = [
    { label: "Built for Arc", type: "ARC" },
    { label: "Earn USDC Rewards", type: "USDC" },
    { label: "Complete On-Chain Bounties", type: "BOUNTY" },
    { label: "Fast USDC Payouts", type: "PAYOUT" },
    { label: "New Bounties Added Daily", type: "NEW" },
  ];

  return (
    <div className="relative mt-1 w-full overflow-hidden border-y border-black/[0.06] bg-white">
      {/* Left fade */}
      <div className="pointer-events-none absolute bottom-0 left-0 top-0 z-20 w-24 bg-gradient-to-r from-white via-white/95 to-transparent" />

      {/* Right fade */}
      <div className="pointer-events-none absolute bottom-0 right-0 top-0 z-20 w-24 bg-gradient-to-l from-white via-white/95 to-transparent" />

      {/* Subtle Arc / USDC glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-8 w-80 -translate-x-1/2 -translate-y-1/2 bg-[#2775CA]/[0.035] blur-3xl" />

      {/* Ticker */}
      <div className="ticker-track">
        {[1, 2, 3].map((_, index) => (
          <div key={index} className="ticker-content">
            {items.map((item, i) => (
              <div key={i} className="ticker-item">
                {/* Status indicator */}
                <span
                  className={`status-dot ${
                    item.type === "ARC"
                      ? "arc"
                      : item.type === "USDC"
                        ? "usdc"
                        : item.type === "NEW"
                          ? "pink"
                          : "purple"
                  }`}
                />

                {/* Label */}
                <span className="ticker-label">{item.label}</span>

                {/* Category */}
                <span
                  className={`ticker-category ${
                    item.type === "USDC"
                      ? "usdc-category"
                      : item.type === "ARC"
                        ? "arc-category"
                        : ""
                  }`}
                >
                  {item.type}
                </span>

                {/* Separator */}
                <span className="ticker-separator">/</span>
              </div>
            ))}
          </div>
        ))}
      </div>

      <style>{`
        .ticker-track {
          display: flex;
          width: max-content;
          animation: tickerScroll 28s linear infinite;
          will-change: transform;
        }

        .ticker-track:hover {
          animation-play-state: paused;
        }

        .ticker-content {
          display: flex;
          align-items: center;
          padding-right: 20px;
        }

        .ticker-item {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 13px 18px;
          white-space: nowrap;
        }

        /* =====================================================
           TEXT
        ===================================================== */

        .ticker-label {
          color: #171717;
          font-size: 13px;
          font-weight: 600;
          letter-spacing: 0.01em;
        }

        .ticker-category {
          font-size: 9px;
          font-weight: 800;
          letter-spacing: 0.12em;
          color: #7c3aed;
          padding: 3px 7px;
          border-radius: 999px;
          border: 1px solid rgba(124, 58, 237, 0.15);
          background: rgba(124, 58, 237, 0.045);
        }

        /* Arc */
        .arc-category {
          color: #111111;
          border-color: rgba(0, 0, 0, 0.12);
          background: rgba(0, 0, 0, 0.035);
        }

        /* USDC */
        .usdc-category {
          color: #2775ca;
          border-color: rgba(39, 117, 202, 0.18);
          background: rgba(39, 117, 202, 0.05);
        }

        .ticker-separator {
          margin-left: 8px;
          color: rgba(0, 0, 0, 0.12);
          font-size: 18px;
        }

        /* =====================================================
           STATUS DOTS
        ===================================================== */

        .status-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          display: inline-block;
          flex-shrink: 0;
        }

        .status-dot.arc {
          background: #111111;
          box-shadow: 0 0 7px rgba(0, 0, 0, 0.25);
          animation: arcPulse 2.5s ease-in-out infinite;
        }

        .status-dot.usdc {
          background: #2775ca;
          box-shadow:
            0 0 7px rgba(39, 117, 202, 0.55),
            0 0 14px rgba(39, 117, 202, 0.2);
          animation: usdcPulse 2s ease-in-out infinite;
        }

        .status-dot.pink {
          background: #ff1ac6;
          box-shadow: 0 0 8px rgba(255, 26, 198, 0.45);
          animation: pinkPulse 2.5s ease-in-out infinite;
        }

        .status-dot.purple {
          background: #8b5cf6;
          box-shadow: 0 0 8px rgba(139, 92, 246, 0.45);
          animation: purplePulse 2.5s ease-in-out infinite;
        }

        /* =====================================================
           TICKER ANIMATION
        ===================================================== */

        @keyframes tickerScroll {
          from {
            transform: translateX(0);
          }

          to {
            transform: translateX(-33.333333%);
          }
        }

        /* =====================================================
           ARC PULSE
        ===================================================== */

        @keyframes arcPulse {
          0%,
          100% {
            opacity: 0.45;
            transform: scale(0.85);
          }

          50% {
            opacity: 1;
            transform: scale(1);
          }
        }

        /* =====================================================
           USDC PULSE
        ===================================================== */

        @keyframes usdcPulse {
          0%,
          100% {
            opacity: 0.65;
            transform: scale(0.9);
          }

          50% {
            opacity: 1;
            transform: scale(1.1);
          }
        }

        /* =====================================================
           PINK PULSE
        ===================================================== */

        @keyframes pinkPulse {
          0%,
          100% {
            opacity: 0.7;
            box-shadow: 0 0 5px rgba(255, 26, 198, 0.3);
          }

          50% {
            opacity: 1;
            box-shadow:
              0 0 8px rgba(255, 26, 198, 0.65),
              0 0 14px rgba(255, 26, 198, 0.2);
          }
        }

        /* =====================================================
           PURPLE PULSE
        ===================================================== */

        @keyframes purplePulse {
          0%,
          100% {
            opacity: 0.7;
          }

          50% {
            opacity: 1;
            box-shadow:
              0 0 8px rgba(139, 92, 246, 0.65),
              0 0 14px rgba(139, 92, 246, 0.2);
          }
        }

        /* =====================================================
           MOBILE
        ===================================================== */

        @media (max-width: 640px) {
          .ticker-item {
            padding: 12px 14px;
            gap: 8px;
          }

          .ticker-label {
            font-size: 12px;
          }

          .ticker-category {
            font-size: 8px;
          }

          .ticker-track {
            animation-duration: 22s;
          }
        }

        /* =====================================================
           REDUCED MOTION
        ===================================================== */

        @media (prefers-reduced-motion: reduce) {
          .ticker-track {
            animation: none;
          }

          .status-dot {
            animation: none;
          }
        }
      `}</style>
    </div>
  );
}

export default LiveTricker;
