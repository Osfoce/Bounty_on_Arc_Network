
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
import Hero from "./Hero";
import HowItWorks from "./Howitwork";
import PlatformStats from "./PlatformStats";
import Features from "./Features";
import Testimonials from "./Testimonials";
import SupportedNetworks from "./SupportedNetworks";



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
      <div className="relative z-50 py-6 mt-5 w-full">
        <NavBar />
       
      </div>
 <LiveTricker />
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
     <div>
<SupportedNetworks />
     </div>
     

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
