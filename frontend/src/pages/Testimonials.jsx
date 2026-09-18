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
        {/* SUBTLE BACKGROUND */}

        <div
          className="pointer-events-none absolute inset-0 opacity-40"
          style={{
            backgroundImage: `
              linear-gradient(
                rgba(105,82,35,0.025) 1px,
                transparent 1px
              ),
              linear-gradient(
                90deg,
                rgba(105,82,35,0.02) 1px,
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

        <div className="relative mx-auto max-w-6xl">
          {/* HEADER */}

          <div
            className={`testimonial-header ${
              isVisible ? "visible" : ""
            } mx-auto mb-14 max-w-3xl text-center`}
          >
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-black/[0.08] bg-white/80 px-4 py-2 shadow-[0_8px_25px_rgba(35,31,22,0.035)] backdrop-blur-xl">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#D4AF37] opacity-30" />

                <span className="relative inline-flex h-2 w-2 rounded-full bg-[#D4AF37]" />
              </span>

              <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#77736b]">
                Built Around Real Work
              </span>

              <span className="h-1 w-1 rounded-full bg-black/20" />

              <span className="text-[11px] font-bold uppercase tracking-[0.16em] text-[#B28B20]">
                Arc / USDC
              </span>
            </div>

            <h2 className="text-4xl font-bold tracking-[-0.04em] text-[#111111] md:text-5xl">
              Built for People Who{" "}
              <span className="text-[#B28B20]">Build</span>
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
              } group relative overflow-hidden rounded-[28px] border border-black/[0.08] bg-white p-7 shadow-[0_18px_55px_rgba(35,31,22,0.05)] transition-all duration-500 hover:-translate-y-2 hover:border-[#D4AF37]/45 hover:shadow-[0_25px_70px_rgba(35,31,22,0.09)] md:p-8`}
              style={{ animationDelay: "200ms" }}
            >
              <div className="testimonial-shine" />

              <div className="pointer-events-none absolute -right-24 -top-24 h-56 w-56 rounded-full bg-[#D4AF37]/[0.035] blur-[90px] transition-all duration-500 group-hover:bg-[#D4AF37]/[0.07]" />

              <div className="testimonial-quote absolute right-7 top-5 select-none font-serif text-7xl leading-none text-[#D4AF37]/[0.12]">
                "
              </div>

              <div className="relative z-10">
                {/* USER */}

                <div className="mb-7 flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="relative">
                      <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-[#D4AF37]/25 bg-[#D4AF37]/[0.07] text-[#B28B20]">
                        <FiCode className="h-6 w-6" />
                      </div>

                      <span className="absolute -bottom-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full border border-[#f6f5ef] bg-white">
                        <span className="testimonial-status h-2 w-2 rounded-full bg-[#D4AF37] shadow-[0_0_8px_rgba(212,175,55,0.5)]" />
                      </span>
                    </div>

                    <div>
                      <div className="flex items-center gap-2">
                        <p className="font-semibold text-[#171717]">
                          Bounty Creator
                        </p>

                        <span className="flex h-4 w-4 items-center justify-center rounded-full bg-[#D4AF37] text-[9px] font-bold text-white">
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
                  <span className="rounded-full border border-[#D4AF37]/20 bg-[#D4AF37]/[0.06] px-2.5 py-1 text-[9px] font-bold uppercase tracking-[0.15em] text-[#B28B20]">
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

                  <span className="flex items-center gap-2 text-xs font-medium text-[#B28B20]">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#D4AF37] shadow-[0_0_7px_rgba(212,175,55,0.45)]" />
                    Funded on-chain
                  </span>
                </div>
              </div>
            </div>

            {/* CONTRIBUTOR EXPERIENCE */}

            <div
              className={`testimonial-card ${
                isVisible ? "visible" : ""
              } group relative overflow-hidden rounded-[28px] border border-black/[0.08] bg-white p-7 shadow-[0_18px_55px_rgba(35,31,22,0.05)] transition-all duration-500 hover:-translate-y-2 hover:border-[#D4AF37]/45 hover:shadow-[0_25px_70px_rgba(35,31,22,0.09)] md:p-8`}
              style={{ animationDelay: "400ms" }}
            >
              <div className="testimonial-shine" />

              <div className="pointer-events-none absolute -bottom-24 -right-24 h-56 w-56 rounded-full bg-[#D4AF37]/[0.035] blur-[90px] transition-all duration-500 group-hover:bg-[#D4AF37]/[0.07]" />

              <div className="testimonial-quote absolute right-7 top-5 select-none font-serif text-7xl leading-none text-[#D4AF37]/[0.12]">
                "
              </div>

              <div className="relative z-10">
                {/* USER */}

                <div className="mb-7 flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="relative">
                      <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-[#D4AF37]/25 bg-[#D4AF37]/[0.07] text-[#B28B20]">
                        <FiPenTool className="h-6 w-6" />
                      </div>

                      <span className="absolute -bottom-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full border border-[#f6f5ef] bg-white">
                        <span className="testimonial-status h-2 w-2 rounded-full bg-[#D4AF37] shadow-[0_0_8px_rgba(212,175,55,0.5)]" />
                      </span>
                    </div>

                    <div>
                      <div className="flex items-center gap-2">
                        <p className="font-semibold text-[#171717]">
                          Bounty Contributor
                        </p>

                        <span className="flex h-4 w-4 items-center justify-center rounded-full bg-[#D4AF37] text-[9px] font-bold text-white">
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
                  <span className="rounded-full border border-[#D4AF37]/20 bg-[#D4AF37]/[0.06] px-2.5 py-1 text-[9px] font-bold uppercase tracking-[0.15em] text-[#B28B20]">
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

                  <span className="flex items-center gap-2 text-xs font-medium text-[#B28B20]">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#D4AF37] shadow-[0_0_7px_rgba(212,175,55,0.45)]" />
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
            } mt-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 rounded-[22px] border border-black/[0.06] bg-white px-5 py-4 text-xs text-[#8b8880] shadow-[0_10px_35px_rgba(35,31,22,0.035)]`}
            style={{ animationDelay: "600ms" }}
          >
            <span className="flex items-center gap-2">
              <FiShield className="h-3.5 w-3.5 text-[#B28B20]" />
              Transparent workflows
            </span>

            <span className="h-1 w-1 rounded-full bg-black/20" />

            <span className="flex items-center gap-2">
              <FiZap className="h-3.5 w-3.5 text-[#B28B20]" />
              Open opportunities
            </span>

            <span className="h-1 w-1 rounded-full bg-black/20" />

            <span className="flex items-center gap-2">
              <FiCheck className="h-3.5 w-3.5 text-[#B28B20]" />
              On-chain reward flow
            </span>

            <span className="h-1 w-1 rounded-full bg-black/20" />

            <span className="flex items-center gap-2">
              <FiArrowUpRight className="h-3.5 w-3.5 text-[#B28B20]" />
              Arc / USDC
            </span>
          </div>
        </div>
      </section>
    </>
  );
}

export default Testimonials;