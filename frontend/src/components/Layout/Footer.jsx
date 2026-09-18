import React from "react";
import {
  FaTwitter,
  FaDiscord,
  FaGithub,
} from "react-icons/fa";
import {
  FiArrowUp,
  FiCheck,
  FiDollarSign,
} from "react-icons/fi";
import HappyBounty from "../../assets/images/HappyBounty.png";

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="relative mt-16 overflow-hidden border-t border-black/[0.08] bg-[#f1f0e8] text-[#111111]">
      {/* Soft background glows */}
      <div className="pointer-events-none absolute -top-32 left-1/4 h-72 w-72 rounded-full bg-[#2775CA]/[0.07] blur-[110px]" />

      <div className="pointer-events-none absolute -bottom-32 right-1/4 h-72 w-72 rounded-full bg-purple-500/[0.06] blur-[110px]" />

      {/* Architectural grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.16]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(76,58,28,0.16) 1px, transparent 1px), linear-gradient(90deg, rgba(76,58,28,0.16) 1px, transparent 1px)",
          backgroundSize: "44px 44px",
        }}
      />

      {/* Gold corner detail */}
      <div className="pointer-events-none absolute right-0 top-0 h-40 w-40 opacity-[0.07]">
        <div className="absolute right-8 top-8 h-24 w-24 border border-[#6f5424]" />
        <div className="absolute right-14 top-14 h-24 w-24 border border-[#6f5424]" />
      </div>

      <div className="relative z-10 mx-auto max-w-screen-2xl px-6 py-10 md:px-10 lg:px-16">

        {/* =====================================================
            MAIN FOOTER
        ====================================================== */}

        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">

          {/* BRAND */}
          <div className="lg:col-span-1">
            <div className="mb-4 flex items-center gap-3">

              {/* Logo */}
              <div className="group relative flex h-11 w-11 items-center justify-center overflow-hidden rounded-xl border border-[#2775CA]/15 bg-white/70 shadow-sm backdrop-blur-xl">
                <div className="absolute inset-0 bg-gradient-to-br from-[#2775CA]/10 to-purple-500/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                <img
                  src={HappyBounty}
                  alt="Happy Bounty logo"
                  className="relative z-10 h-8 w-8 object-contain transition-transform duration-300 group-hover:scale-110"
                />
              </div>

              {/* Brand */}
              <div>
                <h3 className="text-lg font-black tracking-tight">
                  Happy{" "}
                  <span className="text-[#FF1AC6]">
                    Bounty
                  </span>
                </h3>

                <p className="text-[9px] font-semibold uppercase tracking-[0.18em] text-black/35">
                  Web3 Bounty Platform
                </p>
              </div>
            </div>

            <p className="max-w-xs text-sm leading-6 text-black/50">
              A Web3 bounty platform connecting creators and contributors
              through on-chain opportunities and USDC rewards.
            </p>

            {/* Arc / USDC status */}
            <div className="mt-5 flex w-fit items-center gap-2 rounded-full border border-[#2775CA]/15 bg-white/60 px-3 py-1.5 backdrop-blur-xl">
              <span className="h-1.5 w-1.5 rounded-full bg-[#FF1AC6] shadow-[0_0_8px_rgba(39,117,202,0.6)]" />

              <span className="text-[10px] font-bold uppercase tracking-wider text-[#FF1AC6]">
                Built for Arc
              </span>

              <span className="h-3 w-px bg-black/10" />

              <FiDollarSign className="h-3 w-3 text-[#2775CA]" />

              <span className="text-[10px] font-bold uppercase tracking-wider text-black/40">
                USDC
              </span>
            </div>
          </div>

          {/* PLATFORM */}
          <div>
            <h4 className="mb-4 text-xs font-bold uppercase tracking-[0.16em] text-[#111111]">
              Platform
            </h4>

            <ul className="space-y-2.5 text-sm">
              <li>
                <a
                  href="/dashboard"
                  className="text-black/45 transition-colors duration-200 hover:text-[#FF1AC6]"
                >
                  Browse Bounties
                </a>
              </li>

              <li>
                <a
                  href="/dashboard"
                  className="text-black/45 transition-colors duration-200 hover:text-[#FF1AC6]"
                >
                  Categories
                </a>
              </li>

              <li>
                <a
                  href="/leaderboard"
                  className="text-black/45 transition-colors duration-200 hover:text-[#FF1AC6]"
                >
                  Leaderboard
                </a>
              </li>

              <li>
                <a
                  href="/rewards"
                  className="text-black/45 transition-colors duration-200 hover:text-[#FF1AC6]"
                >
                  Rewards
                </a>
              </li>
            </ul>
          </div>

          {/* RESOURCES */}
          <div>
            <h4 className="mb-4 text-xs font-bold uppercase tracking-[0.16em] text-[#111111]">
              Resources
            </h4>

            <ul className="space-y-2.5 text-sm">
              <li>
                <a
                  href="#"
                  className="text-black/45 transition-colors duration-200 hover:text-[#FF1AC6]"
                >
                  Documentation
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="text-black/45 transition-colors duration-200 hover:text-[#FF1AC6]"
                >
                  Blog
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="text-black/45 transition-colors duration-200 hover:text-[#FF1AC6]"
                >
                  Help Center
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="text-black/45 transition-colors duration-200 hover:text-[#FF1AC6]"
                >
                  Community
                </a>
              </li>
            </ul>
          </div>

          {/* CONNECT */}
          <div>
            <h4 className="mb-4 text-xs font-bold uppercase tracking-[0.16em] text-[#111111]">
              Connect
            </h4>

            <p className="mb-4 max-w-xs text-sm leading-6 text-black/45">
              Follow Happy Bounty for new opportunities, platform updates,
              and Web3 work.
            </p>

            <div className="flex gap-2.5">

              {/* X */}
              <a
                href="https://x.com/Happy_bounty"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Happy Bounty on X"
                className="group flex h-10 w-10 items-center justify-center rounded-xl border border-black/[0.08] bg-white/60 text-black/45 shadow-sm backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-black/15 hover:bg-white hover:text-black"
              >
                <FaTwitter className="text-base transition-transform duration-300 group-hover:scale-110" />
              </a>

              {/* Discord */}
              <a
                href="#"
                aria-label="Happy Bounty Discord"
                className="group flex h-10 w-10 items-center justify-center rounded-xl border border-black/[0.08] bg-white/60 text-black/45 shadow-sm backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-[#5865F2]/25 hover:bg-[#5865F2]/[0.06] hover:text-[#5865F2]"
              >
                <FaDiscord className="text-base transition-transform duration-300 group-hover:scale-110" />
              </a>

              {/* GitHub */}
              <a
                href="#"
                aria-label="Happy Bounty GitHub"
                className="group flex h-10 w-10 items-center justify-center rounded-xl border border-black/[0.08] bg-white/60 text-black/45 shadow-sm backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-black/20 hover:bg-white hover:text-black"
              >
                <FaGithub className="text-base transition-transform duration-300 group-hover:scale-110" />
              </a>
            </div>
          </div>
        </div>

        {/* =====================================================
            DIVIDER
        ====================================================== */}

        <div className="my-8 h-px bg-gradient-to-r from-transparent via-black/[0.09] to-transparent" />

        {/* =====================================================
            BOTTOM
        ====================================================== */}

        <div className="flex flex-col items-center justify-between gap-4 text-center md:flex-row md:text-left">

          {/* Copyright */}
          <p className="text-[11px] text-black/35">
            © 2026 Happy Bounty. All rights reserved.
          </p>

          {/* Legal */}
          <div className="flex flex-wrap justify-center gap-5 text-[11px] text-black/35">
            <a
              href="#"
              className="transition-colors hover:text-black/70"
            >
              Privacy Policy
            </a>

            <a
              href="#"
              className="transition-colors hover:text-black/70"
            >
              Terms of Service
            </a>

            <a
              href="#"
              className="transition-colors hover:text-black/70"
            >
              Security
            </a>
          </div>

          {/* Built For */}
          <div className="flex items-center gap-2 text-[11px] text-black/35">
            <span>Built for</span>

            <span className="font-bold text-[#FF1AC6]">
              Arc
            </span>

            <span className="h-1 w-1 rounded-full bg-black/20" />

            <span className="font-bold text-[#2775CA]">
              USDC
            </span>

            <FiCheck className="h-3.5 w-3.5 text-green-600" />
          </div>
        </div>

        {/* =====================================================
            BACK TO TOP
        ====================================================== */}

        <div className="mt-7 flex justify-center">
          <button
            type="button"
            onClick={scrollToTop}
            aria-label="Back to top"
            className="group inline-flex items-center gap-2 rounded-full border border-black/[0.08] bg-white/60 px-3.5 py-2 text-[10px] font-semibold text-black/40 shadow-sm backdrop-blur-xl transition-all duration-300 hover:-translate-y-0.5 hover:border-[#2775CA]/20 hover:bg-white hover:text-[#FF1AC6]"
          >
            <span>Back to top</span>

            <span className="flex h-5 w-5 items-center justify-center rounded-full border border-black/[0.07] bg-white transition-all duration-300 group-hover:border-[#2775CA]/20">
              <FiArrowUp className="h-3 w-3 transition-transform duration-300 group-hover:-translate-y-0.5" />
            </span>
          </button>
        </div>

        {/* Bottom system label */}
        <div className="mt-7 flex items-center justify-center gap-3 text-[8px] font-bold uppercase tracking-[0.22em] text-black/20">
          <span>ARC</span>
          <span>•</span>
          <span>USDC</span>
          <span>•</span>
          <span>WEB3 WORK</span>
          <span>•</span>
          <span>ON-CHAIN</span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;