
import { useEffect, useRef } from "react";
import { FiArrowRight, FiZap, FiUsers } from "react-icons/fi";

const PlatformStats = () => {
  const statsRef = useRef(null);

  // Static frontend stats
  // No backend or API required
  const stats = {
    totalBounties: 124,
    totalRewards: 12500,
    totalUsers: 845,
  };

  useEffect(() => {
    const section = statsRef.current;

    if (!section) return;

    if (!("IntersectionObserver" in window)) {
      section.classList.add("stats-visible");
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          section.classList.add("stats-visible");
          observer.disconnect();
        }
      },
      {
        threshold: 0.2,
      }
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <section ref={statsRef} className="platform-stats-section">
        <div className="platform-stats-inner">

          {/* HEADER */}
          <div className="mb-8 text-center">

            {/* SMALL BADGE */}
            <div className="mx-auto mb-3 flex w-fit items-center gap-2 rounded-full border border-[#FF1AC6]/20 bg-[#FF1AC6]/10 px-3 py-1.5 text-xs font-medium text-[#FF1AC6]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#FF1AC6]" />
              Ecosystem Highlights
            </div>

            {/* TITLE */}
            <h2 className="text-2xl font-bold tracking-tight text-white md:text-3xl">
              Platform{" "}
              <span className="bg-gradient-to-r from-[#FF1AC6] to-purple-500 bg-clip-text text-transparent">
                Stats
              </span>
            </h2>

            {/* DESCRIPTION */}
            <p className="mx-auto mt-2 max-w-xl text-xs text-gray-500 md:text-sm">
              Key metrics from the Happy Bounty ecosystem.
            </p>
          </div>

          {/* STATS CARDS */}
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">

            {/* TOTAL BOUNTIES */}
            <div className="stats-card stats-card-one group">

              <div className="pointer-events-none absolute -right-10 -top-10 h-28 w-28 rounded-full bg-[#FF1AC6]/10 blur-2xl transition-all duration-500 group-hover:bg-[#FF1AC6]/20" />

              <div className="relative">

                <div className="mb-4 flex items-center justify-between">

                  <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-[#FF1AC6]/20 bg-[#FF1AC6]/10">
                    <FiArrowRight
                      className="text-[#FF1AC6]"
                      size={20}
                    />
                  </div>

                  <span className="text-xs font-medium text-gray-600">
                    BOUNTIES
                  </span>
                </div>

                <p className="text-sm text-gray-500">
                  Total Bounties
                </p>

                <h3 className="mt-1 text-3xl font-bold tracking-tight text-white">
                  {stats.totalBounties}+
                </h3>

                <div className="mt-4 flex items-center gap-2 text-xs text-gray-500">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#FF1AC6]" />
                  Web3 opportunities
                </div>

              </div>
            </div>

            {/* TOTAL REWARDS */}
            <div className="stats-card stats-card-two group">

              <div className="pointer-events-none absolute -right-10 -top-10 h-28 w-28 rounded-full bg-purple-500/10 blur-2xl transition-all duration-500 group-hover:bg-purple-500/20" />

              <div className="relative">

                <div className="mb-4 flex items-center justify-between">

                  <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-purple-500/20 bg-purple-500/10">
                    <FiZap
                      className="text-purple-400"
                      size={20}
                    />
                  </div>

                  <span className="text-xs font-medium text-gray-600">
                    REWARDS
                  </span>
                </div>

                <p className="text-sm text-gray-500">
                  Total Rewards
                </p>

                <h3 className="mt-1 text-3xl font-bold tracking-tight text-white">
                  ${stats.totalRewards.toLocaleString()}+
                </h3>

                <div className="mt-4 flex items-center gap-2 text-xs text-gray-500">
                  <span className="h-1.5 w-1.5 rounded-full bg-purple-400" />
                  Rewards available
                </div>

              </div>
            </div>

            {/* TOTAL CONTRIBUTORS */}
            <div className="stats-card stats-card-three group">

              <div className="pointer-events-none absolute -right-10 -top-10 h-28 w-28 rounded-full bg-[#FF1AC6]/10 blur-2xl transition-all duration-500 group-hover:bg-[#FF1AC6]/20" />

              <div className="relative">

                <div className="mb-4 flex items-center justify-between">

                  <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-[#FF1AC6]/20 bg-[#FF1AC6]/10">
                    <FiUsers
                      className="text-[#FF1AC6]"
                      size={20}
                    />
                  </div>

                  <span className="text-xs font-medium text-gray-600">
                    CONTRIBUTORS
                  </span>
                </div>

                <p className="text-sm text-gray-500">
                  Total Contributors
                </p>

                <h3 className="mt-1 text-3xl font-bold tracking-tight text-white">
                  {stats.totalUsers}+
                </h3>

                <div className="mt-4 flex items-center gap-2 text-xs text-gray-500">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#FF1AC6]" />
                  Growing community
                </div>

              </div>
            </div>
          </div>

          {/* FOOTER */}
          <div className="mt-6 flex flex-col items-center justify-between gap-2 border-t border-white/10 pt-4 text-center sm:flex-row sm:text-left">

            <div className="flex items-center gap-2 text-xs text-gray-500">
              <span className="h-1.5 w-1.5 rounded-full bg-[#FF1AC6]" />
              Building the future of Web3 work
            </div>

            <div className="text-xs text-gray-600">
              One bounty at a time
            </div>

          </div>

        </div>
      </section>

      <style>{`
        /* ========================================
           PLATFORM STATS
        ======================================== */

        .platform-stats-section {
          position: relative;
          width: 100%;
          padding: 80px 24px;
          overflow: hidden;
          background: #070708;
          color: white;
        }

        .platform-stats-inner {
          position: relative;
          width: 100%;
          max-width: 1400px;
          margin: 0 auto;
        }

        /* ========================================
           STAT CARDS
        ======================================== */

        .platform-stats-section .stats-card {
          position: relative;
          min-height: 180px;
          padding: 22px 20px;
          overflow: hidden;

          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 22px;

          background:
            linear-gradient(
              145deg,
              rgba(255, 255, 255, 0.045),
              rgba(255, 255, 255, 0.015)
            );

          transition:
            border-color 0.35s ease,
            background 0.35s ease,
            box-shadow 0.35s ease;
        }

        .platform-stats-section .stats-card:hover {
          border-color: rgba(255, 255, 255, 0.14);

          background:
            linear-gradient(
              145deg,
              rgba(255, 255, 255, 0.06),
              rgba(255, 255, 255, 0.02)
            );

          box-shadow:
            0 20px 50px rgba(0, 0, 0, 0.25);
        }

        /* ========================================
           NEW DESKTOP ANIMATION
           BOTTOM → TOP + SCALE
        ======================================== */

        @media (min-width: 1024px) {

          .platform-stats-section .stats-card {
            opacity: 0;
            transform:
              translateY(55px)
              scale(0.94);
          }

          .platform-stats-section.stats-visible .stats-card-one {
            animation:
              statsCardReveal
              0.85s
              cubic-bezier(.22, 1, .36, 1)
              0.1s
              forwards;
          }

          .platform-stats-section.stats-visible .stats-card-two {
            animation:
              statsCardReveal
              0.85s
              cubic-bezier(.22, 1, .36, 1)
              0.3s
              forwards;
          }

          .platform-stats-section.stats-visible .stats-card-three {
            animation:
              statsCardReveal
              0.85s
              cubic-bezier(.22, 1, .36, 1)
              0.5s
              forwards;
          }

          @keyframes statsCardReveal {

            0% {
              opacity: 0;
              transform:
                translateY(55px)
                scale(0.94);
            }

            65% {
              opacity: 1;
              transform:
                translateY(-5px)
                scale(1.01);
            }

            100% {
              opacity: 1;
              transform:
                translateY(0)
                scale(1);
            }
          }
        }

        /* ========================================
           MOBILE + TABLET
           NO ENTRY ANIMATION
        ======================================== */

        @media (max-width: 1023px) {

          .platform-stats-section .stats-card {
            opacity: 1 !important;
            transform: none !important;
          }
        }

        /* ========================================
           MOBILE SPACING
        ======================================== */

        @media (max-width: 640px) {

          .platform-stats-section {
            padding: 64px 20px;
          }

          .platform-stats-section .stats-card {
            min-height: 175px;
          }
        }

        /* ========================================
           REDUCED MOTION
        ======================================== */

        @media (prefers-reduced-motion: reduce) {

          .platform-stats-section,
          .platform-stats-section *,
          .platform-stats-section *::before,
          .platform-stats-section *::after {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
          }

          .platform-stats-section .stats-card {
            opacity: 1 !important;
            transform: none !important;
          }
        }
      `}</style>
    </>
  );
};

export default PlatformStats;

