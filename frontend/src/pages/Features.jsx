
import { useEffect, useRef, useState } from "react";
import {
  FiShield,
  FiGlobe,
  FiZap,
  FiActivity,
  FiCheck,
  FiUsers,
  FiArrowRight,
} from "react-icons/fi";
import { Link } from "react-router-dom";

function Features() {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(section);
        }
      },
      {
        threshold: 0.15,
      }
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <style>
        {`
          @keyframes featuresFadeUp {
            from {
              opacity: 0;
              transform: translateY(45px);
            }

            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          @keyframes featuresFadeDown {
            from {
              opacity: 0;
              transform: translateY(-25px);
            }

            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          @keyframes featuresGlow {
            0%,
            100% {
              opacity: 0.35;
              transform: scale(1);
            }

            50% {
              opacity: 0.65;
              transform: scale(1.08);
            }
          }

          @keyframes featuresShine {
            0% {
              transform: translateX(-120%);
            }

            100% {
              transform: translateX(120%);
            }
          }

          @keyframes featuresPulse {
            0%,
            100% {
              opacity: 0.45;
              transform: scale(1);
            }

            50% {
              opacity: 1;
              transform: scale(1.25);
            }
          }

          .features-header-animation {
            opacity: 0;
          }

          .features-header-animation.visible {
            animation: featuresFadeDown 0.8s ease-out forwards;
          }

          .features-card-animation {
            opacity: 0;
          }

          .features-card-animation.visible {
            animation:
              featuresFadeUp
              0.8s
              cubic-bezier(0.22, 1, 0.36, 1)
              forwards;
          }

          .features-glow {
            animation: featuresGlow 5s ease-in-out infinite;
          }

          .features-shine {
            position: absolute;
            inset: 0;
            width: 45%;
            background: linear-gradient(
              90deg,
              transparent,
              rgba(255, 255, 255, 0.55),
              transparent
            );
            transform: translateX(-120%);
            pointer-events: none;
          }

          .group:hover .features-shine {
            animation: featuresShine 1s ease-out;
          }

          .features-status-dot {
            animation: featuresPulse 2.4s ease-in-out infinite;
          }

          @media (prefers-reduced-motion: reduce) {
            .features-header-animation,
            .features-card-animation {
              opacity: 1;
              animation: none !important;
              transform: none !important;
            }

            .features-glow,
            .features-shine,
            .features-status-dot {
              animation: none !important;
            }
          }
        `}
      </style>

      <section
        ref={sectionRef}
        className="relative z-10 my-24 overflow-hidden bg-[#f6f5ef] px-6 py-4 md:px-10 lg:px-16"
      >
        {/* BACKGROUND AMBIENCE */}

        <div
          className="pointer-events-none absolute inset-0 opacity-50"
          style={{
            backgroundImage: `
              linear-gradient(
                rgba(105,82,35,0.035) 1px,
                transparent 1px
              ),
              linear-gradient(
                90deg,
                rgba(105,82,35,0.025) 1px,
                transparent 1px
              )
            `,
            backgroundSize: "64px 32px",
            maskImage:
              "linear-gradient(to bottom, black, transparent 85%)",
            WebkitMaskImage:
              "linear-gradient(to bottom, black, transparent 85%)",
          }}
        />

        <div className="features-glow pointer-events-none absolute -left-32 top-0 h-96 w-96 rounded-full bg-[#2775CA]/[0.07] blur-[140px]" />

        <div className="features-glow pointer-events-none absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-[#FF1AC6]/[0.055] blur-[140px]" />

        <div className="pointer-events-none absolute left-1/2 top-1/3 h-72 w-72 -translate-x-1/2 rounded-full bg-[#2775CA]/[0.025] blur-[120px]" />

        <div className="relative mx-auto max-w-7xl">

          {/* HEADER */}

          <div
            className={`features-header-animation ${
              isVisible ? "visible" : ""
            } mx-auto mb-14 max-w-3xl text-center`}
          >
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-black/[0.08] bg-white/70 px-4 py-2 shadow-[0_8px_25px_rgba(35,31,22,0.035)] backdrop-blur-xl">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#FF1AC6] opacity-30" />

                <span className="relative inline-flex h-2 w-2 rounded-full bg-[#FF1AC6]" />
              </span>

              <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#77736b]">
                Built for Arc
              </span>

              <span className="h-1 w-1 rounded-full bg-black/20" />

              <span className="text-[11px] font-bold uppercase tracking-[0.16em] text-[#FF1AC6]">
                USDC Native
              </span>
            </div>

            <h2 className="text-4xl font-bold tracking-[-0.04em] text-[#111111] md:text-5xl">
              Everything You Need to{" "}
              <span
                style={{
                  background:
                    "linear-gradient(100deg, #2775CA 0%, #2775CA 38%, #8B5CF6 70%, #FF1AC6 100%)",
                  WebkitBackgroundClip: "text",
                  backgroundClip: "text",
                  color: "transparent",
                }}
              >
                Earn
              </span>
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-[#77736b] md:text-base">
              Fresh Bounty connects creators and contributors through
              on-chain opportunities, with Arc and USDC powering a
              faster way to fund, complete, and reward Web3 work.
            </p>
          </div>

          {/* FEATURE GRID */}

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">

            {/* USDC REWARDS */}

            <div
              className={`features-card-animation ${
                isVisible ? "visible" : ""
              } group relative overflow-hidden rounded-[26px] border border-black/[0.08] bg-white/75 p-7 shadow-[0_15px_45px_rgba(35,31,22,0.045)] backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-[#2775CA]/30 hover:bg-white hover:shadow-[0_22px_65px_rgba(39,117,202,0.11)]`}
              style={{ animationDelay: "150ms" }}
            >
              <div className="features-shine" />

              <div className="pointer-events-none absolute -right-24 -top-24 h-48 w-48 rounded-full bg-[#2775CA]/[0.07] blur-[80px] transition-all duration-500 group-hover:bg-[#2775CA]/[0.14]" />

              <div className="absolute left-7 right-7 top-0 h-px bg-gradient-to-r from-transparent via-[#2775CA]/55 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

              <div className="relative z-10">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-[#2775CA]/20 bg-[#2775CA]/[0.07] text-[#2775CA] transition-all duration-500 group-hover:scale-110 group-hover:rotate-3 group-hover:border-[#2775CA]/40 group-hover:bg-[#2775CA]/[0.11]">
                  <FiZap className="h-6 w-6" />
                </div>

                <div className="mt-7">
                  <h3 className="text-lg font-semibold tracking-tight text-[#171717]">
                    USDC Rewards
                  </h3>

                  <div className="mt-4 h-px w-10 bg-[#2775CA]/70 transition-all duration-500 group-hover:w-16" />

                  <p className="mt-4 text-sm leading-6 text-[#77736b]">
                    Complete approved bounties and work toward earning
                    rewards through a USDC-powered bounty experience.
                  </p>
                </div>

                <div className="mt-7 flex items-center gap-2 border-t border-black/[0.06] pt-5 text-xs font-medium text-[#77736b]">
                  <FiCheck className="h-4 w-4 text-[#2775CA]" />
                  <span>USDC reward flow</span>
                </div>
              </div>
            </div>

            {/* BUILT ON ARC */}

            <div
              className={`features-card-animation ${
                isVisible ? "visible" : ""
              } group relative overflow-hidden rounded-[26px] border border-black/[0.08] bg-white/75 p-7 shadow-[0_15px_45px_rgba(35,31,22,0.045)] backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-[#8B5CF6]/30 hover:bg-white hover:shadow-[0_22px_65px_rgba(139,92,246,0.1)]`}
              style={{ animationDelay: "300ms" }}
            >
              <div className="features-shine" />

              <div className="pointer-events-none absolute -bottom-24 -right-24 h-48 w-48 rounded-full bg-[#8B5CF6]/[0.065] blur-[80px] transition-all duration-500 group-hover:bg-[#8B5CF6]/[0.13]" />

              <div className="absolute left-7 right-7 top-0 h-px bg-gradient-to-r from-transparent via-[#8B5CF6]/55 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

              <div className="relative z-10">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-[#8B5CF6]/20 bg-[#8B5CF6]/[0.07] text-[#8B5CF6] transition-all duration-500 group-hover:scale-110 group-hover:-rotate-3 group-hover:border-[#8B5CF6]/40 group-hover:bg-[#8B5CF6]/[0.11]">
                  <FiGlobe className="h-6 w-6" />
                </div>

                <div className="mt-7">
                  <h3 className="text-lg font-semibold tracking-tight text-[#171717]">
                    Built on Arc
                  </h3>

                  <div className="mt-4 h-px w-10 bg-[#8B5CF6]/70 transition-all duration-500 group-hover:w-16" />

                  <p className="mt-4 text-sm leading-6 text-[#77736b]">
                    A bounty experience designed around Arc, giving
                    creators and contributors a focused on-chain
                    environment for Web3 work.
                  </p>
                </div>

                <div className="mt-7 flex items-center gap-2 border-t border-black/[0.06] pt-5 text-xs font-medium text-[#77736b]">
                  <FiCheck className="h-4 w-4 text-[#8B5CF6]" />
                  <span>Arc-powered workflow</span>
                </div>
              </div>
            </div>

            {/* SECURE BOUNTIES */}

            <div
              className={`features-card-animation ${
                isVisible ? "visible" : ""
              } group relative overflow-hidden rounded-[26px] border border-black/[0.08] bg-white/75 p-7 shadow-[0_15px_45px_rgba(35,31,22,0.045)] backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-[#FF1AC6]/30 hover:bg-white hover:shadow-[0_22px_65px_rgba(255,26,198,0.09)]`}
              style={{ animationDelay: "450ms" }}
            >
              <div className="features-shine" />

              <div className="pointer-events-none absolute -right-24 -top-24 h-48 w-48 rounded-full bg-[#FF1AC6]/[0.055] blur-[80px] transition-all duration-500 group-hover:bg-[#FF1AC6]/[0.12]" />

              <div className="absolute left-7 right-7 top-0 h-px bg-gradient-to-r from-transparent via-[#FF1AC6]/55 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

              <div className="relative z-10">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-[#FF1AC6]/20 bg-[#FF1AC6]/[0.07] text-[#FF1AC6] transition-all duration-500 group-hover:scale-110 group-hover:rotate-3 group-hover:border-[#FF1AC6]/40 group-hover:bg-[#FF1AC6]/[0.11]">
                  <FiShield className="h-6 w-6" />
                </div>

                <div className="mt-7">
                  <h3 className="text-lg font-semibold tracking-tight text-[#171717]">
                    Secure Bounties
                  </h3>

                  <div className="mt-4 h-px w-10 bg-[#FF1AC6]/70 transition-all duration-500 group-hover:w-16" />

                  <p className="mt-4 text-sm leading-6 text-[#77736b]">
                    Bounty funding and reward flows are designed to
                    keep contributors and creators aligned throughout
                    the work.
                  </p>
                </div>

                <div className="mt-7 flex items-center gap-2 border-t border-black/[0.06] pt-5 text-xs font-medium text-[#77736b]">
                  <FiCheck className="h-4 w-4 text-emerald-500" />
                  <span>Protected workflow</span>
                </div>
              </div>
            </div>

            {/* ON-CHAIN TRANSPARENCY */}

            <div
              className={`features-card-animation ${
                isVisible ? "visible" : ""
              } group relative overflow-hidden rounded-[26px] border border-black/[0.08] bg-white/75 p-7 shadow-[0_15px_45px_rgba(35,31,22,0.045)] backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-[#695223]/30 hover:bg-white hover:shadow-[0_22px_65px_rgba(105,82,35,0.09)]`}
              style={{ animationDelay: "600ms" }}
            >
              <div className="features-shine" />

              <div className="pointer-events-none absolute -bottom-24 -right-24 h-48 w-48 rounded-full bg-[#695223]/[0.055] blur-[80px] transition-all duration-500 group-hover:bg-[#695223]/[0.11]" />

              <div className="absolute left-7 right-7 top-0 h-px bg-gradient-to-r from-transparent via-[#695223]/45 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

              <div className="relative z-10">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-[#695223]/15 bg-[#695223]/[0.055] text-[#695223] transition-all duration-500 group-hover:scale-110 group-hover:-rotate-3 group-hover:border-[#695223]/30 group-hover:bg-[#695223]/[0.09]">
                  <FiActivity className="h-6 w-6" />
                </div>

                <div className="mt-7">
                  <h3 className="text-lg font-semibold tracking-tight text-[#171717]">
                    On-Chain Transparency
                  </h3>

                  <div className="mt-4 h-px w-10 bg-[#695223]/60 transition-all duration-500 group-hover:w-16" />

                  <p className="mt-4 text-sm leading-6 text-[#77736b]">
                    Keep bounty activity, submissions, and reward
                    flows visible through a transparent Web3
                    experience.
                  </p>
                </div>

                <div className="mt-7 flex items-center gap-2 border-t border-black/[0.06] pt-5 text-xs font-medium text-[#77736b]">
                  <FiCheck className="h-4 w-4 text-[#695223]" />
                  <span>Visible on-chain activity</span>
                </div>
              </div>
            </div>
          </div>

          {/* TRUST BAR */}

          <div
            className={`features-card-animation ${
              isVisible ? "visible" : ""
            } mt-7 flex flex-col items-center justify-between gap-6 rounded-[24px] border border-black/[0.08] bg-white/75 px-6 py-5 shadow-[0_15px_50px_rgba(35,31,22,0.055)] backdrop-blur-xl md:flex-row md:px-7`}
            style={{ animationDelay: "750ms" }}
          >
            <div className="flex items-center gap-4">
              <div className="relative flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-[#2775CA]/15 bg-[#2775CA]/[0.06] text-[#FF1AC6] transition-transform duration-300 hover:scale-110">
                <span className="features-status-dot absolute right-1.5 top-1.5 h-1.5 w-1.5 rounded-full bg-[#FF1AC6] shadow-[0_0_8px_rgba(39,117,202,0.45)]" />

                <FiUsers className="h-5 w-5" />
              </div>

              <div>
                <p className="text-sm font-semibold text-[#171717]">
                  Built for creators & contributors
                </p>

                <p className="mt-0.5 text-xs text-[#77736b]">
                  One platform. Arc-powered opportunities. USDC rewards.
                </p>
              </div>
            </div>

            <Link
              to="/dashboard"
              className="group flex items-center gap-2 rounded-xl border border-[#2775CA]/20 bg-[#FF1AC6]/[0.06] px-5 py-2.5 text-sm font-semibold text-[#FF1AC6] transition-all duration-300 hover:border-gold-700 hover:bg-[#FF1AC6] hover:text-white hover:shadow-[0_10px_30px_rgba(39,117,202,0.18)]"
            >
              <span>Explore Opportunities</span>

              <FiArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>

          {/* SMALL ARC / USDC FOOTER LINE */}

          <div
            className={`features-card-animation ${
              isVisible ? "visible" : ""
            } mt-7 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-center`}
            style={{ animationDelay: "900ms" }}
          >
            <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-[#FF1AC6]">
              ARC
            </span>

            <span className="h-1 w-1 rounded-full bg-black/20" />

            <span className="text-[9px] font-semibold uppercase tracking-[0.18em] text-[#8b8880]">
              USDC
            </span>

            <span className="h-1 w-1 rounded-full bg-black/20" />

            <span className="text-[9px] font-semibold uppercase tracking-[0.18em] text-[#8b8880]">
              WEB3 WORK
            </span>
          </div>
        </div>
      </section>
    </>
  );
}

export default Features;

