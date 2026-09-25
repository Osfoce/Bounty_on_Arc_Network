
import { useEffect, useRef, useState } from "react";
import {
  FiCheck,
  FiShield,
  FiCode,
  FiPenTool,
  FiZap,
  FiArrowUpRight,
  FiLayers,
  FiDollarSign,
  FiGlobe,
  FiUsers,
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

          @keyframes testimonialMarquee {
            from {
              transform: translateX(0);
            }

            to {
              transform: translateX(-50%);
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

          .testimonial-marquee {
            display: flex;
            width: max-content;
            animation: testimonialMarquee 45s linear infinite;
          }

          .testimonial-marquee:hover {
            animation-play-state: paused;
          }

          .testimonial-quote {
            animation: testimonialFloat 4s ease-in-out infinite;
          }

          .testimonial-status {
            animation: testimonialPulse 2.5s ease-in-out infinite;
          }

          .testimonial-card {
            transition:
              transform 0.5s ease,
              box-shadow 0.5s ease,
              border-color 0.5s ease;
          }

          .testimonial-card:hover {
            transform: translateY(-7px);
            border-color: rgba(212, 175, 55, 0.45);
            box-shadow: 0 25px 70px rgba(35, 31, 22, 0.1);
          }

          @media (max-width: 768px) {
            .testimonial-marquee {
              animation-duration: 38s;
            }
          }

          @media (prefers-reduced-motion: reduce) {
            .testimonial-header {
              opacity: 1;
              animation: none !important;
              transform: none !important;
            }

            .testimonial-marquee {
              animation: none !important;
              transform: none !important;
              overflow-x: auto;
              width: 100%;
            }

            .testimonial-quote,
            .testimonial-status {
              animation: none !important;
            }
          }
        `}
      </style>

      <section
        ref={testimonialsRef}
        className="relative z-10 mx-6  overflow-hidden bg-[#f6f5ef] md:mx-10 lg:mx-16"
      >
        {/* BACKGROUND GRID */}

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

        <div className="relative mx-auto max-w-[1500px] py-16">
          {/* HEADER */}

          <div
            className={`testimonial-header ${
              isVisible ? "visible" : ""
            } mx-auto mb-14 max-w-3xl px-4 text-center`}
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

          {/* MARQUEE */}

          <div className="relative w-full overflow-hidden">
            {/* LEFT FADE */}

            <div className="pointer-events-none absolute left-0 top-0 z-20 h-full w-16 bg-gradient-to-r from-[#f6f5ef] to-transparent md:w-32" />

            {/* RIGHT FADE */}

            <div className="pointer-events-none absolute right-0 top-0 z-20 h-full w-16 bg-gradient-to-l from-[#f6f5ef] to-transparent md:w-32" />

            <div className="testimonial-marquee">
              {/* FIRST SET */}

              <div className="flex">
                {/* CARD 1 */}

                <TestimonialCard
                  icon={<FiCode />}
                  role="Bounty Creator"
                  type="Web3 Project Builder"
                  network="Arc"
                  tag="Bounty Funding"
                  message="Post the work, define the reward, and let contributors focus on delivering quality results."
                  footer="Creator workflow"
                  status="Funded on-chain"
                />

                {/* CARD 2 */}

                <TestimonialCard
                  icon={<FiPenTool />}
                  role="Bounty Contributor"
                  type="Web3 Creative"
                  network="USDC"
                  tag="Contributor Work"
                  message="Find an opportunity, complete the task, submit the work, and move toward the reward."
                  footer="Contributor workflow"
                  status="USDC rewards"
                />

                {/* CARD 3 */}

                <TestimonialCard
                  icon={<FiLayers />}
                  role="Product Builder"
                  type="Web3 Developer"
                  network="Arc"
                  tag="Development"
                  message="Clear requirements and transparent reward flows make it easier to focus on actually building."
                  footer="Build with clarity"
                  status="On-chain workflow"
                />

                {/* CARD 4 */}

                <TestimonialCard
                  icon={<FiDollarSign />}
                  role="Project Founder"
                  type="Startup Builder"
                  network="USDC"
                  tag="Project Funding"
                  message="Creators can define the task and reward in one clear workflow without unnecessary complexity."
                  footer="Creator experience"
                  status="Reward funded"
                />

                {/* CARD 5 */}

                <TestimonialCard
                  icon={<FiGlobe />}
                  role="Web3 Contributor"
                  type="Remote Builder"
                  network="Arc"
                  tag="Open Opportunity"
                  message="Open bounties create a simple way to discover work and contribute to projects beyond traditional hiring."
                  footer="Open opportunities"
                  status="Global access"
                />

                {/* CARD 6 */}

                <TestimonialCard
                  icon={<FiUsers />}
                  role="Community Builder"
                  type="Web3 Community"
                  network="USDC"
                  tag="Community Work"
                  message="Bounties give contributors a clear task, clear expectations, and a transparent path toward rewards."
                  footer="Community workflow"
                  status="Transparent rewards"
                />

                {/* CARD 7 */}

                <TestimonialCard
                  icon={<FiZap />}
                  role="Protocol Builder"
                  type="Blockchain Team"
                  network="Arc"
                  tag="Protocol Work"
                  message="Breaking work into focused bounties makes it easier for independent contributors to participate."
                  footer="Protocol workflow"
                  status="Built on-chain"
                />

                {/* CARD 8 */}

                <TestimonialCard
                  icon={<FiShield />}
                  role="Independent Builder"
                  type="Bounty Contributor"
                  network="USDC"
                  tag="Verified Work"
                  message="The workflow keeps the task, submission, and reward process visible instead of hiding everything behind private agreements."
                  footer="Contributor trust"
                  status="Transparent flow"
                />
              </div>

              {/* DUPLICATE SET FOR SEAMLESS LOOP */}

              <div className="flex">
                <TestimonialCard
                  icon={<FiCode />}
                  role="Bounty Creator"
                  type="Web3 Project Builder"
                  network="Arc"
                  tag="Bounty Funding"
                  message="Post the work, define the reward, and let contributors focus on delivering quality results."
                  footer="Creator workflow"
                  status="Funded on-chain"
                />

                <TestimonialCard
                  icon={<FiPenTool />}
                  role="Bounty Contributor"
                  type="Web3 Creative"
                  network="USDC"
                  tag="Contributor Work"
                  message="Find an opportunity, complete the task, submit the work, and move toward the reward."
                  footer="Contributor workflow"
                  status="USDC rewards"
                />

                <TestimonialCard
                  icon={<FiLayers />}
                  role="Product Builder"
                  type="Web3 Developer"
                  network="Arc"
                  tag="Development"
                  message="Clear requirements and transparent reward flows make it easier to focus on actually building."
                  footer="Build with clarity"
                  status="On-chain workflow"
                />

                <TestimonialCard
                  icon={<FiDollarSign />}
                  role="Project Founder"
                  type="Startup Builder"
                  network="USDC"
                  tag="Project Funding"
                  message="Creators can define the task and reward in one clear workflow without unnecessary complexity."
                  footer="Creator experience"
                  status="Reward funded"
                />

                <TestimonialCard
                  icon={<FiGlobe />}
                  role="Web3 Contributor"
                  type="Remote Builder"
                  network="Arc"
                  tag="Open Opportunity"
                  message="Open bounties create a simple way to discover work and contribute to projects beyond traditional hiring."
                  footer="Open opportunities"
                  status="Global access"
                />

                <TestimonialCard
                  icon={<FiUsers />}
                  role="Community Builder"
                  type="Web3 Community"
                  network="USDC"
                  tag="Community Work"
                  message="Bounties give contributors a clear task, clear expectations, and a transparent path toward rewards."
                  footer="Community workflow"
                  status="Transparent rewards"
                />

                <TestimonialCard
                  icon={<FiZap />}
                  role="Protocol Builder"
                  type="Blockchain Team"
                  network="Arc"
                  tag="Protocol Work"
                  message="Breaking work into focused bounties makes it easier for independent contributors to participate."
                  footer="Protocol workflow"
                  status="Built on-chain"
                />

                <TestimonialCard
                  icon={<FiShield />}
                  role="Independent Builder"
                  type="Bounty Contributor"
                  network="USDC"
                  tag="Verified Work"
                  message="The workflow keeps the task, submission, and reward process visible instead of hiding everything behind private agreements."
                  footer="Contributor trust"
                  status="Transparent flow"
                />
              </div>
            </div>
          </div>

          {/* TRUST INDICATORS */}

          <div
            className={`testimonial-header ${
              isVisible ? "visible" : ""
            } mt-12 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 px-5 py-4 text-xs text-[#8b8880]`}
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

function TestimonialCard({
  icon,
  role,
  type,
  network,
  tag,
  message,
  footer,
  status,
}) {
  return (
    <div className="testimonial-card group mx-3 w-[310px] shrink-0 rounded-[28px] border border-black/[0.08] bg-white p-6 shadow-[0_18px_55px_rgba(35,31,22,0.05)] md:w-[390px] md:p-8">
      {/* USER */}

      <div className="mb-6 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="relative">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-[#D4AF37]/25 bg-[#D4AF37]/[0.07] text-[#B28B20]">
              <span className="h-5 w-5">{icon}</span>
            </div>

            <span className="absolute -bottom-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full border border-white bg-white">
              <span className="testimonial-status h-2 w-2 rounded-full bg-[#D4AF37] shadow-[0_0_8px_rgba(212,175,55,0.5)]" />
            </span>
          </div>

          <div>
            <div className="flex items-center gap-1.5">
              <p className="text-sm font-semibold text-[#171717]">
                {role}
              </p>

              <span className="flex h-4 w-4 items-center justify-center rounded-full bg-[#D4AF37] text-white">
                <FiCheck className="h-2.5 w-2.5" />
              </span>
            </div>

            <p className="mt-1 text-[11px] text-[#8b8880]">
              {type}
            </p>
          </div>
        </div>

        <span className="text-[9px] uppercase tracking-[0.18em] text-[#aaa69d]">
          {network}
        </span>
      </div>

      {/* MESSAGE */}

      <div className="relative">
        <div className="testimonial-quote absolute -right-1 -top-5 select-none font-serif text-6xl leading-none text-[#D4AF37]/[0.11]">
          "
        </div>

        <span className="mb-4 inline-flex rounded-full border border-[#D4AF37]/20 bg-[#D4AF37]/[0.06] px-2.5 py-1 text-[9px] font-bold uppercase tracking-[0.15em] text-[#B28B20]">
          {tag}
        </span>

        <p className="relative z-10 min-h-[110px] text-sm leading-7 text-[#4f4c46] md:text-[15px]">
          “{message}”
        </p>
      </div>

      {/* FOOTER */}

      <div className="mt-6 flex items-center justify-between border-t border-black/[0.06] pt-5">
        <span className="text-[11px] text-[#99958c]">
          {footer}
        </span>

        <span className="flex items-center gap-1.5 text-[10px] font-medium text-[#B28B20]">
          <span className="h-1.5 w-1.5 rounded-full bg-[#D4AF37] shadow-[0_0_7px_rgba(212,175,55,0.45)]" />
          {status}
        </span>
      </div>
    </div>
  );
}

export default Testimonials;

