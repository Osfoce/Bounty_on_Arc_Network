
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  FiArrowUpRight,
  FiCheck,
  FiDollarSign,
  FiLayers,
  FiStar,
  FiZap,
} from "react-icons/fi";

const heroMessages = [
  "Earn Crypto.",
  "Complete Quests.",
  "Build Your Skills.",
  "Get Rewarded.",
];

export default function Hero() {
  const [heroText, setHeroText] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  /* =====================================================
     TYPING / SPELLING ANIMATION
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

  return (
    <section className="relative min-h-[620px] overflow-hidden bg-[#070708] text-white sm:min-h-[650px]">
      {/* =====================================================
          BACKGROUND GLOW
      ===================================================== */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-[-180px] top-[8%] h-[380px] w-[380px] rounded-full bg-[#FF1AC6]/10 blur-[120px]" />

        <div className="absolute right-[-120px] top-[12%] h-[430px] w-[430px] rounded-full bg-purple-600/10 blur-[140px]" />

        <div className="absolute bottom-[-180px] left-[35%] h-[400px] w-[400px] rounded-full bg-[#FF1AC6]/5 blur-[120px]" />
      </div>

      {/* =====================================================
          STARS
      ===================================================== */}
      <span className="hero-star star-1">
        <FiStar />
      </span>

      <span className="hero-star star-2">
        <FiStar />
      </span>

      <span className="hero-star star-3">
        <FiStar />
      </span>

      <span className="hero-star star-4">
        <FiStar />
      </span>

      <span className="hero-star star-5">
        <FiStar />
      </span>

      <span className="hero-star star-6">
        <FiStar />
      </span>

      <span className="hero-star star-7">
        <FiStar />
      </span>

      <span className="hero-star star-8">
        <FiStar />
      </span>

      <span className="hero-star star-9">
        <FiStar />
      </span>

      <span className="hero-star star-10">
        <FiStar />
      </span>

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
            <div className="hero-badge mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 backdrop-blur-xl">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#FF1AC6] opacity-60" />

                <span className="relative inline-flex h-2 w-2 rounded-full bg-[#FF1AC6]" />
              </span>

              <span className="text-xs font-medium tracking-wide text-gray-300">
                The Future of Web3 Work
              </span>
            </div>

            {/* =================================================
                HERO TITLE
            ================================================= */}
            <div className="space-y-0">
              <h1 className="text-4xl font-bold leading-[0.98] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-[4.2rem]">
                Make a
              </h1>

              <h1 className="text-4xl font-bold leading-[0.98] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-[4.2rem]">
                living from
              </h1>

              {/* =================================================
                  TYPING TEXT
              ================================================= */}
              <div className="relative mt-1 h-[52px] overflow-hidden sm:h-[64px] md:h-[80px]">
                <div className="hero-changing-text absolute left-1/2 top-0 flex -translate-x-1/2 items-center whitespace-nowrap text-3xl font-bold leading-[1] sm:left-0 sm:translate-x-0 sm:text-4xl md:text-6xl lg:text-[4.2rem]">
                  <span className="bg-gradient-to-r from-[#FF1AC6] via-pink-400 to-purple-500 bg-clip-text text-transparent">
                    {displayText}
                  </span>

                  <span className="typing-cursor ml-1 inline-block h-[0.8em] w-[3px] rounded-full bg-[#FF1AC6]" />
                </div>
              </div>
            </div>

            {/* =================================================
                DESCRIPTION
            ================================================= */}
            <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-gray-400 sm:mx-0 sm:text-base md:mt-4">
              Complete quests and earn cryptocurrency, tokens, and
              digital rewards. Post bounties and get quality work
              done — fully on-chain.
            </p>

            {/* =================================================
                BUTTONS
            ================================================= */}
            <div className="mt-6 flex flex-wrap justify-center gap-3 sm:justify-start">
              <Link
                to="/dashboard"
                className="group relative overflow-hidden rounded-lg bg-[#FF1AC6] px-6 py-3 text-sm font-semibold text-white shadow-[0_0_30px_rgba(255,26,198,0.12)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#e915ad] hover:shadow-[0_0_35px_rgba(255,26,198,0.25)]"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Explore Bounties

                  <FiArrowUpRight className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>

                <span className="absolute inset-0 translate-x-[-100%] bg-white/20 transition-transform duration-700 group-hover:translate-x-[100%]" />
              </Link>

              <Link
                to="/create"
                className="group flex items-center gap-2 rounded-lg border border-white/10 bg-white/[0.04] px-6 py-3 text-sm font-semibold text-gray-200 backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-white/25 hover:bg-white/[0.08]"
              >
                Create a Bounty

                <FiArrowUpRight className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </div>

            {/* =================================================
                BOTTOM INDICATORS
            ================================================= */}
            <div className="mt-6 flex items-center justify-center gap-3 sm:justify-start">
              <div className="flex gap-1.5">
                {heroMessages.map((_, index) => (
                  <span
                    key={index}
                    className={`h-1.5 rounded-full transition-all duration-500 ${
                      index === heroText
                        ? "w-7 bg-[#FF1AC6] shadow-[0_0_10px_rgba(255,26,198,0.6)]"
                        : "w-1.5 bg-white/20"
                    }`}
                  />
                ))}
              </div>

              <span className="text-[11px] text-gray-500">
                New opportunities every day
              </span>
            </div>
          </div>

          {/* =================================================
              RIGHT SIDE — PROFESSIONAL 3D ORBIT
          ================================================= */}
          <div className="relative flex min-h-[360px] items-center justify-center sm:min-h-[430px] lg:min-h-[500px]">

            {/* ATMOSPHERIC GLOW */}
            <div className="absolute h-[250px] w-[250px] rounded-full bg-[#FF1AC6]/10 blur-[90px]" />

            <div className="absolute h-[190px] w-[190px] rounded-full bg-purple-600/10 blur-[70px]" />

            {/* =================================================
                ORBIT SYSTEM
            ================================================= */}
            <div className="absolute h-[330px] w-[330px] sm:h-[420px] sm:w-[420px] lg:h-[460px] lg:w-[460px]">

              {/* OUTER ORBIT */}
              <div className="orbit orbit-outer absolute inset-0 rounded-full border border-white/[0.07]">
                <span className="orbit-node node-pink" />
              </div>

              {/* MIDDLE ORBIT */}
              <div className="orbit orbit-middle absolute inset-[28px] rounded-full border border-[#FF1AC6]/10 sm:inset-[35px]">
                <span className="orbit-node node-purple" />
              </div>

              {/* INNER ORBIT */}
              <div className="orbit orbit-inner absolute inset-[58px] rounded-full border border-white/[0.05] sm:inset-[65px]">
                <span className="orbit-node node-white" />
              </div>

              {/* HORIZONTAL ORBIT */}
              <div className="orbit-horizontal absolute left-[-18px] right-[-18px] top-1/2 h-[125px] -translate-y-1/2 rounded-[50%] border border-[#FF1AC6]/10 sm:left-[-25px] sm:right-[-25px] sm:h-[150px]" />

              {/* DIAGONAL ORBIT */}
              <div className="orbit-diagonal absolute left-[15px] right-[15px] top-1/2 h-[190px] -translate-y-1/2 rounded-[50%] border border-purple-500/10 sm:left-[20px] sm:right-[20px] sm:h-[220px]" />
            </div>

            {/* =================================================
                CENTRAL 3D CORE
            ================================================= */}
            <div className="hero-core relative z-20 h-[165px] w-[165px] sm:h-[205px] sm:w-[205px] lg:h-[225px] lg:w-[225px]">

              {/* OUTER GLOW */}
              <div className="absolute -inset-8 rounded-full bg-[#FF1AC6]/10 blur-[45px]" />

              {/* GLASS OUTER SHELL */}
              <div className="absolute inset-0 rounded-full border border-white/10 bg-white/[0.025] shadow-[inset_0_0_40px_rgba(255,255,255,0.025),0_25px_60px_rgba(0,0,0,0.7)] backdrop-blur-xl" />

              {/* INNER RINGS */}
              <div className="absolute inset-[12px] rounded-full border border-[#FF1AC6]/20" />

              <div className="absolute inset-[22px] rounded-full border border-purple-500/10" />

              {/* =================================================
                  3D SPHERE
              ================================================= */}
              <div className="absolute inset-[34px] overflow-hidden rounded-full bg-gradient-to-br from-[#ff4bd1]/30 via-[#161116] to-purple-900/40 shadow-[inset_-15px_-18px_30px_rgba(0,0,0,0.8),inset_10px_8px_20px_rgba(255,255,255,0.08),0_0_40px_rgba(255,26,198,0.18)]">

                {/* SPHERE HIGHLIGHT */}
                <div className="absolute left-[18%] top-[15%] h-[35%] w-[35%] rounded-full bg-white/10 blur-lg" />

                {/* SPHERE GRID */}
                <div className="absolute inset-3 overflow-hidden rounded-full opacity-40">
                  <div className="sphere-grid absolute inset-[-40%]" />
                </div>

                {/* CENTER ICON */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-[#0d0d0e]/80 shadow-[0_0_30px_rgba(255,26,198,0.2)] backdrop-blur-xl sm:h-16 sm:w-16">
                    <FiZap
                      size={24}
                      className="text-[#FF1AC6] drop-shadow-[0_0_15px_rgba(255,26,198,0.7)]"
                    />
                  </div>
                </div>
              </div>

              {/* CORE DOTS */}
              <span className="core-dot core-dot-one" />

              <span className="core-dot core-dot-two" />

              <span className="core-dot core-dot-three" />
            </div>

            {/* =================================================
                NETWORK CARD
            ================================================= */}
            <div className="orbit-data-card absolute right-[0%] top-[5%] z-30 w-[130px] rounded-2xl border border-white/10 bg-[#101011]/80 p-3 shadow-[0_20px_45px_rgba(0,0,0,0.5)] backdrop-blur-xl sm:right-[3%] sm:w-[145px]">

              <div className="mb-2 flex items-center justify-between">
                <span className="text-[8px] uppercase tracking-[0.16em] text-gray-500">
                  Network
                </span>

                <span className="h-1.5 w-1.5 rounded-full bg-green-400 shadow-[0_0_8px_rgba(74,222,128,0.8)]" />
              </div>

              <div className="text-sm font-semibold text-white">
                On-chain
              </div>

              <div className="mt-2 flex items-center gap-1.5 text-[9px] text-gray-500">
                <FiCheck className="text-green-400" />
                Verified
              </div>
            </div>

            {/* =================================================
                REWARD CARD
            ================================================= */}
            <div className="orbit-reward-card absolute bottom-[5%] left-[0%] z-30 w-[140px] rounded-2xl border border-white/10 bg-[#101011]/85 p-3 shadow-[0_20px_45px_rgba(0,0,0,0.5)] backdrop-blur-xl sm:left-[3%] sm:w-[155px]">

              <div className="flex items-center gap-2">

                <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-[#FF1AC6]/10">
                  <FiDollarSign
                    size={14}
                    className="text-[#FF1AC6]"
                  />
                </div>

                <div>
                  <p className="text-[8px] uppercase tracking-[0.15em] text-gray-500">
                    Reward
                  </p>

                  <p className="text-xs font-semibold text-white">
                    +450 USDC
                  </p>
                </div>
              </div>
            </div>

            {/* =================================================
                ORBIT LABEL
            ================================================= */}
            <div className="absolute bottom-[18%] right-[7%] z-30 hidden rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 backdrop-blur-xl sm:flex sm:items-center sm:gap-2">

              <FiLayers
                size={11}
                className="text-purple-400"
              />

              <span className="text-[9px] text-gray-400">
                Web3 Contributors
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* =====================================================
          ANIMATIONS
      ===================================================== */}
      <style>{`
        /* =================================================
           TYPING CURSOR
        ================================================= */

        .hero-changing-text {
          min-height: 1em;
        }

        .typing-cursor {
          animation: cursorBlink 0.7s ease-in-out infinite;
          box-shadow: 0 0 12px rgba(255, 26, 198, 0.7);
        }

        @keyframes cursorBlink {
          0%,
          45% {
            opacity: 1;
          }

          50%,
          100% {
            opacity: 0;
          }
        }


        /* =================================================
           STARS
        ================================================= */

        .hero-star {
          position: absolute;
          z-index: 1;
          color: rgba(255, 255, 255, 0.6);
          font-size: 10px;
          animation: starShine 3s ease-in-out infinite;
        }

        .star-1 {
          top: 12%;
          left: 8%;
        }

        .star-2 {
          top: 25%;
          left: 35%;
          animation-delay: 1.2s;
        }

        .star-3 {
          top: 14%;
          right: 15%;
          animation-delay: 0.6s;
        }

        .star-4 {
          top: 42%;
          right: 7%;
          animation-delay: 1.8s;
        }

        .star-5 {
          bottom: 18%;
          right: 25%;
          animation-delay: 0.9s;
        }

        .star-6 {
          bottom: 12%;
          left: 42%;
          animation-delay: 2s;
        }

        .star-7 {
          top: 62%;
          left: 10%;
          animation-delay: 1.5s;
        }

        .star-8 {
          bottom: 25%;
          left: 28%;
          animation-delay: 0.4s;
        }

        .star-9 {
          top: 30%;
          right: 32%;
          animation-delay: 2.2s;
        }

        .star-10 {
          bottom: 10%;
          right: 8%;
          animation-delay: 1.1s;
        }

        @keyframes starShine {
          0%,
          100% {
            opacity: 0.12;
            transform: scale(0.7) rotate(0deg);
            text-shadow: 0 0 0 rgba(255, 26, 198, 0);
          }

          50% {
            opacity: 1;
            transform: scale(1.25) rotate(45deg);
            text-shadow:
              0 0 8px rgba(255, 255, 255, 0.8),
              0 0 16px rgba(255, 26, 198, 0.7);
          }
        }


        /* =================================================
           BADGE
        ================================================= */

        .hero-badge {
          animation: badgeGlow 3s ease-in-out infinite alternate;
        }

        @keyframes badgeGlow {
          from {
            box-shadow: 0 0 0 rgba(255, 26, 198, 0);
          }

          to {
            box-shadow: 0 0 25px rgba(255, 26, 198, 0.08);
          }
        }


        /* =================================================
           3D ORBITS
        ================================================= */

        .orbit {
          transform-style: preserve-3d;
        }

        .orbit-outer {
          transform:
            perspective(900px)
            rotateX(68deg)
            rotateZ(-18deg);

          animation: outerOrbit 14s linear infinite;
        }

        .orbit-middle {
          transform:
            perspective(900px)
            rotateX(68deg)
            rotateZ(32deg);

          animation: middleOrbit 10s linear infinite reverse;
        }

        .orbit-inner {
          transform:
            perspective(900px)
            rotateX(68deg)
            rotateZ(-55deg);

          animation: innerOrbit 8s linear infinite;
        }

        @keyframes outerOrbit {
          from {
            transform:
              perspective(900px)
              rotateX(68deg)
              rotateZ(-18deg);
          }

          to {
            transform:
              perspective(900px)
              rotateX(68deg)
              rotateZ(342deg);
          }
        }

        @keyframes middleOrbit {
          from {
            transform:
              perspective(900px)
              rotateX(68deg)
              rotateZ(32deg);
          }

          to {
            transform:
              perspective(900px)
              rotateX(68deg)
              rotateZ(-328deg);
          }
        }

        @keyframes innerOrbit {
          from {
            transform:
              perspective(900px)
              rotateX(68deg)
              rotateZ(-55deg);
          }

          to {
            transform:
              perspective(900px)
              rotateX(68deg)
              rotateZ(305deg);
          }
        }


        /* =================================================
           ORBIT NODES
        ================================================= */

        .orbit-node {
          position: absolute;
          left: 50%;
          top: -4px;
          width: 8px;
          height: 8px;
          border-radius: 9999px;
          transform: translateX(-50%);
        }

        .node-pink {
          background: #ff1ac6;
          box-shadow:
            0 0 8px #ff1ac6,
            0 0 22px rgba(255, 26, 198, 0.8);
        }

        .node-purple {
          background: #a855f7;
          box-shadow:
            0 0 8px #a855f7,
            0 0 20px rgba(168, 85, 247, 0.7);
        }

        .node-white {
          background: white;
          box-shadow:
            0 0 8px white,
            0 0 18px rgba(255, 255, 255, 0.5);
        }


        /* =================================================
           EXTRA ORBITS
        ================================================= */

        .orbit-horizontal {
          transform:
            perspective(800px)
            rotateX(70deg)
            rotateZ(-5deg);

          animation: horizontalOrbit 9s ease-in-out infinite;
        }

        .orbit-diagonal {
          transform:
            perspective(800px)
            rotateX(70deg)
            rotateZ(45deg);

          animation: diagonalOrbit 11s ease-in-out infinite reverse;
        }

        @keyframes horizontalOrbit {
          0%,
          100% {
            transform:
              perspective(800px)
              rotateX(70deg)
              rotateZ(-5deg)
              scale(1);
          }

          50% {
            transform:
              perspective(800px)
              rotateX(70deg)
              rotateZ(175deg)
              scale(1.04);
          }
        }

        @keyframes diagonalOrbit {
          0%,
          100% {
            transform:
              perspective(800px)
              rotateX(70deg)
              rotateZ(45deg)
              scale(1);
          }

          50% {
            transform:
              perspective(800px)
              rotateX(70deg)
              rotateZ(-135deg)
              scale(0.96);
          }
        }


        /* =================================================
           CENTRAL 3D CORE
        ================================================= */

        .hero-core {
          transform-style: preserve-3d;
          animation: coreFloat 6s ease-in-out infinite;
        }

        @keyframes coreFloat {
          0%,
          100% {
            transform:
              perspective(1000px)
              rotateX(4deg)
              rotateY(-5deg)
              translateY(0);
          }

          50% {
            transform:
              perspective(1000px)
              rotateX(-4deg)
              rotateY(5deg)
              translateY(-12px);
          }
        }


        /* =================================================
           SPHERE GRID
        ================================================= */

        .sphere-grid {
          background-image:
            linear-gradient(
              rgba(255, 255, 255, 0.1) 1px,
              transparent 1px
            ),
            linear-gradient(
              90deg,
              rgba(255, 255, 255, 0.1) 1px,
              transparent 1px
            );

          background-size: 18px 18px;
          border-radius: 50%;

          transform:
            rotate(25deg)
            skewY(-8deg);
        }


        /* =================================================
           CORE DOTS
        ================================================= */

        .core-dot {
          position: absolute;
          z-index: 10;
          width: 6px;
          height: 6px;
          border-radius: 9999px;
        }

        .core-dot-one {
          top: 12%;
          right: 20%;
          background: #ff1ac6;
          box-shadow: 0 0 15px #ff1ac6;
          animation: coreDotOne 3s ease-in-out infinite;
        }

        .core-dot-two {
          bottom: 17%;
          left: 17%;
          background: #a855f7;
          box-shadow: 0 0 15px #a855f7;
          animation: coreDotTwo 4s ease-in-out infinite;
        }

        .core-dot-three {
          top: 50%;
          right: 3%;
          background: white;
          box-shadow: 0 0 12px white;
          animation: coreDotThree 3.5s ease-in-out infinite;
        }

        @keyframes coreDotOne {
          0%,
          100% {
            transform: translate(0, 0);
            opacity: 0.4;
          }

          50% {
            transform: translate(8px, -10px);
            opacity: 1;
          }
        }

        @keyframes coreDotTwo {
          0%,
          100% {
            transform: translate(0, 0);
            opacity: 0.5;
          }

          50% {
            transform: translate(-8px, 8px);
            opacity: 1;
          }
        }

        @keyframes coreDotThree {
          0%,
          100% {
            transform: translate(0, 0);
            opacity: 0.4;
          }

          50% {
            transform: translate(5px, -6px);
            opacity: 1;
          }
        }


        /* =================================================
           FLOATING CARDS
        ================================================= */

        .orbit-data-card {
          animation: dataCardFloat 5s ease-in-out infinite;
        }

        .orbit-reward-card {
          animation: rewardCardFloat 6s ease-in-out infinite;
        }

        @keyframes dataCardFloat {
          0%,
          100% {
            transform: translateY(0) rotate(0deg);
          }

          50% {
            transform: translateY(-10px) rotate(1deg);
          }
        }

        @keyframes rewardCardFloat {
          0%,
          100% {
            transform: translateY(0) rotate(0deg);
          }

          50% {
            transform: translateY(8px) rotate(-1deg);
          }
        }


        /* =================================================
           MOBILE
        ================================================= */

        @media (max-width: 639px) {
          .hero-star {
            font-size: 8px;
          }

          .star-2,
          .star-5,
          .star-9 {
            display: none;
          }

          .orbit-data-card {
            right: -4px;
            transform: scale(0.78);
          }

          .orbit-reward-card {
            left: -4px;
            transform: scale(0.78);
          }

          .orbit-data-card {
            animation:
              dataCardFloatMobile 5s ease-in-out infinite;
          }

          .orbit-reward-card {
            animation:
              rewardCardFloatMobile 6s ease-in-out infinite;
          }
        }

        @keyframes dataCardFloatMobile {
          0%,
          100% {
            transform: translateY(0) scale(0.78);
          }

          50% {
            transform: translateY(-8px) scale(0.78);
          }
        }

        @keyframes rewardCardFloatMobile {
          0%,
          100% {
            transform: translateY(0) scale(0.78);
          }

          50% {
            transform: translateY(8px) scale(0.78);
          }
        }


        /* =================================================
           TABLET / DESKTOP
        ================================================= */

        @media (min-width: 640px) {
          .hero-changing-text {
            text-align: left;
          }
        }


        /* =================================================
           REDUCED MOTION
        ================================================= */

        @media (prefers-reduced-motion: reduce) {
          .hero-changing-text,
          .orbit,
          .orbit-horizontal,
          .orbit-diagonal,
          .hero-core,
          .orbit-data-card,
          .orbit-reward-card,
          .core-dot,
          .hero-star,
          .hero-badge,
          .typing-cursor {
            animation: none;
          }
        }
      `}</style>
    </section>
  );
}

