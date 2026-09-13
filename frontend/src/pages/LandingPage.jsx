
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

import hero from "../assets/images/hero.jpg";
import Footer from "../components/Layout/Footer";
import NavBar from "../components/Layout/NavBar";
import LiveTricker from "../components/Layout/LiveTricker";
import BountyCard from "../components/Bounty/BountyCard";
import injecoin from "../assets/images/injecoin.png";
import Hero from "./Hero";
import HowItWorks from "./Howitwork";
import PlatformStats from "./PlatformStats";
import eth2 from "../assets/images/eth2.png";
import ctc from "../assets/images/ctc.jpg";


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
    <div className="relative z-10 min-h-screen flex flex-col overflow-x-hidden text-white">
      {/* =========================================
          NAVIGATION
      ========================================== */}
      <div className="relative z-50 py-6 mt-8 w-full">
        <NavBar />
        <LiveTricker />
      </div>

      {/* =========================================
          HERO SECTION
      ========================================== */}
      <div
        className="relative z-10 rounded-xl mx-4 my-2 md:mx-8 lg:mx-14 mt-5 overflow-hidden bg-cover bg-center"
        style={{
          backgroundImage: `url(${hero})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/70 pointer-events-none" />

        {/* Pink Glow */}
        <div className="absolute -top-32 -left-32 w-80 h-80 bg-[#FF1AC6]/10 rounded-full blur-[100px] pointer-events-none" />

        {/* Purple Glow */}
        <div className="absolute -bottom-40 -right-20 w-96 h-96 bg-purple-600/10 rounded-full blur-[120px] pointer-events-none" />
        

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
          LIVE STATS
      ========================================== */}
      <div>
       <PlatformStats /> 
      </div>
    

      {/* =========================================
          FEATURED BOUNTIES
      ========================================== */}
      <section className="relative z-10 px-6 md:px-10 lg:px-16 my-14 overflow-hidden">
        <div className="absolute -top-32 left-1/4 w-72 h-72 bg-[#FF1AC6]/5 rounded-full blur-[120px] pointer-events-none" />

        <div className="absolute -bottom-32 right-1/4 w-72 h-72 bg-purple-600/5 rounded-full blur-[120px] pointer-events-none" />

        <div className="relative z-10 flex items-end justify-between mb-8 flex-wrap gap-5">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <div className="flex items-center justify-center w-7 h-7 rounded-lg bg-[#FF1AC6]/10 border border-[#FF1AC6]/20 text-[#FF1AC6]">
                <FiZap className="w-4 h-4" />
              </div>

              <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#FF1AC6]">
                Opportunities
              </span>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white">
              Featured{" "}
              <span className="bg-gradient-to-r from-[#FF1AC6] via-pink-400 to-purple-500 bg-clip-text text-transparent">
                Bounties
              </span>
            </h2>

            <p className="mt-2 text-sm text-gray-500 max-w-xl">
              Discover active opportunities and earn rewards by completing
              bounties that match your skills.
            </p>
          </div>

          <Link
            to="/dashboard"
            className="group flex items-center gap-2 px-4 py-2.5 rounded-xl border border-white/10 bg-white/[0.03] text-sm font-medium text-gray-300 transition-all duration-300 hover:border-[#FF1AC6]/30 hover:bg-[#FF1AC6]/5 hover:text-[#FF1AC6]"
          >
            <span>View all bounties</span>

            <FiArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>

        {loading ? (
          <div className="relative z-10 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {[1, 2, 3].map((item) => (
              <div
                key={item}
                className="h-[280px] rounded-2xl border border-white/[0.06] bg-white/[0.025] p-5 animate-pulse"
              >
                <div className="flex justify-between mb-6">
                  <div className="h-10 w-10 rounded-xl bg-white/[0.06]" />
                  <div className="h-6 w-20 rounded-full bg-white/[0.06]" />
                </div>

                <div className="h-5 w-3/4 rounded bg-white/[0.06] mb-3" />

                <div className="h-3 w-full rounded bg-white/[0.04] mb-2" />
                <div className="h-3 w-5/6 rounded bg-white/[0.04] mb-6" />

                <div className="flex gap-2">
                  <div className="h-7 w-16 rounded-lg bg-white/[0.05]" />
                  <div className="h-7 w-20 rounded-lg bg-white/[0.05]" />
                </div>

                <div className="mt-8 h-9 w-full rounded-xl bg-white/[0.05]" />
              </div>
            ))}
          </div>
        ) : featuredBounties.length === 0 ? (
          <div className="relative z-10 overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-[#171717] to-[#101010]">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-32 bg-[#FF1AC6]/5 blur-[80px]" />

            <div className="relative flex flex-col items-center justify-center text-center px-6 py-16">
              <div className="flex items-center justify-center w-16 h-16 rounded-2xl border border-white/10 bg-white/[0.03] text-gray-500 mb-5">
                <FiBriefcase className="w-8 h-8" />
              </div>

              <h3 className="text-lg font-semibold text-white">
                No active bounties
              </h3>

              <p className="mt-2 max-w-md text-sm text-gray-500">
                There are no featured opportunities available right now.
                New bounties will appear here as soon as they are posted.
              </p>

              <Link
                to="/dashboard"
                className="mt-6 inline-flex items-center gap-2 rounded-xl bg-[#FF1AC6] px-5 py-2.5 text-sm font-semibold text-white transition-all duration-300 hover:bg-[#e916b1] hover:shadow-lg hover:shadow-[#FF1AC6]/20"
              >
                Browse bounties
                <FiArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        ) : (
          <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {featuredBounties.map((bounty) => (
              <div
                key={bounty._id}
                className="group relative transition-all duration-300 hover:-translate-y-1"
              >
                <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-[#FF1AC6]/0 via-[#FF1AC6]/0 to-purple-500/0 opacity-0 blur-xl transition-all duration-500 group-hover:from-[#FF1AC6]/10 group-hover:via-purple-500/5 group-hover:to-[#FF1AC6]/10 group-hover:opacity-100" />

                <div className="relative">
                  <BountyCard bounty={bounty} />
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* =========================================
          WHY FRESH BOUNTY
      ========================================== */}
      <section className="relative z-10 px-6 md:px-10 lg:px-16 my-24 overflow-hidden">
        <div className="absolute -top-32 left-10 w-72 h-72 rounded-full bg-[#FF1AC6]/10 blur-[120px] pointer-events-none" />

        <div className="absolute -bottom-32 right-10 w-72 h-72 rounded-full bg-purple-600/10 blur-[120px] pointer-events-none" />

        <div className="relative max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 px-4 py-2 mb-5 rounded-full border border-[#FF1AC6]/20 bg-[#FF1AC6]/5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#FF1AC6] animate-pulse" />

              <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#FF1AC6]">
                Built For Web3
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white">
              Everything You Need To{" "}
              <span className="bg-gradient-to-r from-[#FF1AC6] via-pink-400 to-purple-500 bg-clip-text text-transparent">
                Earn
              </span>
            </h2>

            <p className="mt-5 text-gray-400 text-sm md:text-base leading-relaxed max-w-2xl mx-auto">
              Fresh Bounty makes it simple to discover opportunities, complete
              meaningful work, and receive crypto rewards across Web3.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {/* SECURE ESCROW */}
            <div className="group relative overflow-hidden rounded-3xl border border-white/[0.08] bg-gradient-to-br from-[#161616] to-[#0b0b0b] p-7 transition-all duration-500 hover:-translate-y-2 hover:border-[#FF1AC6]/40 hover:shadow-[0_25px_70px_rgba(255,26,198,0.12)]">
              <div className="absolute -top-20 -right-20 w-40 h-40 rounded-full bg-[#FF1AC6]/10 blur-[70px] transition-all duration-500 group-hover:bg-[#FF1AC6]/20" />

              <div className="relative z-10">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-[#FF1AC6]/20 bg-[#FF1AC6]/10 text-[#FF1AC6] transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3">
                  <FiShield className="w-7 h-7" />
                </div>

                <div className="mt-7">
                  <h3 className="text-xl font-bold text-white">
                    Secure Escrow
                  </h3>

                  <div className="w-8 h-1 rounded-full bg-[#FF1AC6] mt-3 mb-4" />

                  <p className="text-sm text-gray-400 leading-relaxed">
                    Rewards are protected until your work is reviewed and
                    successfully approved.
                  </p>
                </div>

                <div className="mt-6 flex items-center gap-2 text-xs text-gray-500">
                  <FiCheck className="text-green-400" />
                  Protected payments
                </div>
              </div>
            </div>

            {/* MULTI CHAIN */}
            <div className="group relative overflow-hidden rounded-3xl border border-white/[0.08] bg-gradient-to-br from-[#161616] to-[#0b0b0b] p-7 transition-all duration-500 hover:-translate-y-2 hover:border-purple-500/40 hover:shadow-[0_25px_70px_rgba(139,92,246,0.12)]">
              <div className="absolute -bottom-20 -right-20 w-40 h-40 rounded-full bg-purple-500/10 blur-[70px] transition-all duration-500 group-hover:bg-purple-500/20" />

              <div className="relative z-10">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-purple-400/20 bg-purple-500/10 text-purple-400 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3">
                  <FiGlobe className="w-7 h-7" />
                </div>

                <div className="mt-7">
                  <h3 className="text-xl font-bold text-white">
                    Multi-Chain
                  </h3>

                  <div className="w-8 h-1 rounded-full bg-purple-500 mt-3 mb-4" />

                  <p className="text-sm text-gray-400 leading-relaxed">
                    Discover bounties and receive rewards across multiple
                    blockchain networks and assets.
                  </p>
                </div>

                <div className="mt-6 flex items-center gap-2 text-xs text-gray-500">
                  <FiCheck className="text-green-400" />
                  Multiple networks
                </div>
              </div>
            </div>

            {/* FAST REWARDS */}
            <div className="group relative overflow-hidden rounded-3xl border border-white/[0.08] bg-gradient-to-br from-[#161616] to-[#0b0b0b] p-7 transition-all duration-500 hover:-translate-y-2 hover:border-blue-400/40 hover:shadow-[0_25px_70px_rgba(59,130,246,0.12)]">
              <div className="absolute -top-20 -right-20 w-40 h-40 rounded-full bg-blue-500/10 blur-[70px] transition-all duration-500 group-hover:bg-blue-500/20" />

              <div className="relative z-10">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-blue-400/20 bg-blue-500/10 text-blue-400 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3">
                  <FiZap className="w-7 h-7" />
                </div>

                <div className="mt-7">
                  <h3 className="text-xl font-bold text-white">
                    Fast Rewards
                  </h3>

                  <div className="w-8 h-1 rounded-full bg-blue-400 mt-3 mb-4" />

                  <p className="text-sm text-gray-400 leading-relaxed">
                    Complete approved tasks and get rewarded without
                    unnecessary delays.
                  </p>
                </div>

                <div className="mt-6 flex items-center gap-2 text-xs text-gray-500">
                  <FiCheck className="text-green-400" />
                  Crypto payouts
                </div>
              </div>
            </div>

            {/* TRANSPARENT */}
            <div className="group relative overflow-hidden rounded-3xl border border-white/[0.08] bg-gradient-to-br from-[#161616] to-[#0b0b0b] p-7 transition-all duration-500 hover:-translate-y-2 hover:border-green-400/40 hover:shadow-[0_25px_70px_rgba(34,197,94,0.10)]">
              <div className="absolute -bottom-20 -right-20 w-40 h-40 rounded-full bg-green-500/10 blur-[70px] transition-all duration-500 group-hover:bg-green-500/20" />

              <div className="relative z-10">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-green-400/20 bg-green-500/10 text-green-400 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3">
                  <FiActivity className="w-7 h-7" />
                </div>

                <div className="mt-7">
                  <h3 className="text-xl font-bold text-white">
                    Transparent
                  </h3>

                  <div className="w-8 h-1 rounded-full bg-green-400 mt-3 mb-4" />

                  <p className="text-sm text-gray-400 leading-relaxed">
                    Track bounty activity, submissions, and rewards through
                    a transparent Web3 ecosystem.
                  </p>
                </div>

                <div className="mt-6 flex items-center gap-2 text-xs text-gray-500">
                  <FiCheck className="text-green-400" />
                  On-chain activity
                </div>
              </div>
            </div>
          </div>

          {/* BOTTOM TRUST BAR */}
          <div className="mt-8 flex flex-col md:flex-row items-center justify-between gap-5 rounded-2xl border border-white/[0.06] bg-white/[0.02] px-6 py-5">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#FF1AC6]/10 text-[#FF1AC6]">
                <FiUsers className="w-5 h-5" />
              </div>

              <div>
                <p className="text-sm font-semibold text-white">
                  Built for creators & contributors
                </p>

                <p className="text-xs text-gray-500">
                  One platform. Endless Web3 opportunities.
                </p>
              </div>
            </div>

            <Link
              to="/dashboard"
              className="group flex items-center gap-2 rounded-xl bg-[#FF1AC6]/10 border border-[#FF1AC6]/20 px-5 py-2.5 text-sm font-semibold text-[#FF1AC6] transition-all duration-300 hover:bg-[#FF1AC6] hover:text-white"
            >
              Explore Opportunities
              <FiArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>

      {/* =========================================
          TESTIMONIALS
      ========================================== */}
      <section
        ref={testimonialsRef}
        className="relative z-10 opacity-0 translate-y-10 transition-all duration-700 mx-6 md:mx-10 lg:mx-16 my-24"
      >
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-5 rounded-full border border-[#FF1AC6]/20 bg-[#FF1AC6]/5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#FF1AC6] animate-pulse" />

            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#FF1AC6]">
              Community Feedback
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white">
            What Our{" "}
            <span className="bg-gradient-to-r from-[#FF1AC6] to-purple-500 bg-clip-text text-transparent">
              Users Say
            </span>
          </h2>

          <p className="mt-4 text-gray-400 text-sm md:text-base max-w-2xl mx-auto">
            Real experiences from builders, creators, and Web3 professionals
            earning through Fresh Bounty.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {/* TESTIMONIAL 1 */}
          <div className="group relative overflow-hidden rounded-3xl border border-white/[0.08] bg-gradient-to-br from-[#151515] via-[#111111] to-[#0b0b0b] p-7 md:p-8 transition-all duration-500 hover:-translate-y-2 hover:border-[#FF1AC6]/40 hover:shadow-[0_25px_70px_rgba(255,26,198,0.10)]">
            <div className="absolute -top-24 -right-24 w-56 h-56 rounded-full bg-[#FF1AC6]/10 blur-[90px] transition-all duration-500 group-hover:bg-[#FF1AC6]/20" />

            <div className="absolute top-6 right-7 text-6xl font-serif text-[#FF1AC6]/10 select-none">
              "
            </div>

            <div className="relative z-10">
              <div className="flex items-center justify-between mb-7">
                <div className="flex items-center gap-4">
                  <div className="relative">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#FF1AC6]/30 to-purple-600/20 border border-[#FF1AC6]/20 flex items-center justify-center text-2xl">
                      🧑
                    </div>

                    <span className="absolute -bottom-1 -right-1 w-4 h-4 rounded-full bg-[#0b0b0b] flex items-center justify-center">
                      <span className="w-2 h-2 rounded-full bg-green-400 shadow-[0_0_8px_rgba(74,222,128,0.8)]" />
                    </span>
                  </div>

                  <div>
                    <div className="flex items-center gap-2">
                      <p className="font-semibold text-white">
                        Alex Thompson
                      </p>

                      <span className="flex items-center justify-center w-4 h-4 rounded-full bg-[#FF1AC6] text-[9px] text-black font-bold">
                        ✓
                      </span>
                    </div>

                    <p className="text-xs text-gray-500 mt-1">
                      Smart Contract Developer
                    </p>
                  </div>
                </div>

                <span className="hidden sm:block text-[10px] uppercase tracking-widest text-gray-600">
                  Verified
                </span>
              </div>

              <div className="flex items-center gap-1 mb-5">
                <span className="text-[#FF1AC6] text-sm">★</span>
                <span className="text-[#FF1AC6] text-sm">★</span>
                <span className="text-[#FF1AC6] text-sm">★</span>
                <span className="text-[#FF1AC6] text-sm">★</span>
                <span className="text-[#FF1AC6] text-sm">★</span>

                <span className="ml-2 text-xs text-gray-600">
                  5.0
                </span>
              </div>

              <p className="text-gray-300 leading-relaxed text-base md:text-lg">
                “Posted a Solidity audit bounty and received 3 high-quality
                submissions within 24 hours. The escrow system made everything
                trustless. Highly recommended!”
              </p>

              <div className="flex items-center justify-between mt-8 pt-5 border-t border-white/[0.06]">
                <span className="text-xs text-gray-600">
                  Bounty Creator
                </span>

                <span className="flex items-center gap-2 text-xs text-green-400">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-400" />
                  Completed
                </span>
              </div>
            </div>
          </div>

          {/* TESTIMONIAL 2 */}
          <div className="group relative overflow-hidden rounded-3xl border border-white/[0.08] bg-gradient-to-br from-[#151515] via-[#111111] to-[#0b0b0b] p-7 md:p-8 transition-all duration-500 hover:-translate-y-2 hover:border-purple-500/40 hover:shadow-[0_25px_70px_rgba(139,92,246,0.10)]">
            <div className="absolute -bottom-24 -right-24 w-56 h-56 rounded-full bg-purple-500/10 blur-[90px] transition-all duration-500 group-hover:bg-purple-500/20" />

            <div className="absolute top-6 right-7 text-6xl font-serif text-purple-500/10 select-none">
              "
            </div>

            <div className="relative z-10">
              <div className="flex items-center justify-between mb-7">
                <div className="flex items-center gap-4">
                  <div className="relative">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-purple-500/30 to-[#FF1AC6]/20 border border-purple-400/20 flex items-center justify-center text-2xl">
                      👩‍💻
                    </div>

                    <span className="absolute -bottom-1 -right-1 w-4 h-4 rounded-full bg-[#0b0b0b] flex items-center justify-center">
                      <span className="w-2 h-2 rounded-full bg-green-400 shadow-[0_0_8px_rgba(74,222,128,0.8)]" />
                    </span>
                  </div>

                  <div>
                    <div className="flex items-center gap-2">
                      <p className="font-semibold text-white">
                        Maria Gonzales
                      </p>

                      <span className="flex items-center justify-center w-4 h-4 rounded-full bg-purple-500 text-[9px] text-white font-bold">
                        ✓
                      </span>
                    </div>

                    <p className="text-xs text-gray-500 mt-1">
                      Freelance Web3 Designer
                    </p>
                  </div>
                </div>

                <span className="hidden sm:block text-[10px] uppercase tracking-widest text-gray-600">
                  Verified
                </span>
              </div>

              <div className="flex items-center gap-1 mb-5">
                <span className="text-purple-400 text-sm">★</span>
                <span className="text-purple-400 text-sm">★</span>
                <span className="text-purple-400 text-sm">★</span>
                <span className="text-purple-400 text-sm">★</span>
                <span className="text-purple-400 text-sm">★</span>

                <span className="ml-2 text-xs text-gray-600">
                  5.0
                </span>
              </div>

              <p className="text-gray-300 leading-relaxed text-base md:text-lg">
                “Earned 500 INJ by designing a DeFi dashboard. The process was
                smooth and the payout was instant. I love the multi-chain
                support!”
              </p>

              <div className="flex items-center justify-between mt-8 pt-5 border-t border-white/[0.06]">
                <span className="text-xs text-gray-600">
                  Bounty Worker
                </span>

                <span className="flex items-center gap-2 text-xs text-green-400">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-400" />
                  Payment Received
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 mt-10 text-xs text-gray-600">
          <span className="flex items-center gap-2">
            <span className="text-green-400">✓</span>
            Verified Users
          </span>

          <span className="flex items-center gap-2">
            <span className="text-[#FF1AC6]">✓</span>
            Real Bounty Activity
          </span>

          <span className="flex items-center gap-2">
            <span className="text-purple-400">✓</span>
            On-chain Payments
          </span>
        </div>
      </section>

      {/* =========================================
          SUPPORTED NETWORKS & TOKENS
      ========================================== */}
      <section className="relative z-10 px-6 md:px-10 lg:px-16 my-14">
        <div className="relative overflow-hidden rounded-3xl border border-white/[0.08] bg-gradient-to-br from-[#151515] via-[#101010] to-[#090909] p-6 md:p-8">
          <div className="absolute -top-32 left-1/4 h-56 w-56 rounded-full bg-[#FF1AC6]/10 blur-[100px] pointer-events-none" />

          <div className="absolute -bottom-32 right-1/4 h-56 w-56 rounded-full bg-purple-600/10 blur-[100px] pointer-events-none" />

          <div
            className="absolute inset-0 opacity-[0.02] pointer-events-none"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
              backgroundSize: "40px 40px",
            }}
          />

          <div className="relative z-10">
            <div className="text-center max-w-2xl mx-auto mb-8">
              <div className="inline-flex items-center gap-2 rounded-full border border-[#FF1AC6]/20 bg-[#FF1AC6]/5 px-3 py-1.5 mb-4">
                <span className="w-1.5 h-1.5 rounded-full bg-[#FF1AC6] animate-pulse shadow-[0_0_8px_rgba(255,26,198,0.8)]" />

                <span className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#FF1AC6]">
                  Multi-Chain Ecosystem
                </span>
              </div>

              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white">
                Supported{" "}
                <span className="bg-gradient-to-r from-[#FF1AC6] via-pink-400 to-purple-500 bg-clip-text text-transparent">
                  Networks & Tokens
                </span>
              </h2>

              <p className="mt-3 text-sm text-gray-400 max-w-lg mx-auto leading-relaxed">
                Connect, complete bounties, and receive rewards across
                supported blockchain networks and digital assets.
              </p>
            </div>

            {/* NETWORKS */}
            <div className="flex items-center gap-3 mb-4">
              <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-gray-500">
                Networks
              </span>

              <div className="h-px flex-1 bg-gradient-to-r from-white/10 to-transparent" />
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-8">
              {/* Injective */}
              <div className="group rounded-2xl border border-white/[0.07] bg-white/[0.025] p-4 text-center transition-all duration-300 hover:-translate-y-1 hover:border-[#FF1AC6]/40 hover:bg-white/[0.05]">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl border border-white/[0.08] bg-black/40 transition-transform duration-300 group-hover:scale-105">
                  <img
                    src={injecoin}
                    alt="Injective"
                    className="w-8 h-8"
                  />
                </div>

                <p className="mt-3 text-sm font-semibold text-white">
                  Injective
                </p>

                <span className="mt-0.5 block text-[9px] uppercase tracking-wider text-gray-600">
                  Network
                </span>
              </div>

              {/* Ethereum */}
              <div className="group rounded-2xl border border-white/[0.07] bg-white/[0.025] p-4 text-center transition-all duration-300 hover:-translate-y-1 hover:border-purple-400/40 hover:bg-white/[0.05]">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl border border-white/[0.08] bg-black/40 transition-transform duration-300 group-hover:scale-105">
                  <img
                    src={eth2}
                    alt="Ethereum"
                    className="w-8 h-8"
                  />
                </div>

                <p className="mt-3 text-sm font-semibold text-white">
                  Ethereum
                </p>

                <span className="mt-0.5 block text-[9px] uppercase tracking-wider text-gray-600">
                  Network
                </span>
              </div>

              {/* Creditcoin */}
              <div className="group rounded-2xl border border-[#FF1AC6]/20 bg-[#FF1AC6]/[0.03] p-4 text-center transition-all duration-300 hover:-translate-y-1 hover:border-[#FF1AC6]/50 hover:bg-[#FF1AC6]/[0.06]">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl border border-[#FF1AC6]/20 bg-black/40 transition-transform duration-300 group-hover:scale-105">
                  <img
                    src={ctc}
                    alt="Creditcoin"
                    className="w-8 h-8 object-contain"
                  />
                </div>

                <p className="mt-3 text-sm font-semibold text-white">
                  Creditcoin
                </p>

                <span className="mt-0.5 block text-[9px] uppercase tracking-wider text-[#FF1AC6]/70">
                  CTC Network
                </span>
              </div>
            </div>

            {/* TOKENS */}
            <div className="flex items-center gap-3 mb-4">
              <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-gray-500">
                Supported Assets
              </span>

              <div className="h-px flex-1 bg-gradient-to-r from-white/10 to-transparent" />
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {/* INJ */}
              <div className="group flex items-center gap-3 rounded-xl border border-white/[0.07] bg-white/[0.025] p-3 transition-all duration-300 hover:border-[#FF1AC6]/30 hover:bg-white/[0.05]">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-black/50 border border-white/[0.08]">
                  <img
                    src={injecoin}
                    alt="INJ"
                    className="w-7 h-7 transition-transform duration-300 group-hover:scale-110"
                  />
                </div>

                <div>
                  <p className="text-sm font-semibold text-white">
                    INJ
                  </p>

                  <p className="text-[9px] text-gray-600">
                    INJ / wINJ
                  </p>
                </div>
              </div>

              {/* CTC */}
              <div className="group flex items-center gap-3 rounded-xl border border-[#FF1AC6]/15 bg-[#FF1AC6]/[0.025] p-3 transition-all duration-300 hover:border-[#FF1AC6]/40 hover:bg-[#FF1AC6]/[0.05]">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-black/50 border border-[#FF1AC6]/15">
                  <img
                    src={ctc}
                    alt="CTC"
                    className="w-7 h-7 object-contain transition-transform duration-300 group-hover:scale-110"
                  />
                </div>

                <div>
                  <p className="text-sm font-semibold text-white">
                    CTC
                  </p>

                  <p className="text-[9px] text-gray-600">
                    Creditcoin
                  </p>
                </div>
              </div>

              {/* MORE */}
              <div className="group flex items-center gap-3 rounded-xl border border-dashed border-white/[0.08] bg-white/[0.015] p-3 transition-all duration-300 hover:border-white/20 hover:bg-white/[0.03]">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-black/30 border border-white/[0.06]">
                  <span className="text-lg text-gray-600">
                    +
                  </span>
                </div>

                <div>
                  <p className="text-sm font-semibold text-gray-500">
                    More
                  </p>

                  <p className="text-[9px] text-gray-700">
                    Coming soon
                  </p>
                </div>
              </div>
            </div>

            {/* FOOTER */}
            <div className="mt-7 flex flex-col sm:flex-row items-center justify-between gap-3 border-t border-white/[0.06] pt-5">
              <div className="flex items-center gap-2">
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-green-500/10">
                  <span className="h-1.5 w-1.5 rounded-full bg-green-400 animate-pulse shadow-[0_0_8px_rgba(74,222,128,0.8)]" />
                </span>

                <span className="text-[11px] text-gray-500">
                  Multi-chain infrastructure active
                </span>
              </div>

              <span className="text-[11px] text-gray-600">
                CTC ecosystem integration
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================
          FINAL CTA
      ========================================== */}
      <section className="relative z-10 mx-6 md:mx-10 lg:mx-16 my-12">
        <div className="relative overflow-hidden rounded-3xl border border-[#FF1AC6]/20 bg-[#0d0d0d]">
          <div className="absolute -top-24 left-1/2 h-56 w-56 -translate-x-1/2 rounded-full bg-[#FF1AC6]/15 blur-[100px]" />

          <div className="absolute -bottom-28 -left-16 h-56 w-56 rounded-full bg-purple-600/10 blur-[100px]" />

          <div className="absolute -bottom-28 -right-16 h-56 w-56 rounded-full bg-[#FF1AC6]/10 blur-[100px]" />

          <div
            className="absolute inset-0 opacity-[0.025]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
              backgroundSize: "45px 45px",
            }}
          />

          <div className="absolute -left-20 top-1/2 h-40 w-40 -translate-y-1/2 rounded-full border border-[#FF1AC6]/10" />

          <div className="absolute -left-12 top-1/2 h-24 w-24 -translate-y-1/2 rounded-full border border-[#FF1AC6]/10" />

          <div className="absolute -right-20 top-1/2 h-40 w-40 -translate-y-1/2 rounded-full border border-purple-500/10" />

          <div className="absolute -right-12 top-1/2 h-24 w-24 -translate-y-1/2 rounded-full border border-purple-500/10" />

          <div className="relative z-10 px-6 py-9 md:px-10 md:py-11 lg:px-16">
            <div className="mb-4 flex justify-center">
              <div className="inline-flex items-center gap-2 rounded-full border border-[#FF1AC6]/20 bg-[#FF1AC6]/5 px-3 py-1.5">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#FF1AC6] opacity-60" />

                  <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-[#FF1AC6]" />
                </span>

                <span className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[#FF1AC6]">
                  Start Building. Start Earning.
                </span>
              </div>
            </div>

            <h2 className="mx-auto max-w-3xl text-center text-3xl font-extrabold leading-tight tracking-tight text-white md:text-4xl lg:text-5xl">
              Turn Your{" "}
              <span className="bg-gradient-to-r from-[#FF1AC6] via-pink-400 to-purple-500 bg-clip-text text-transparent">
                Skills
              </span>{" "}
              Into Rewards.
            </h2>

            <p className="mx-auto mt-3 max-w-xl text-center text-sm leading-relaxed text-gray-400 md:text-base">
              Discover Web3 opportunities, complete meaningful tasks, and get
              rewarded in crypto. Or create a bounty and find skilled
              contributors ready to get the job done.
            </p>

            <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link
                to="/dashboard"
                className="group relative inline-flex w-full items-center justify-center gap-2 overflow-hidden rounded-xl bg-[#FF1AC6] px-7 py-3 text-sm font-bold text-white shadow-[0_0_25px_rgba(255,26,198,0.2)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#ff32ce] hover:shadow-[0_0_35px_rgba(255,26,198,0.35)] sm:w-auto"
              >
                <span className="relative z-10">
                  Explore Bounties
                </span>

                <span className="relative z-10 text-lg transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>

                <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
              </Link>

              <Link
                to="/create"
                className="group inline-flex w-full items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/[0.03] px-7 py-3 text-sm font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#FF1AC6]/40 hover:bg-[#FF1AC6]/5 sm:w-auto"
              >
                <span>Create a Bounty</span>

                <span className="text-gray-500 transition-colors duration-300 group-hover:text-[#FF1AC6]">
                  +
                </span>
              </Link>
            </div>

            <div className="mx-auto mt-6 flex max-w-2xl flex-wrap items-center justify-center gap-x-6 gap-y-2 border-t border-white/[0.06] pt-4">
              <div className="flex items-center gap-2 text-[11px] text-gray-500">
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-green-500/10 text-green-400">
                  ✓
                </span>

                Secure Web3 Payments
              </div>

              <div className="flex items-center gap-2 text-[11px] text-gray-500">
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#FF1AC6]/10 text-[#FF1AC6]">
                  ⚡
                </span>

                Fast Rewards
              </div>

              <div className="flex items-center gap-2 text-[11px] text-gray-500">
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-purple-500/10 text-purple-400">
                  ◇
                </span>

                Multi-Chain
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================
          FOOTER
      ========================================== */}
      <div className="relative z-10">
        <Footer />
      </div>
    </div>
  );
}

export default LandingPage;
