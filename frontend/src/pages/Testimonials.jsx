
import { useEffect, useRef, useState } from "react";
import {
  FiCheck,
  FiShield,
  FiCode,
  FiPenTool,
  FiZap,
  FiArrowUpRight,
} from "react-icons/fi";

function Testimonials() {
  const testimonialsRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const section = testimonialsRef.current;

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
          @keyframes testimonialHeader {
            from {
              opacity: 0;
              transform: translateY(-30px);
            }

            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          @keyframes testimonialCard {
            from {
              opacity: 0;
              transform: translateY(55px) scale(0.97);
            }

            to {
              opacity: 1;
              transform: translateY(0) scale(1);
            }
          }

          @keyframes testimonialGlow {
            0%,
            100% {
              transform: scale(1);
              opacity: 0.35;
            }

            50% {
              transform: scale(1.12);
              opacity: 0.65;
            }
          }

          @keyframes testimonialFloat {
            0%,
            100% {
              transform: translateY(0);
            }

            50% {
              transform: translateY(-5px);
            }
          }

          @keyframes testimonialShine {
            0% {
              transform: translateX(-130%);
            }

            100% {
              transform: translateX(130%);
            }
          }

          @keyframes testimonialPulse {
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

          .testimonial-header {
            opacity: 0;
          }

          .testimonial-header.visible {
            animation:
              testimonialHeader
              0.8s
              cubic-bezier(0.22, 1, 0.36, 1)
              forwards;
          }

          .testimonial-card {
            opacity: 0;
          }

          .testimonial-card.visible {
            animation:
              testimonialCard
              0.9s
              cubic-bezier(0.22, 1, 0.36, 1)
              forwards;
          }

          .testimonial-glow {
            animation: testimonialGlow 5s ease-in-out infinite;
          }

          .testimonial-quote {
            animation: testimonialFloat 4s ease-in-out infinite;
          }

          .testimonial-shine {
            position: absolute;
            top: 0;
            bottom: 0;
            left: 0;
            width: 35%;
            pointer-events: none;
            background: linear-gradient(
              90deg,
              transparent,
              rgba(255, 255, 255, 0.7),
              transparent
            );
            transform: translateX(-130%);
          }

          .testimonial-card:hover .testimonial-shine {
            animation: testimonialShine 1s ease-out;
          }

          .testimonial-status {
            animation: testimonialPulse 2.5s ease-in-out infinite;
          }

          @media (prefers-reduced-motion: reduce) {
            .testimonial-header,
            .testimonial-card {
              opacity: 1;
              animation: none !important;
              transform: none !important;
            }

            .testimonial-glow,
            .testimonial-quote,
            .testimonial-shine,
            .testimonial-status {
              animation: none !important;
            }
          }
        `}
      </style>

      <section
        ref={testimonialsRef}
        className="relative z-10 mx-6 my-24 overflow-hidden bg-[#f6f5ef] md:mx-10 lg:mx-16"
      >
        {/* ARCHITECTURAL BACKGROUND */}

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
              "linear-gradient(to bottom, black, transparent 88%)",
            WebkitMaskImage:
              "linear-gradient(to bottom, black, transparent 88%)",
          }}
        />

        {/* BACKGROUND GLOWS */}

        <div className="testimonial-glow pointer-events-none absolute -left-32 top-10 h-80 w-80 rounded-full bg-[#2775CA]/[0.065] blur-[130px]" />

        <div className="testimonial-glow pointer-events-none absolute -right-32 bottom-0 h-80 w-80 rounded-full bg-[#FF1AC6]/[0.05] blur-[130px]" />

        <div className="pointer-events-none absolute left-1/2 top-1/3 h-72 w-72 -translate-x-1/2 rounded-full bg-[#695223]/[0.025] blur-[120px]" />

        <div className="relative mx-auto max-w-6xl">

          {/* HEADER */}

          <div
            className={`testimonial-header ${
              isVisible ? "visible" : ""
            } mx-auto mb-14 max-w-3xl text-center`}
          >
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-black/[0.08] bg-white/70 px-4 py-2 shadow-[0_8px_25px_rgba(35,31,22,0.035)] backdrop-blur-xl">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#2775CA] opacity-30" />

                <span className="relative inline-flex h-2 w-2 rounded-full bg-[#2775CA]" />
              </span>

              <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#77736b]">
                Built Around Real Work
              </span>

              <span className="h-1 w-1 rounded-full bg-black/20" />

              <span className="text-[11px] font-bold uppercase tracking-[0.16em] text-[#2775CA]">
                Arc / USDC
              </span>
            </div>

            <h2 className="text-4xl font-bold tracking-[-0.04em] text-[#111111] md:text-5xl">
              Built for People Who{" "}
              <span
                style={{
                  background:
                    "linear-gradient(100deg, #2775CA 0%, #2775CA 38%, #8B5CF6 70%, #FF1AC6 100%)",
                  WebkitBackgroundClip: "text",
                  backgroundClip: "text",
                  color: "transparent",
                }}
              >
                Build
              </span>
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-[#77736b] md:text-base">
              Fresh Bounty is designed for creators who need quality work
              and contributors looking for meaningful Web3 opportunities
              with transparent reward flows.
            </p>
          </div>

          {/* TESTIMONIAL GRID */}

          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">

            {/* CREATOR EXPERIENCE */}

            <div
              className={`testimonial-card ${
                isVisible ? "visible" : ""
              } group relative overflow-hidden rounded-[28px] border border-black/[0.08] bg-white/75 p-7 shadow-[0_18px_55px_rgba(35,31,22,0.05)] backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-[#2775CA]/30 hover:bg-white hover:shadow-[0_25px_70px_rgba(39,117,202,0.1)] md:p-8`}
              style={{ animationDelay: "200ms" }}
            >
              <div className="testimonial-shine" />

              <div className="pointer-events-none absolute -right-24 -top-24 h-56 w-56 rounded-full bg-[#2775CA]/[0.065] blur-[90px] transition-all duration-500 group-hover:bg-[#2775CA]/[0.13]" />

              <div className="testimonial-quote absolute right-7 top-5 select-none font-serif text-7xl leading-none text-[#2775CA]/[0.09]">
                "
              </div>

              <div className="relative z-10">

                {/* USER */}

                <div className="mb-7 flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="relative">
                      <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-[#2775CA]/20 bg-[#2775CA]/[0.07] text-[#2775CA]">
                        <FiCode className="h-6 w-6" />
                      </div>

                      <span className="absolute -bottom-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full border border-[#f6f5ef] bg-white">
                        <span className="testimonial-status h-2 w-2 rounded-full bg-[#2775CA] shadow-[0_0_8px_rgba(39,117,202,0.55)]" />
                      </span>
                    </div>

                    <div>
                      <div className="flex items-center gap-2">
                        <p className="font-semibold text-[#171717]">
                          Bounty Creator
                        </p>

                        <span className="flex h-4 w-4 items-center justify-center rounded-full bg-[#2775CA] text-[9px] font-bold text-white">
                          <FiCheck className="h-2.5 w-2.5" />
                        </span>
                      </div>

                      <p className="mt-1 text-xs text-[#8b8880]">
                        Web3 Project Builder
                      </p>
                    </div>
                  </div>

                  <span className="hidden text-[10px] uppercase tracking-[0.2em] text-[#aaa69d] sm:block">
                    Creator
                  </span>
                </div>

                {/* MESSAGE */}

                <div className="mb-5 flex items-center gap-2">
                  <span className="rounded-full border border-[#2775CA]/15 bg-[#2775CA]/[0.055] px-2.5 py-1 text-[9px] font-bold uppercase tracking-[0.15em] text-[#2775CA]">
                    Bounty Funding
                  </span>

                  <span className="text-[10px] text-[#aaa69d]">
                    Arc
                  </span>
                </div>

                <p className="text-base leading-relaxed text-[#4f4c46] md:text-lg">
                  “Post the work, define the reward, and let contributors
                  focus on delivering quality results. The bounty workflow
                  keeps everything clear from task creation to completion.”
                </p>

                {/* FOOTER */}

                <div className="mt-8 flex items-center justify-between border-t border-black/[0.06] pt-5">
                  <span className="text-xs text-[#99958c]">
                    Creator workflow
                  </span>

                  <span className="flex items-center gap-2 text-xs font-medium text-[#2775CA]">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#2775CA] shadow-[0_0_7px_rgba(39,117,202,0.5)]" />
                    Funded on-chain
                  </span>
                </div>
              </div>
            </div>

            {/* CONTRIBUTOR EXPERIENCE */}

            <div
              className={`testimonial-card ${
                isVisible ? "visible" : ""
              } group relative overflow-hidden rounded-[28px] border border-black/[0.08] bg-white/75 p-7 shadow-[0_18px_55px_rgba(35,31,22,0.05)] backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-[#FF1AC6]/25 hover:bg-white hover:shadow-[0_25px_70px_rgba(255,26,198,0.08)] md:p-8`}
              style={{ animationDelay: "400ms" }}
            >
              <div className="testimonial-shine" />

              <div className="pointer-events-none absolute -bottom-24 -right-24 h-56 w-56 rounded-full bg-[#FF1AC6]/[0.055] blur-[90px] transition-all duration-500 group-hover:bg-[#FF1AC6]/[0.12]" />

              <div className="testimonial-quote absolute right-7 top-5 select-none font-serif text-7xl leading-none text-[#FF1AC6]/[0.08]">
                "
              </div>

              <div className="relative z-10">

                {/* USER */}

                <div className="mb-7 flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="relative">
                      <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-[#FF1AC6]/20 bg-[#FF1AC6]/[0.065] text-[#FF1AC6]">
                        <FiPenTool className="h-6 w-6" />
                      </div>

                      <span className="absolute -bottom-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full border border-[#f6f5ef] bg-white">
                        <span className="testimonial-status h-2 w-2 rounded-full bg-[#FF1AC6] shadow-[0_0_8px_rgba(255,26,198,0.5)]" />
                      </span>
                    </div>

                    <div>
                      <div className="flex items-center gap-2">
                        <p className="font-semibold text-[#171717]">
                          Bounty Contributor
                        </p>

                        <span className="flex h-4 w-4 items-center justify-center rounded-full bg-[#FF1AC6] text-[9px] font-bold text-white">
                          <FiCheck className="h-2.5 w-2.5" />
                        </span>
                      </div>

                      <p className="mt-1 text-xs text-[#8b8880]">
                        Web3 Creative
                      </p>
                    </div>
                  </div>

                  <span className="hidden text-[10px] uppercase tracking-[0.2em] text-[#aaa69d] sm:block">
                    Contributor
                  </span>
                </div>

                {/* MESSAGE */}

                <div className="mb-5 flex items-center gap-2">
                  <span className="rounded-full border border-[#FF1AC6]/15 bg-[#FF1AC6]/[0.05] px-2.5 py-1 text-[9px] font-bold uppercase tracking-[0.15em] text-[#FF1AC6]">
                    Contributor Work
                  </span>

                  <span className="text-[10px] text-[#aaa69d]">
                    USDC
                  </span>
                </div>

                <p className="text-base leading-relaxed text-[#4f4c46] md:text-lg">
                  “Find an opportunity, complete the task, submit the work,
                  and move toward the reward. The experience is built to make
                  Web3 work feel straightforward and transparent.”
                </p>

                {/* FOOTER */}

                <div className="mt-8 flex items-center justify-between border-t border-black/[0.06] pt-5">
                  <span className="text-xs text-[#99958c]">
                    Contributor workflow
                  </span>

                  <span className="flex items-center gap-2 text-xs font-medium text-[#FF1AC6]">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#FF1AC6] shadow-[0_0_7px_rgba(255,26,198,0.5)]" />
                    USDC rewards
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* TRUST INDICATORS */}

          <div
            className={`testimonial-card ${
              isVisible ? "visible" : ""
            } mt-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 rounded-[22px] border border-black/[0.06] bg-white/55 px-5 py-4 text-xs text-[#8b8880] shadow-[0_10px_35px_rgba(35,31,22,0.035)] backdrop-blur-xl`}
            style={{ animationDelay: "600ms" }}
          >
            <span className="flex items-center gap-2">
              <FiShield className="h-3.5 w-3.5 text-[#2775CA]" />
              Transparent workflows
            </span>

            <span className="h-1 w-1 rounded-full bg-black/20" />

            <span className="flex items-center gap-2">
              <FiZap className="h-3.5 w-3.5 text-[#FF1AC6]" />
              Open opportunities
            </span>

            <span className="h-1 w-1 rounded-full bg-black/20" />

            <span className="flex items-center gap-2">
              <FiCheck className="h-3.5 w-3.5 text-[#8B5CF6]" />
              On-chain reward flow
            </span>

            <span className="h-1 w-1 rounded-full bg-black/20" />

            <span className="flex items-center gap-2">
              <FiArrowUpRight className="h-3.5 w-3.5 text-[#695223]" />
              Arc / USDC
            </span>
          </div>
        </div>
      </section>
    </>
  );
}

export default Testimonials;

