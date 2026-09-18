import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { FiArrowUpRight } from "react-icons/fi";
import Usdc from "../assets/images/Usdc.png";

const heroMessages = [
  "Earn USDC.",
  "Complete Quests.",
  "Build Your Skills.",
  "Get Rewarded.",
];

export default function Hero() {
  const [heroText, setHeroText] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  const visualRef = useRef(null);

  /* =====================================================
     TYPING ANIMATION
  ===================================================== */
  useEffect(() => {
    const currentMessage = heroMessages[heroText];
    const typingSpeed = isDeleting ? 45 : 90;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        const nextText = currentMessage.slice(
          0,
          displayText.length + 1
        );

        setDisplayText(nextText);

        if (nextText.length === currentMessage.length) {
          setTimeout(() => {
            setIsDeleting(true);
          }, 1400);
        }
      } else {
        const nextText = currentMessage.slice(
          0,
          displayText.length - 1
        );

        setDisplayText(nextText);

        if (nextText.length === 0) {
          setIsDeleting(false);
          setHeroText(
            (prev) => (prev + 1) % heroMessages.length
          );
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, heroText]);

  /* =====================================================
     3D MOUSE TILT
  ===================================================== */
  useEffect(() => {
    const visual = visualRef.current;

    if (!visual) return;

    const handleMouseMove = (event) => {
      const rect = visual.getBoundingClientRect();

      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;

      const rotateY = ((x / rect.width) - 0.5) * 12;
      const rotateX = ((y / rect.height) - 0.5) * -12;

      visual.style.setProperty(
        "--rotate-x",
        `${rotateX}deg`
      );

      visual.style.setProperty(
        "--rotate-y",
        `${rotateY}deg`
      );
    };

    const handleMouseLeave = () => {
      visual.style.setProperty("--rotate-x", "0deg");
      visual.style.setProperty("--rotate-y", "0deg");
    };

    visual.addEventListener("mousemove", handleMouseMove);
    visual.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      visual.removeEventListener("mousemove", handleMouseMove);
      visual.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <section className="relative min-h-[620px] overflow-hidden bg-[#F3F1EC] text-black sm:min-h-[650px]">

      {/* =====================================================
          SUBTLE DARK GOLD BRICK BACKGROUND
      ===================================================== */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {/* Main brick texture */}
        <div className="absolute inset-0 opacity-[0.075]">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `
                linear-gradient(
                  to right,
                  rgba(92, 65, 20, 0.75) 1px,
                  transparent 1px
                ),
                linear-gradient(
                  to bottom,
                  rgba(92, 65, 20, 0.75) 1px,
                  transparent 1px
                ),
                linear-gradient(
                  to right,
                  transparent 0%,
                  transparent 49%,
                  rgba(92, 65, 20, 0.65) 50%,
                  transparent 51%,
                  transparent 100%
                )
              `,
              backgroundSize:
                "110px 55px, 110px 55px, 110px 55px",
              backgroundPosition:
                "0 0, 0 0, 55px 27px",
            }}
          />
        </div>

        {/* Soft dark-gold brick wash */}
        <div
          className="absolute inset-0 opacity-[0.055]"
          style={{
            backgroundImage: `
              repeating-linear-gradient(
                0deg,
                transparent 0px,
                transparent 52px,
                rgba(82, 58, 18, 0.8) 53px,
                transparent 55px
              ),
              repeating-linear-gradient(
                90deg,
                transparent 0px,
                transparent 108px,
                rgba(82, 58, 18, 0.8) 109px,
                transparent 111px
              )
            `,
          }}
        />

        {/* Fade the brick toward the edges */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_25%,#F3F1EC_88%)]" />
      </div>

      {/* =====================================================
          BACKGROUND GLOW
      ===================================================== */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">

        {/* Dark gold ambient glow */}
        <div className="absolute left-[-180px] top-[18%] h-[380px] w-[380px] rounded-full bg-[#8B6914]/[0.035] blur-[130px]" />

        {/* Pink glow */}
        <div className="absolute left-[-180px] top-[8%] h-[380px] w-[380px] rounded-full bg-[#FF1AC6]/5 blur-[120px]" />

        {/* USDC blue glow */}
        <div className="absolute right-[-120px] top-[12%] h-[430px] w-[430px] rounded-full bg-blue-500/5 blur-[140px]" />

        {/* Bottom pink glow */}
        <div className="absolute bottom-[-180px] left-[35%] h-[400px] w-[400px] rounded-full bg-[#FF1AC6]/5 blur-[120px]" />
      </div>

      {/* =====================================================
          MAIN CONTAINER
      ===================================================== */}
      <div className="relative z-10 mx-auto flex min-h-[620px] max-w-7xl items-center px-5 py-12 sm:min-h-[650px] sm:px-8 sm:py-16 lg:px-10">
        <div className="grid w-full items-center gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:gap-8">

          {/* =================================================
              LEFT SIDE
          ================================================= */}
          <div className="max-w-2xl text-center sm:text-left">

            {/* BADGE */}
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-gray-300 bg-white/70 px-4 py-2 shadow-sm backdrop-blur-sm">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#FF1AC6] opacity-40" />

                <span className="relative inline-flex h-2 w-2 rounded-full bg-[#FF1AC6]" />
              </span>

              <span className="text-xs font-semibold tracking-wide text-black">
                Built for Arc
              </span>
            </div>

            {/* HERO TITLE */}
            <div className="space-y-0">
              <h1 className="text-4xl font-extrabold leading-[0.98] tracking-tight text-black sm:text-5xl md:text-6xl lg:text-[4.2rem]">
                Make a
              </h1>

              <h1 className="text-4xl font-extrabold leading-[0.98] tracking-tight text-black sm:text-5xl md:text-6xl lg:text-[4.2rem]">
                living from
              </h1>

              {/* TYPING TEXT */}
              <div className="relative mt-1 h-[52px] overflow-hidden sm:h-[64px] md:h-[80px]">
                <div className="absolute left-1/2 top-0 flex -translate-x-1/2 items-center whitespace-nowrap text-3xl font-extrabold leading-[1] sm:left-0 sm:translate-x-0 sm:text-4xl md:text-6xl lg:text-[4.2rem]">
                  <span className="bg-gradient-to-r from-[#FF1AC6] via-pink-500 to-purple-600 bg-clip-text text-transparent">
                    {displayText}
                  </span>

                  <span className="ml-1 inline-block h-[0.8em] w-[3px] rounded-full bg-[#FF1AC6]" />
                </div>
              </div>
            </div>

            {/* DESCRIPTION */}
            <p className="mx-auto mt-3 max-w-xl text-sm font-medium leading-relaxed text-gray-700 sm:mx-0 sm:text-base md:mt-4">
              Complete quests and earn USDC, tokens, and digital
              rewards. Post bounties and get quality work done —
              fully on-chain.
            </p>

            {/* BUTTONS */}
            <div className="mt-6 flex flex-wrap justify-center gap-3 sm:justify-start">
              <Link
                to="/dashboard"
                className="group relative overflow-hidden rounded-lg bg-[#FF1AC6] px-6 py-3 text-sm font-bold text-white shadow-[0_0_30px_rgba(255,26,198,0.12)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#e915ad] hover:shadow-[0_0_35px_rgba(255,26,198,0.25)]"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Explore Bounties

                  <FiArrowUpRight className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>

                <span className="absolute inset-0 translate-x-[-100%] bg-white/20 transition-transform duration-700 group-hover:translate-x-[100%]" />
              </Link>

              <Link
                to="/create"
                className="group flex items-center gap-2 rounded-lg border-2 border-gray-200 bg-white/80 px-6 py-3 text-sm font-bold text-black shadow-sm backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-black hover:bg-white"
              >
                Create a Bounty

                <FiArrowUpRight className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </div>

            {/* INDICATORS */}
            <div className="mt-6 flex items-center justify-center gap-3 sm:justify-start">
              <div className="flex gap-1.5">
                {heroMessages.map((_, index) => (
                  <span
                    key={index}
                    className={`h-1.5 rounded-full transition-all duration-500 ${
                      index === heroText
                        ? "w-7 bg-[#FF1AC6] shadow-[0_0_10px_rgba(255,26,198,0.35)]"
                        : "w-1.5 bg-gray-300"
                    }`}
                  />
                ))}
              </div>

              <span className="text-[11px] font-semibold text-gray-600">
                New opportunities every day
              </span>
            </div>
          </div>

          {/* =================================================
              RIGHT SIDE — ROTATING USDC
          ================================================= */}
          <div
            ref={visualRef}
            className="usdc-visual relative flex min-h-[360px] items-center justify-center sm:min-h-[430px] lg:min-h-[500px]"
          >
            <div className="usdc-scene relative flex h-[340px] w-[340px] items-center justify-center sm:h-[430px] sm:w-[430px] lg:h-[500px] lg:w-[500px]">

              {/* LARGE SOFT GLOW */}
              <div className="absolute h-[230px] w-[230px] rounded-full bg-[#2775CA]/10 blur-[75px] sm:h-[300px] sm:w-[300px]" />

              {/* SUBTLE CIRCLE */}
              <div className="absolute h-[270px] w-[270px] rounded-full border border-[#2775CA]/10 sm:h-[350px] sm:w-[350px] lg:h-[410px] lg:w-[410px]" />

              {/* SECOND CIRCLE */}
              <div className="absolute h-[220px] w-[220px] rounded-full border border-purple-500/[0.07] sm:h-[290px] sm:w-[290px] lg:h-[340px] lg:w-[340px]" />

              {/* ROTATING IMAGE */}
              <div className="usdc-wrapper relative z-10">
                <div className="usdc-image-container">
                  <img
                    src={Usdc}
                    alt="USDC"
                    className="usdc-image select-none object-contain"
                    draggable="false"
                  />

                  {/* LIGHT REFLECTION */}
                  <div className="usdc-reflection" />
                </div>
              </div>

              {/* SMALL ORBIT DOTS */}
              <span className="usdc-dot usdc-dot-one" />
              <span className="usdc-dot usdc-dot-two" />
              <span className="usdc-dot usdc-dot-three" />

              {/* FLOATING PARTICLES */}
              <span className="usdc-particle particle-one" />
              <span className="usdc-particle particle-two" />
              <span className="usdc-particle particle-three" />
              <span className="usdc-particle particle-four" />
            </div>
          </div>
        </div>
      </div>

      {/* =====================================================
          ROTATING USDC CSS
      ===================================================== */}
      <style>{`
        .usdc-visual {
          --rotate-x: 0deg;
          --rotate-y: 0deg;
          perspective: 1400px;
        }

        .usdc-scene {
          transform-style: preserve-3d;
          transform:
            rotateX(var(--rotate-x))
            rotateY(var(--rotate-y));
          transition:
            transform 700ms cubic-bezier(0.16, 1, 0.3, 1);
        }

        /* =====================================================
           USDC IMAGE
        ===================================================== */

        .usdc-wrapper {
          transform-style: preserve-3d;
          animation: coinFloat 5s ease-in-out infinite;
        }

        .usdc-image-container {
          position: relative;
          width: 245px;
          height: 245px;
          display: flex;
          align-items: center;
          justify-content: center;
          transform-style: preserve-3d;
          animation: coinRotate 10s ease-in-out infinite;
        }

        .usdc-image {
          width: 245px;
          height: 245px;
          transform-style: preserve-3d;
          filter:
            drop-shadow(0 25px 25px rgba(0, 0, 0, 0.12))
            drop-shadow(0 0 35px rgba(39, 117, 202, 0.12));
        }

        .usdc-reflection {
          position: absolute;
          top: 12%;
          left: 17%;
          width: 34%;
          height: 20%;
          border-radius: 9999px;
          background: rgba(255,255,255,0.45);
          filter: blur(18px);
          pointer-events: none;
          transform: rotate(-25deg);
          animation: reflectionMove 5s ease-in-out infinite;
        }

        /* =====================================================
           CIRCLES
        ===================================================== */

        .usdc-scene::before {
          content: "";
          position: absolute;
          width: 280px;
          height: 280px;
          border-radius: 50%;
          border: 1px solid rgba(39,117,202,0.08);
          animation: circleRotate 18s linear infinite;
        }

        .usdc-scene::after {
          content: "";
          position: absolute;
          width: 365px;
          height: 365px;
          border-radius: 50%;
          border: 1px dashed rgba(39,117,202,0.07);
          animation: circleRotateReverse 25s linear infinite;
        }

        /* =====================================================
           DOTS
        ===================================================== */

        .usdc-dot {
          position: absolute;
          width: 7px;
          height: 7px;
          border-radius: 50%;
          z-index: 20;
        }

        .usdc-dot-one {
          top: 17%;
          right: 25%;
          background: #2775ca;
          box-shadow: 0 0 18px rgba(39,117,202,0.65);
          animation: dotFloatOne 4s ease-in-out infinite;
        }

        .usdc-dot-two {
          bottom: 19%;
          left: 22%;
          background: #ff1ac6;
          box-shadow: 0 0 18px rgba(255,26,198,0.55);
          animation: dotFloatTwo 5s ease-in-out infinite;
        }

        .usdc-dot-three {
          top: 34%;
          left: 14%;
          width: 5px;
          height: 5px;
          background: #7c3aed;
          box-shadow: 0 0 15px rgba(124,58,237,0.5);
          animation: dotFloatThree 4.5s ease-in-out infinite;
        }

        /* =====================================================
           PARTICLES
        ===================================================== */

        .usdc-particle {
          position: absolute;
          width: 4px;
          height: 4px;
          border-radius: 50%;
          background: #2775ca;
          box-shadow: 0 0 12px rgba(39,117,202,0.45);
        }

        .particle-one {
          top: 23%;
          left: 29%;
          animation: particleOne 4s ease-in-out infinite;
        }

        .particle-two {
          top: 20%;
          right: 20%;
          animation: particleTwo 5s ease-in-out infinite;
        }

        .particle-three {
          bottom: 24%;
          right: 25%;
          animation: particleThree 4.5s ease-in-out infinite;
        }

        .particle-four {
          bottom: 19%;
          left: 30%;
          background: #ff1ac6;
          box-shadow: 0 0 12px rgba(255,26,198,0.45);
          animation: particleFour 5s ease-in-out infinite;
        }

        /* =====================================================
           ANIMATIONS
        ===================================================== */

        @keyframes coinFloat {
          0%,
          100% {
            transform: translateY(0) translateZ(0);
          }

          50% {
            transform: translateY(-14px) translateZ(20px);
          }
        }

        @keyframes coinRotate {
          0% {
            transform: rotateY(-8deg) rotateZ(-2deg);
          }

          25% {
            transform: rotateY(8deg) rotateZ(1deg);
          }

          50% {
            transform: rotateY(-5deg) rotateZ(2deg);
          }

          75% {
            transform: rotateY(9deg) rotateZ(-1deg);
          }

          100% {
            transform: rotateY(-8deg) rotateZ(-2deg);
          }
        }

        @keyframes reflectionMove {
          0%,
          100% {
            opacity: 0.15;
            transform: translate(0, 0) rotate(-25deg);
          }

          50% {
            opacity: 0.45;
            transform: translate(12px, 10px) rotate(-20deg);
          }
        }

        @keyframes circleRotate {
          from {
            transform: rotate(0deg);
          }

          to {
            transform: rotate(360deg);
          }
        }

        @keyframes circleRotateReverse {
          from {
            transform: rotate(360deg);
          }

          to {
            transform: rotate(0deg);
          }
        }

        @keyframes dotFloatOne {
          0%,
          100% {
            transform: translate(0, 0);
          }

          50% {
            transform: translate(10px, -18px);
          }
        }

        @keyframes dotFloatTwo {
          0%,
          100% {
            transform: translate(0, 0);
          }

          50% {
            transform: translate(-14px, 12px);
          }
        }

        @keyframes dotFloatThree {
          0%,
          100% {
            transform: translate(0, 0);
          }

          50% {
            transform: translate(12px, 15px);
          }
        }

        @keyframes particleOne {
          0%,
          100% {
            opacity: 0.25;
            transform: translate(0, 0);
          }

          50% {
            opacity: 1;
            transform: translate(15px, -20px);
          }
        }

        @keyframes particleTwo {
          0%,
          100% {
            opacity: 0.2;
            transform: translate(0, 0);
          }

          50% {
            opacity: 0.9;
            transform: translate(-18px, 15px);
          }
        }

        @keyframes particleThree {
          0%,
          100% {
            opacity: 0.25;
            transform: translate(0, 0);
          }

          50% {
            opacity: 1;
            transform: translate(-15px, -18px);
          }
        }

        @keyframes particleFour {
          0%,
          100% {
            opacity: 0.2;
            transform: translate(0, 0);
          }

          50% {
            opacity: 0.9;
            transform: translate(16px, 18px);
          }
        }

        /* =====================================================
           RESPONSIVE
        ===================================================== */

        @media (max-width: 640px) {
          .usdc-image-container {
            width: 205px;
            height: 205px;
          }

          .usdc-image {
            width: 205px;
            height: 205px;
          }

          .usdc-scene::before {
            width: 235px;
            height: 235px;
          }

          .usdc-scene::after {
            width: 290px;
            height: 290px;
          }
        }

        /* =====================================================
           REDUCED MOTION
        ===================================================== */

        @media (prefers-reduced-motion: reduce) {
          .usdc-wrapper,
          .usdc-image-container,
          .usdc-reflection,
          .usdc-scene::before,
          .usdc-scene::after,
          .usdc-dot,
          .usdc-particle {
            animation: none !important;
          }

          .usdc-scene {
            transform: none !important;
          }
        }
      `}</style>
    </section>
  );
}