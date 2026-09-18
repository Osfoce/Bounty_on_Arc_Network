
import HappyBounty from "../../assets/images/HappyBounty.png";
import Connect from "../Connect";
import SignUp from "../SignUp";
import { useAccount } from "wagmi";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import {
  FiArrowRight,
  FiChevronDown,
} from "react-icons/fi";

function NavBar() {
  const { address, isConnected } = useAccount();
  const [isOpen, setIsOpen] = useState(false);

  const navigate = useNavigate();
  const { pathname } = useLocation();

  // Smoothly scroll to the top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // Redirect when connected
  useEffect(() => {
    if (pathname !== "/") return;

    const timer = setTimeout(() => {
      if (address && isConnected) {
        navigate("/dashboard");
        console.log(`Connected account: ${address}`);
      }
    }, 1000);

    return () => clearTimeout(timer);
  }, [address, isConnected, pathname, navigate]);

  // Handle logo click
  const handleLogoClick = (event) => {
    if (pathname === "/" || pathname === "/dashboard") {
      event.preventDefault();
      scrollToTop();
    }
  };

  // Detect mobile screen
  const isMobile = () => window.innerWidth < 768;

  // Handle Resources click
  const handleResourcesClick = () => {
    if (isMobile()) {
      setIsOpen((prev) => !prev);
    }
  };

  return (
    <div className="fixed left-0 top-0 z-50 w-full px-3 pt-3 sm:px-4 md:px-6 lg:px-8">
      <nav
        className="
          relative mx-auto flex h-[68px] max-w-[1500px]
          items-center justify-between
          overflow-visible rounded-[20px]
          border border-black/[0.07]
          bg-white/95
          px-3
          shadow-[0_12px_45px_rgba(0,0,0,0.08)]
          backdrop-blur-2xl
          sm:px-5 md:px-6
        "
      >
        {/* =====================================================
            GOLD TOP ACCENT
        ====================================================== */}

        <div
          className="
            pointer-events-none absolute left-1/2 top-0
            h-[2px] w-40 -translate-x-1/2
            rounded-full
            bg-gradient-to-r
            from-transparent
            via-[#D4AF37]
            to-transparent
            opacity-90
          "
        />

        {/* =====================================================
            SUBTLE GOLD INNER GLOW
        ====================================================== */}

        <div
          className="
            pointer-events-none absolute inset-0
            rounded-[20px]
            bg-gradient-to-b
            from-[#D4AF37]/[0.035]
            via-transparent
            to-transparent
          "
        />

        {/* =====================================================
            LOGO
        ====================================================== */}

        <div className="relative z-10 flex h-full items-center">
          {pathname !== "/dashboard" && pathname !== "/" ? (
            <Link
              to="/dashboard"
              onClick={handleLogoClick}
              className="group flex h-full items-center"
              aria-label="Go to dashboard"
            >
              <img
                className="
                  h-[66px] w-auto object-contain
                  transition-all duration-300
                  group-hover:scale-[1.04]
                  sm:h-[62px]
                "
                src={HappyBounty}
                alt="Happy Bounty"
              />
            </Link>
          ) : (
            <button
              type="button"
              onClick={scrollToTop}
              className="group flex h-full items-center"
              aria-label="Back to top"
            >
              <img
                className="
                  h-[66px] w-auto object-contain
                  transition-all duration-300
                  group-hover:scale-[1.04]
                  sm:h-[62px]
                "
                src={HappyBounty}
                alt="Happy Bounty"
              />
            </button>
          )}
        </div>

        {/* =====================================================
            RIGHT SECTION
        ====================================================== */}

        <div
          className="
            relative z-20 flex items-center
            gap-1.5 font-bold text-[#111111]
            sm:gap-2 md:gap-4
          "
        >
          {/* =================================================
              RESOURCES
          ================================================== */}

          <div
            className="relative"
            onMouseEnter={() => {
              if (!isMobile()) {
                setIsOpen(true);
              }
            }}
            onMouseLeave={() => {
              if (!isMobile()) {
                setIsOpen(false);
              }
            }}
          >
            <button
              type="button"
              onClick={handleResourcesClick}
              className={`
                group flex items-center gap-2
                rounded-xl border
                px-3 py-2
                text-[13px] font-bold
                transition-all duration-200
                ${
                  isOpen
                    ? "border-[#D4AF37]/30 bg-[#D4AF37]/[0.08] text-[#111111]"
                    : "border-transparent text-[#222222] hover:border-[#D4AF37]/25 hover:bg-[#D4AF37]/[0.055] hover:text-[#111111]"
                }
              `}
            >
              <span>Resources</span>

              <FiChevronDown
                className={`
                  h-4 w-4
                  transition-all duration-300
                  ${
                    isOpen
                      ? "rotate-180 text-[#D4AF37]"
                      : "text-black/40 group-hover:text-[#D4AF37]"
                  }
                `}
              />
            </button>

            {/* =================================================
                DROPDOWN
            ================================================== */}

            <div
              className={`
                absolute right-0 top-full mt-2.5
                w-[230px]
                origin-top-right
                overflow-hidden
                rounded-2xl
                border border-black/[0.07]
                bg-white/[0.98]
                shadow-[0_25px_70px_rgba(0,0,0,0.12)]
                backdrop-blur-2xl
                transition-all duration-200
                ${
                  isOpen
                    ? "visible translate-y-0 scale-100 opacity-100"
                    : "invisible -translate-y-2 scale-[0.98] opacity-0"
                }
              `}
            >
              {/* DROPDOWN HEADER */}

              <div className="border-b border-black/[0.07] px-4 py-3.5">
                <div className="flex items-center justify-between">
                  <p
                    className="
                      text-[10px] font-bold
                      uppercase tracking-[0.18em]
                      text-black/55
                    "
                  >
                    Explore
                  </p>

                  <span
                    className="
                      h-1.5 w-1.5 rounded-full
                      bg-[#D4AF37]
                      shadow-[0_0_10px_rgba(212,175,55,0.45)]
                    "
                  />
                </div>
              </div>

              {/* =================================================
                  FAQ
              ================================================== */}

              <Link
                to="/faqs"
                className="
                  group flex items-center justify-between
                  px-4 py-3.5
                  transition-all duration-200
                  hover:bg-[#D4AF37]/[0.06]
                "
              >
                <div>
                  <span
                    className="
                      block text-sm font-bold
                      text-[#222222]
                      transition-colors duration-200
                      group-hover:text-[#B28B20]
                    "
                  >
                    FAQs
                  </span>

                  <span
                    className="
                      mt-0.5 block
                      text-[10px] font-medium
                      text-black/45
                      transition-colors
                      group-hover:text-black/65
                    "
                  >
                    Frequently asked questions
                  </span>
                </div>

                <FiArrowRight
                  className="
                    h-4 w-4 text-black/25
                    transition-all duration-200
                    group-hover:translate-x-1
                    group-hover:text-[#D4AF37]
                  "
                />
              </Link>

              {/* =================================================
                  WHITE PAPER
              ================================================== */}

              <Link
                to="/whitepaper"
                className="
                  group flex items-center justify-between
                  border-t border-black/[0.05]
                  px-4 py-3.5
                  transition-all duration-200
                  hover:bg-[#D4AF37]/[0.06]
                "
              >
                <div>
                  <span
                    className="
                      block text-sm font-bold
                      text-[#222222]
                      transition-colors duration-200
                      group-hover:text-[#B28B20]
                    "
                  >
                    White Paper
                  </span>

                  <span
                    className="
                      mt-0.5 block
                      text-[10px] font-medium
                      text-black/45
                      transition-colors
                      group-hover:text-black/65
                    "
                  >
                    Learn how Happy Bounty works
                  </span>
                </div>

                <FiArrowRight
                  className="
                    h-4 w-4 text-black/25
                    transition-all duration-200
                    group-hover:translate-x-1
                    group-hover:text-[#D4AF37]
                  "
                />
              </Link>

              {/* =================================================
                  CONTACT
              ================================================== */}

              <Link
                to="/contact"
                className="
                  group flex items-center justify-between
                  border-t border-black/[0.05]
                  px-4 py-3.5
                  transition-all duration-200
                  hover:bg-[#D4AF37]/[0.06]
                "
              >
                <div>
                  <span
                    className="
                      block text-sm font-bold
                      text-[#222222]
                      transition-colors duration-200
                      group-hover:text-[#B28B20]
                    "
                  >
                    Contact
                  </span>

                  <span
                    className="
                      mt-0.5 block
                      text-[10px] font-medium
                      text-black/45
                      transition-colors
                      group-hover:text-black/65
                    "
                  >
                    Get in touch with the team
                  </span>
                </div>

                <FiArrowRight
                  className="
                    h-4 w-4 text-black/25
                    transition-all duration-200
                    group-hover:translate-x-1
                    group-hover:text-[#D4AF37]
                  "
                />
              </Link>
            </div>
          </div>

          {/* =====================================================
              DIVIDER
          ====================================================== */}

          <div
            className="
              mx-1 hidden h-7 w-px
              bg-gradient-to-b
              from-transparent
              via-black/[0.15]
              to-transparent
              sm:block
            "
          />

          {/* =====================================================
              CONNECT / SIGN UP
          ====================================================== */}

          <div className="flex items-center">
            {!isConnected && pathname === "/" ? (
              <SignUp />
            ) : (
              <Connect />
            )}
          </div>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;

