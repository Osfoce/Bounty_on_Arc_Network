
import { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import {
  FiZap,
  FiShield,
  FiCheck,
  FiUsers,
  FiArrowRight,
  FiGlobe,
  FiActivity,
  FiBriefcase,
} from "react-icons/fi";

import NavBar from "../components/Layout/NavBar";
import LiveTricker from "../components/Layout/LiveTricker";
import BountyCard from "../components/Bounty/BountyCard";
import Hero from "./Hero";
import HowItWorks from "./Howitwork";
import PlatformStats from "./PlatformStats";
import Features from "./Features";
import Testimonials from "./Testimonials";

import CallToAction from "./CallToAction";
import BuiltForWeb3 from "./BuiltForWeb3";
import Footer from "../components/Layout/Footer";

function LandingPage() {
  const [featuredBounties, setFeaturedBounties] = useState([]);
  const [loading, setLoading] = useState(true);

  const [stats, setStats] = useState({
    totalBounties: 0,
    totalRewards: 0,
    totalUsers: 0,
  });

  // HERO ROTATING TEXT
  const [heroText, setHeroText] = useState(0);

  const heroMessages = [
    "Web3",
    "Complete Tasks",
    "Earn Crypto",
    "Build Your Skills",
  ];

  // Refs for scroll animations
  const card1Ref = useRef(null);
  const card2Ref = useRef(null);
  const card3Ref = useRef(null);
  const statsRef = useRef(null);
  const testimonialsRef = useRef(null);

  const API_URL = "https://fresh-bounty.onrender.com/api";

  // HERO TEXT ROTATION
  useEffect(() => {
    const interval = setInterval(() => {
      setHeroText((prev) => (prev + 1) % heroMessages.length);
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  // Fetch featured bounties and stats
  useEffect(() => {
    const fetchFeaturedBounties = async () => {
      try {
        const response = await axios.get(`${API_URL}/task`, {
          params: {
            status: "active",
            limit: 3,
            page: 0,
          },
        });

        setFeaturedBounties(response.data.bounties || []);
      } catch (err) {
        console.error("Error fetching featured bounties:", err);
      } finally {
        setLoading(false);
      }
    };

    const fetchStats = async () => {
      try {
        const allBounties = await axios.get(`${API_URL}/task`, {
          params: {
            limit: 1,
          },
        });

        const totalBounties =
          allBounties.data.pagination?.total || 0;

        setStats({
          totalBounties,
          totalRewards: 124500,
          totalUsers: 845,
        });
      } catch (err) {
        console.error("Error fetching stats:", err);
      }
    };

    fetchFeaturedBounties();
    fetchStats();
  }, []);

  // Intersection Observer for scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(
              "opacity-100",
              "translate-y-0"
            );

            entry.target.classList.remove(
              "opacity-0",
              "translate-y-10"
            );

            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.3,
      }
    );

    if (card1Ref.current) observer.observe(card1Ref.current);
    if (card2Ref.current) observer.observe(card2Ref.current);
    if (card3Ref.current) observer.observe(card3Ref.current);
    if (statsRef.current) observer.observe(statsRef.current);

    if (testimonialsRef.current) {
      observer.observe(testimonialsRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div className="relative z-10 flex min-h-screen flex-col overflow-x-hidden bg-[#f6f5ef] text-[#111111]">
      {/* =========================================
          NAVIGATION
      ========================================== */}
      <div className="relative z-50 mt-5 w-full py-6">
        <NavBar />
      </div>

      {/* =========================================
          LIVE TICKER
      ========================================== */}
      <LiveTricker />

      {/* =========================================
          HERO SECTION
      ========================================== */}
      <div className="relative z-10 mx-4 my-2 mt-5 overflow-hidden rounded-xl md:mx-8 lg:mx-14">
        {/* Soft milk background */}
        <div className="absolute inset-0 bg-[#f6f5ef]" />

        {/* Subtle gold brick texture */}
        <div
          className="pointer-events-none absolute inset-0 opacity-30"
          style={{
            backgroundImage: `
              linear-gradient(
                rgba(105,82,35,0.04) 1px,
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

        {/* USDC Blue Glow */}
        <div
          className="pointer-events-none absolute -left-32 -top-32 h-80 w-80 rounded-full blur-[110px]"
          style={{
            background:
              "radial-gradient(circle, rgba(39,117,202,0.09), transparent 70%)",
          }}
        />

        {/* Pink Glow */}
        <div
          className="pointer-events-none absolute -bottom-40 -right-20 h-96 w-96 rounded-full blur-[120px]"
          style={{
            background:
              "radial-gradient(circle, rgba(255,26,198,0.06), transparent 70%)",
          }}
        />

        {/* HERO CONTENT */}
        <div className="relative z-10">
          <Hero />
        </div>
      </div>

      {/* =========================================
          HOW IT WORKS
      ========================================== */}
      <div>
        <HowItWorks />
      </div>

      {/* =========================================
          PLATFORM STATS
      ========================================== */}
      <div>
        <PlatformStats />
      </div>

      {/* =========================================
          FEATURED BOUNTIES
      ========================================== */}
      <section className="relative z-10 my-16 overflow-hidden px-6 md:px-10 lg:px-16">
        {/* =====================================================
            BACKGROUND LIGHTS
        ===================================================== */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          {/* USDC BLUE */}
          <div
            className="absolute -left-32 top-10 h-72 w-72 rounded-full blur-[120px]"
            style={{
              background:
                "radial-gradient(circle, rgba(39,117,202,0.08), transparent 70%)",
            }}
          />

          {/* PINK */}
          <div
            className="absolute -right-32 bottom-0 h-80 w-80 rounded-full blur-[130px]"
            style={{
              background:
                "radial-gradient(circle, rgba(255,26,198,0.055), transparent 70%)",
            }}
          />

          {/* SUBTLE GOLD BRICK TEXTURE */}
          <div className="absolute inset-0 opacity-40">
            <div
              className="h-full w-full"
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
                  "linear-gradient(to bottom, black, transparent 80%)",
                WebkitMaskImage:
                  "linear-gradient(to bottom, black, transparent 80%)",
              }}
            />
          </div>
        </div>

        {/* =====================================================
            HEADER
        ===================================================== */}
        <div className="relative z-10 mx-auto mb-9 flex max-w-7xl flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div>
            {/* ARC LABEL */}
            <div className="mb-4 flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-xl border border-[#2775CA]/15 bg-[#2775CA]/[0.07]">
                <FiZap className="h-4 w-4 text-[#2775CA]" />
              </div>

              <div className="flex items-center gap-2">
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#2775CA]">
                  Arc Opportunities
                </span>

                <span className="h-1 w-1 rounded-full bg-black/20" />

                <span className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[#8b8880]">
                  USDC Bounties
                </span>
              </div>
            </div>

            {/* TITLE */}
            <h2 className="text-3xl font-bold tracking-[-0.04em] text-[#111111] md:text-4xl">
              Featured{" "}
              <span
                style={{
                  background:
                    "linear-gradient(100deg, #2775CA 0%, #2775CA 40%, #8B5CF6 70%, #FF1AC6 100%)",
                  WebkitBackgroundClip: "text",
                  backgroundClip: "text",
                  color: "transparent",
                }}
              >
                Bounties
              </span>
            </h2>

            {/* DESCRIPTION */}
            <p className="mt-3 max-w-xl text-sm leading-7 text-[#77736b]">
              Discover active opportunities, contribute your skills,
              and work toward earning rewards through the Arc-powered
              bounty experience.
            </p>
          </div>

          {/* VIEW ALL */}
          <Link
            to="/dashboard"
            className="group inline-flex w-fit items-center gap-2 rounded-xl border border-black/[0.08] bg-white/75 px-4 py-2.5 text-sm font-semibold text-[#383631] shadow-[0_8px_30px_rgba(35,31,22,0.04)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-0.5 hover:border-[#2775CA]/25 hover:bg-white hover:text-[#2775CA] hover:shadow-[0_12px_35px_rgba(39,117,202,0.08)]"
          >
            <span>View all bounties</span>

            <FiArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>

        {/* =====================================================
            BOUNTIES
        ===================================================== */}
        {loading ? (
          <div className="relative z-10 mx-auto grid max-w-7xl grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
            {[1, 2, 3].map((item) => (
              <div
                key={item}
                className="relative h-[280px] overflow-hidden rounded-[24px] border border-black/[0.07] bg-white/65 p-5 shadow-[0_15px_45px_rgba(35,31,22,0.05)] backdrop-blur-xl"
              >
                <div className="absolute inset-0 -translate-x-full animate-[featuredLoading_1.8s_ease-in-out_infinite] bg-gradient-to-r from-transparent via-white/60 to-transparent" />

                <div className="relative">
                  <div className="mb-6 flex justify-between">
                    <div className="h-10 w-10 rounded-xl bg-black/[0.055]" />

                    <div className="h-6 w-20 rounded-full bg-black/[0.045]" />
                  </div>

                  <div className="mb-3 h-5 w-3/4 rounded bg-black/[0.055]" />

                  <div className="mb-2 h-3 w-full rounded bg-black/[0.035]" />

                  <div className="mb-6 h-3 w-5/6 rounded bg-black/[0.035]" />

                  <div className="flex gap-2">
                    <div className="h-7 w-16 rounded-lg bg-black/[0.04]" />

                    <div className="h-7 w-20 rounded-lg bg-black/[0.04]" />
                  </div>

                  <div className="mt-8 h-9 w-full rounded-xl bg-black/[0.045]" />
                </div>
              </div>
            ))}
          </div>
        ) : featuredBounties.length === 0 ? (
          /* ===================================================
             EMPTY STATE
          =================================================== */
          <div className="relative z-10 mx-auto max-w-7xl overflow-hidden rounded-[26px] border border-black/[0.07] bg-white/75 shadow-[0_20px_60px_rgba(35,31,22,0.06)] backdrop-blur-xl">
            <div className="absolute left-1/2 top-0 h-40 w-72 -translate-x-1/2 rounded-full bg-[#FF1AC6]/[0.055] blur-[80px]" />

            <div className="relative flex flex-col items-center justify-center px-6 py-20 text-center">
              <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-2xl border border-[#FF1AC6]/15 bg-[#FF1AC6]/[0.06] text-[#FF1AC6] shadow-[0_12px_35px_rgba(39,117,202,0.06)]">
                <FiBriefcase className="h-7 w-7" />
              </div>

              <div className="mb-2 flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-[#FF1AC6] shadow-[0_0_10px_rgba(39,117,202,0.5)]" />

                <span className="text-[9px] font-bold uppercase tracking-[0.18em] text-[#FF1AC6]">
                  Arc Marketplace
                </span>
              </div>

              <h3 className="text-lg font-bold text-[#171717]">
                No active bounties
              </h3>

              <p className="mt-2 max-w-md text-sm leading-6 text-[#77736b]">
                There are no featured opportunities available right now.
                New bounties will appear here as they are posted.
              </p>

              <Link
                to="/dashboard"
                className="mt-6 inline-flex items-center gap-2 rounded-xl bg-white px-5 py-2.5 text-sm font-semibold text-black border border-bg-gold-700 hover:text-white shadow-[0_10px_25px_rgba(0,0,0,0.12)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#FF1AC6] hover:shadow-[0_12px_30px_rgba(39,117,202,0.18)]"
              >
                Browse bounties

                <FiArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        ) : (
          /* ===================================================
             ACTIVE BOUNTIES
          =================================================== */
          <div className="relative z-10 mx-auto grid max-w-7xl grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
            {featuredBounties.map((bounty, index) => (
              <div
                key={bounty._id}
                className="featured-bounty-card group relative"
                style={{
                  animationDelay: `${index * 120}ms`,
                }}
              >
                {/* HOVER AURA */}
                <div className="pointer-events-none absolute -inset-2 rounded-[28px] bg-gradient-to-r from-[#2775CA]/0 via-[#2775CA]/0 to-[#FF1AC6]/0 opacity-0 blur-2xl transition-all duration-700 group-hover:from-[#2775CA]/10 group-hover:via-purple-500/[0.04] group-hover:to-[#FF1AC6]/10 group-hover:opacity-100" />

                {/* TOP ARC INDICATOR */}
                <div className="pointer-events-none absolute left-8 right-8 top-0 z-20 h-px overflow-hidden">
                  <div className="featured-bounty-line h-full w-1/3 bg-gradient-to-r from-transparent via-[#2775CA] to-transparent" />
                </div>

                {/* ORIGINAL BOUNTY CARD */}
                <div className="relative transition-all duration-500 group-hover:-translate-y-1.5">
                  <BountyCard bounty={bounty} />
                </div>

                {/* ARC / USDC LABEL */}
                <div className="pointer-events-none absolute bottom-3 right-3 z-30 flex items-center gap-1.5 rounded-full border border-[#2775CA]/10 bg-white/90 px-2 py-1 opacity-0 shadow-sm backdrop-blur-md transition-all duration-300 group-hover:opacity-100">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#2775CA] shadow-[0_0_8px_rgba(39,117,202,0.45)]" />

                  <span className="text-[7px] font-bold uppercase tracking-[0.14em] text-[#2775CA]">
                    Arc / USDC
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* =====================================================
            BOTTOM MICRO INFO
        ===================================================== */}
        <div className="relative z-10 mx-auto mt-6 flex max-w-7xl flex-wrap items-center justify-between gap-3 border-t border-black/[0.06] pt-5">
          <div className="flex items-center gap-2">
            <FiGlobe className="h-3.5 w-3.5 text-[#8b8880]" />

            <span className="text-[9px] font-semibold uppercase tracking-[0.16em] text-[#97938a]">
              Open Web3 Opportunities
            </span>
          </div>

          <div className="flex items-center gap-2">
            <FiShield className="h-3.5 w-3.5 text-[#2775CA]" />

            <span className="text-[9px] font-semibold uppercase tracking-[0.16em] text-[#97938a]">
              On-chain • USDC • Arc
            </span>
          </div>
        </div>
      </section>

      {/* =========================================
          WHY FRESH BOUNTY
      ========================================== */}
      <div>
        <Features />
      </div>

      {/* =========================================
          TESTIMONIALS
      ========================================== */}
      <div>
        <Testimonials />
      </div>

      {/* =========================================
          SUPPORTED NETWORKS & TOKENS
      ========================================== */}
      {/* <div>
        <SupportedNetworks />
      </div> */}

      <div>
        <BuiltForWeb3 />
      </div>

      {/* =========================================
          FINAL CTA
      ========================================== */}
      <div>
        <CallToAction />
      </div>

      {/* =========================================
          FOOTER
      ========================================== */}
      <div className="relative z-10">
        <Footer />
      </div>

      {/* =======================================================
          FEATURED BOUNTY ANIMATIONS
      ======================================================= */}
      <style>{`
        @keyframes featuredLoading {
          0% {
            transform: translateX(-100%);
          }

          55%,
          100% {
            transform: translateX(220%);
          }
        }

        .featured-bounty-card {
          opacity: 0;
          transform: translateY(18px);
          animation:
            featuredBountyReveal
            0.75s
            cubic-bezier(.22, 1, .36, 1)
            forwards;
        }

        @keyframes featuredBountyReveal {
          0% {
            opacity: 0;
            transform: translateY(18px) scale(0.985);
          }

          70% {
            opacity: 1;
            transform: translateY(-2px) scale(1.002);
          }

          100% {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        .featured-bounty-line {
          animation:
            bountyLineMove
            3.8s
            ease-in-out
            infinite;
        }

        @keyframes bountyLineMove {
          0% {
            transform: translateX(-140%);
            opacity: 0;
          }

          20% {
            opacity: 1;
          }

          60% {
            opacity: 1;
          }

          100% {
            transform: translateX(420%);
            opacity: 0;
          }
        }

        @media (max-width: 767px) {
          .featured-bounty-card {
            opacity: 1;
            transform: none;
            animation: none;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .featured-bounty-card,
          .featured-bounty-line,
          .featured-bounty-card *,
          .featured-bounty-card *::before,
          .featured-bounty-card *::after {
            animation: none !important;
            transition-duration: 0.01ms !important;
          }

          .featured-bounty-card {
            opacity: 1 !important;
            transform: none !important;
          }
        }
      `}</style>
    </div>
  );
}

export default LandingPage;

