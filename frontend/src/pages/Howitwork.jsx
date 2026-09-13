import { useEffect, useRef } from "react";
import {
  FiZap,
  FiLock,
  FiUser,
  FiBriefcase,
  FiCheck,
  FiShield,
  FiGlobe,
  FiUsers,
} from "react-icons/fi";

const HowItWorks = () => {
  const card1Ref = useRef(null);
  const card2Ref = useRef(null);
  const card3Ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("how-it-works-visible");
          }
        });
      },
      { threshold: 0.15 }
    );

    [card1Ref.current, card2Ref.current, card3Ref.current].forEach((card) => {
      if (card) observer.observe(card);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <section className="relative z-10 mx-auto px-6 md:px-10 lg:px-16 py-14 md:py-16 text-white overflow-hidden how-it-works-section">
        <div className="absolute top-10 left-[-150px] w-[300px] h-[300px] bg-purple-600/10 blur-[110px] rounded-full pointer-events-none how-it-works-glow" />
        <div className="absolute top-20 right-[-150px] w-[300px] h-[300px] bg-[#FF1AC6]/10 blur-[110px] rounded-full pointer-events-none how-it-works-glow-delay" />

        <div className="absolute top-32 left-0 w-20 h-px bg-gradient-to-r from-transparent via-purple-500/30 to-transparent" />
        <div className="absolute top-40 right-0 w-20 h-px bg-gradient-to-l from-transparent via-pink-500/30 to-transparent" />

        <span className="how-it-works-particle particle-one" />
        <span className="how-it-works-particle particle-two" />
        <span className="how-it-works-particle particle-three" />
        <span className="how-it-works-particle particle-four" />
        <span className="how-it-works-particle particle-five" />

        <div className="relative max-w-6xl mx-auto">
          <div className="text-center mb-10 md:mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 bg-white/[0.04] backdrop-blur-md mb-4">
              <FiZap className="text-[#FF1AC6] text-sm how-it-works-badge-icon" />
              <span className="text-[11px] uppercase tracking-[0.2em] text-gray-400">
                Simple & Powerful
              </span>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
              How It{" "}
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-[#FF1AC6] bg-clip-text text-transparent">
                Works
              </span>
            </h2>

            <p className="mt-3 text-sm md:text-base text-gray-500 max-w-xl mx-auto">
              Connect, choose your role, complete bounties and earn rewards.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6 items-start">
            <div
              ref={card1Ref}
              className="how-it-works-card how-it-works-card-1 opacity-0 translate-y-10"
            >
              <div className="how-it-works-number">01</div>

              <div className="how-it-works-visual how-it-works-wallet-visual">
                <div className="how-it-works-orbit orbit-one" />
                <div className="how-it-works-orbit orbit-two" />
                <div className="how-it-works-orbit-particle orbit-particle-one" />
                <div className="how-it-works-orbit-particle orbit-particle-two" />

                <div className="how-it-works-wallet">
                  <div className="how-it-works-wallet-top">
                    <span />
                    <span />
                    <span />
                  </div>
                  <div className="how-it-works-wallet-body">
                    <div className="how-it-works-wallet-icon">
                      <FiLock />
                    </div>
                    <span className="how-it-works-wallet-line" />
                    <span className="how-it-works-wallet-line short" />
                  </div>
                </div>

                <div className="how-it-works-coin">◇</div>
                <FiLock className="how-it-works-floating-lock" />
              </div>

              <div className="how-it-works-content">
                <h3>Connect Wallet</h3>
                <p>
                  Connect your Web3 wallet securely and get started in seconds.
                </p>
              </div>

              <div className="how-it-works-connection-line" />
            </div>

            <div
              ref={card2Ref}
              className="how-it-works-card how-it-works-card-2 opacity-0 translate-y-10"
            >
              <div className="how-it-works-number">02</div>

              <div className="how-it-works-visual how-it-works-role-visual">
                <div className="how-it-works-beam beam-one" />
                <div className="how-it-works-beam beam-two" />

                <div className="how-it-works-dashboard">
                  <div className="how-it-works-browser-top">
                    <span />
                    <span />
                    <span />
                  </div>

                  <div className="how-it-works-dashboard-content">
                    <div className="how-it-works-dashboard-sidebar" />

                    <div className="how-it-works-dashboard-main">
                      <span className="dashboard-line large" />
                      <span className="dashboard-line" />
                      <span className="dashboard-line short" />

                      <div className="dashboard-boxes">
                        <span />
                        <span />
                        <span />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="how-it-works-role role-user">
                  <FiUser />
                </div>

                <div className="how-it-works-role role-builder">
                  <FiBriefcase />
                </div>

                <div className="how-it-works-role-scan" />
              </div>

              <div className="how-it-works-content">
                <h3>Choose Your Role</h3>
                <p>
                  Join as a contributor and earn, or create bounties and find
                  talented builders.
                </p>
              </div>

              <div className="how-it-works-connection-line" />
            </div>

            <div
              ref={card3Ref}
              className="how-it-works-card how-it-works-card-3 opacity-0 translate-y-10"
            >
              <div className="how-it-works-number">03</div>

              <div className="how-it-works-visual how-it-works-earn-visual">
                <div className="energy-ring energy-ring-one" />
                <div className="energy-ring energy-ring-two" />

                <div className="how-it-works-earning-box">
                  <div className="earning-icon">
                    <FiZap />
                  </div>

                  <div className="earning-text">
                    <span>Reward</span>
                    <strong>+250 USDC</strong>
                  </div>

                  <FiCheck className="earning-check" />
                </div>

                <FiZap className="earning-zap zap-one" />
                <FiZap className="earning-zap zap-two" />

                <span className="earning-mini-particle mini-one" />
                <span className="earning-mini-particle mini-two" />
                <span className="earning-mini-particle mini-three" />
              </div>

              <div className="how-it-works-content">
                <h3>Complete & Earn</h3>
                <p>
                  Complete bounties, get verified and receive your rewards
                  directly.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-10 md:mt-12 flex justify-center">
            <div className="how-it-works-bottom">
              <FiShield />
              <span>Secure</span>
              <FiGlobe />
              <span>Global</span>
              <FiZap />
              <span>Fast</span>
              <FiUsers />
              <span>Community Powered</span>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        .how-it-works-section {
          isolation: isolate;
        }

        .how-it-works-glow {
          animation: howItWorksGlow 8s ease-in-out infinite;
        }

        .how-it-works-glow-delay {
          animation: howItWorksGlow 9s ease-in-out infinite reverse;
        }

        .how-it-works-particle {
          position: absolute;
          width: 3px;
          height: 3px;
          border-radius: 50%;
          background: rgba(255,255,255,.35);
          pointer-events: none;
        }

        .particle-one {
          top: 18%;
          left: 12%;
          animation: howItWorksParticle 5s ease-in-out infinite;
        }

        .particle-two {
          top: 34%;
          right: 15%;
          animation: howItWorksParticle 7s ease-in-out infinite .5s;
        }

        .particle-three {
          bottom: 24%;
          left: 8%;
          animation: howItWorksParticle 6s ease-in-out infinite 1s;
        }

        .particle-four {
          bottom: 15%;
          right: 10%;
          animation: howItWorksParticle 8s ease-in-out infinite 1.5s;
        }

        .particle-five {
          top: 12%;
          left: 50%;
          animation: howItWorksParticle 5s ease-in-out infinite 2s;
        }

        .how-it-works-badge-icon {
          animation: howItWorksIconPulse 2s ease-in-out infinite;
        }

        .how-it-works-card {
          position: relative;
          min-height: 350px;
          padding: 22px 20px;
          border: 1px solid rgba(255,255,255,.07);
          border-radius: 22px;
          background: linear-gradient(145deg,rgba(255,255,255,.045),rgba(255,255,255,.015));
          backdrop-filter: blur(18px);
          overflow: hidden;
          transition: border-color .4s ease,transform .4s ease,box-shadow .4s ease;
        }

        .how-it-works-card:hover {
          transform: translateY(-5px);
          border-color: rgba(255,255,255,.14);
          box-shadow: 0 20px 50px rgba(0,0,0,.25);
        }

        .how-it-works-number {
          position: absolute;
          top: 16px;
          right: 18px;
          font-size: 10px;
          letter-spacing: .18em;
          color: rgba(255,255,255,.25);
          font-weight: 700;
        }

        .how-it-works-visual {
          position: relative;
          height: 150px;
          margin: 8px auto 18px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .how-it-works-content {
          position: relative;
          z-index: 5;
          text-align: center;
        }

        .how-it-works-content h3 {
          margin: 0;
          font-size: 17px;
          font-weight: 700;
          color: white;
        }

        .how-it-works-content p {
          margin: 8px auto 0;
          max-width: 260px;
          font-size: 12px;
          line-height: 1.7;
          color: #737373;
        }

        .how-it-works-wallet {
          position: relative;
          z-index: 4;
          width: 105px;
          height: 68px;
          border: 1px solid rgba(255,255,255,.14);
          border-radius: 12px;
          background: linear-gradient(145deg,#191919,#0c0c0c);
          box-shadow: 0 15px 35px rgba(0,0,0,.45);
          animation: howItWorksWalletFloat 4s ease-in-out infinite;
        }

        .how-it-works-wallet-top {
          display: flex;
          gap: 4px;
          padding: 7px 8px;
          border-bottom: 1px solid rgba(255,255,255,.06);
        }

        .how-it-works-wallet-top span {
          width: 4px;
          height: 4px;
          border-radius: 50%;
          background: rgba(255,255,255,.25);
        }

        .how-it-works-wallet-body {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 10px;
        }

        .how-it-works-wallet-icon {
          width: 25px;
          height: 25px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 7px;
          color: #ff1ac6;
          background: rgba(255,26,198,.1);
          font-size: 11px;
        }

        .how-it-works-wallet-line {
          width: 30px;
          height: 4px;
          border-radius: 4px;
          background: rgba(255,255,255,.1);
        }

        .how-it-works-wallet-line.short {
          width: 18px;
        }

        .how-it-works-orbit {
          position: absolute;
          width: 125px;
          height: 55px;
          border: 1px solid rgba(255,26,198,.2);
          border-radius: 50%;
          transform: rotate(-20deg);
        }

        .orbit-one {
          animation: howItWorksOrbit 6s linear infinite;
        }

        .orbit-two {
          width: 145px;
          height: 65px;
          border-color: rgba(139,92,246,.18);
          transform: rotate(30deg);
          animation: howItWorksOrbitReverse 7s linear infinite;
        }

        .how-it-works-orbit-particle {
          position: absolute;
          width: 5px;
          height: 5px;
          border-radius: 50%;
          background: #ff1ac6;
          box-shadow: 0 0 12px #ff1ac6;
        }

        .orbit-particle-one {
          animation: howItWorksOrbitParticle 4s linear infinite;
        }

        .orbit-particle-two {
          background: #8b5cf6;
          box-shadow: 0 0 12px #8b5cf6;
          animation: howItWorksOrbitParticleReverse 5s linear infinite;
        }

        .how-it-works-coin {
          position: absolute;
          z-index: 5;
          right: 18%;
          top: 18%;
          font-size: 18px;
          color: #ff1ac6;
          text-shadow: 0 0 15px rgba(255,26,198,.7);
          animation: howItWorksCoinFloat 3s ease-in-out infinite;
        }

        .how-it-works-floating-lock {
          position: absolute;
          left: 16%;
          bottom: 17%;
          font-size: 13px;
          color: #8b5cf6;
          animation: howItWorksLockFloat 3.5s ease-in-out infinite;
        }

        .how-it-works-dashboard {
          position: relative;
          z-index: 4;
          width: 145px;
          height: 88px;
          border: 1px solid rgba(255,255,255,.12);
          border-radius: 10px;
          background: #101010;
          box-shadow: 0 15px 35px rgba(0,0,0,.45);
          overflow: hidden;
          animation: howItWorksDashboardFloat 4s ease-in-out infinite;
        }

        .how-it-works-browser-top {
          display: flex;
          gap: 4px;
          padding: 6px;
          border-bottom: 1px solid rgba(255,255,255,.06);
        }

        .how-it-works-browser-top span {
          width: 4px;
          height: 4px;
          border-radius: 50%;
          background: rgba(255,255,255,.2);
        }

        .how-it-works-dashboard-content {
          display: flex;
          height: calc(100% - 17px);
        }

        .how-it-works-dashboard-sidebar {
          width: 25px;
          border-right: 1px solid rgba(255,255,255,.05);
          background: rgba(255,255,255,.02);
        }

        .how-it-works-dashboard-main {
          flex: 1;
          padding: 9px;
        }

        .dashboard-line {
          display: block;
          width: 60%;
          height: 4px;
          margin-bottom: 5px;
          border-radius: 4px;
          background: rgba(255,255,255,.12);
        }

        .dashboard-line.large {
          width: 75%;
        }

        .dashboard-line.short {
          width: 40%;
        }

        .dashboard-boxes {
          display: flex;
          gap: 5px;
          margin-top: 9px;
        }

        .dashboard-boxes span {
          flex: 1;
          height: 22px;
          border-radius: 4px;
          background: linear-gradient(135deg,rgba(255,26,198,.18),rgba(139,92,246,.12));
        }

        .how-it-works-role {
          position: absolute;
          z-index: 6;
          width: 29px;
          height: 29px;
          display: flex;
          align-items: center;
          justify-content: center;
          border: 1px solid rgba(255,255,255,.12);
          border-radius: 8px;
          background: #141414;
          font-size: 12px;
        }

        .role-user {
          left: 8%;
          top: 25%;
          color: #8b5cf6;
          animation: howItWorksRoleFloat 3s ease-in-out infinite;
        }

        .role-builder {
          right: 8%;
          bottom: 18%;
          color: #ff1ac6;
          animation: howItWorksRoleFloat 3s ease-in-out infinite .8s;
        }

        .how-it-works-role-scan {
          position: absolute;
          width: 155px;
          height: 1px;
          background: linear-gradient(90deg,transparent,#ff1ac6,transparent);
          animation: howItWorksScan 3s ease-in-out infinite;
        }

        .how-it-works-beam {
          position: absolute;
          width: 65px;
          height: 1px;
          background: linear-gradient(90deg,transparent,#8b5cf6,transparent);
          transform-origin: left;
        }

        .beam-one {
          left: 14%;
          top: 28%;
          transform: rotate(-20deg);
          animation: howItWorksBeam 3s ease-in-out infinite;
        }

        .beam-two {
          right: 12%;
          top: 70%;
          transform: rotate(20deg);
          animation: howItWorksBeam 3s ease-in-out infinite .7s;
        }

        .how-it-works-earning-box {
          position: relative;
          z-index: 5;
          width: 155px;
          min-height: 65px;
          padding: 10px;
          display: flex;
          align-items: center;
          gap: 9px;
          border: 1px solid rgba(255,26,198,.18);
          border-radius: 12px;
          background: linear-gradient(145deg,rgba(255,26,198,.08),rgba(139,92,246,.06));
          box-shadow: 0 15px 35px rgba(0,0,0,.4);
          animation: howItWorksEarningFloat 4s ease-in-out infinite;
        }

        .earning-icon {
          width: 32px;
          height: 32px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          border-radius: 9px;
          color: #ff1ac6;
          background: rgba(255,26,198,.12);
          font-size: 13px;
        }

        .earning-text {
          display: flex;
          flex-direction: column;
          gap: 2px;
        }

        .earning-text span {
          font-size: 9px;
          color: #777;
          text-transform: uppercase;
          letter-spacing: .12em;
        }

        .earning-text strong {
          font-size: 13px;
          color: white;
        }

        .earning-check {
          margin-left: auto;
          color: #4ade80;
          font-size: 14px;
        }

        .energy-ring {
          position: absolute;
          border: 1px solid rgba(255,26,198,.16);
          border-radius: 50%;
        }

        .energy-ring-one {
          width: 175px;
          height: 85px;
          animation: howItWorksEnergy 4s ease-in-out infinite;
        }

        .energy-ring-two {
          width: 145px;
          height: 65px;
          border-color: rgba(139,92,246,.18);
          animation: howItWorksEnergy 4s ease-in-out infinite 1s;
        }

        .earning-zap {
          position: absolute;
          color: #ff1ac6;
          font-size: 13px;
        }

        .zap-one {
          left: 13%;
          top: 20%;
          animation: howItWorksZap 2.5s ease-in-out infinite;
        }

        .zap-two {
          right: 13%;
          bottom: 17%;
          color: #8b5cf6;
          animation: howItWorksZap 2.5s ease-in-out infinite .8s;
        }

        .earning-mini-particle {
          position: absolute;
          width: 4px;
          height: 4px;
          border-radius: 50%;
          background: #ff1ac6;
          box-shadow: 0 0 10px #ff1ac6;
        }

        .mini-one {
          left: 20%;
          bottom: 20%;
          animation: howItWorksMiniParticle 3s ease-in-out infinite;
        }

        .mini-two {
          right: 20%;
          top: 15%;
          animation: howItWorksMiniParticle 3.5s ease-in-out infinite .6s;
        }

        .mini-three {
          right: 28%;
          bottom: 8%;
          background: #8b5cf6;
          box-shadow: 0 0 10px #8b5cf6;
          animation: howItWorksMiniParticle 4s ease-in-out infinite 1s;
        }

        .how-it-works-connection-line {
          position: absolute;
          right: -25px;
          top: 50%;
          width: 25px;
          height: 1px;
          background: linear-gradient(90deg,rgba(255,26,198,.3),transparent);
        }

        .how-it-works-bottom {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          flex-wrap: wrap;
          padding: 9px 14px;
          border: 1px solid rgba(255,255,255,.06);
          border-radius: 999px;
          background: rgba(255,255,255,.025);
          color: #666;
          font-size: 10px;
        }

        .how-it-works-bottom svg {
          color: #ff1ac6;
          font-size: 12px;
        }

        .how-it-works-bottom span {
          margin-right: 5px;
        }

        .how-it-works-card-1.how-it-works-visible {
          animation: howItWorksCardOne 1s cubic-bezier(.22,1,.36,1) forwards;
        }

        .how-it-works-card-2.how-it-works-visible {
          animation: howItWorksCardTwo 1s cubic-bezier(.22,1,.36,1) .15s forwards;
        }

        .how-it-works-card-3.how-it-works-visible {
          animation: howItWorksCardThree 1s cubic-bezier(.22,1,.36,1) .3s forwards;
        }

        @keyframes howItWorksCardOne {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes howItWorksCardTwo {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes howItWorksCardThree {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes howItWorksGlow {
          0%,100% { transform: translate(0,0) scale(1); }
          50% { transform: translate(20px,-15px) scale(1.08); }
        }

        @keyframes howItWorksParticle {
          0%,100% { opacity: .2; transform: translateY(0); }
          50% { opacity: .8; transform: translateY(-12px); }
        }

        @keyframes howItWorksIconPulse {
          0%,100% { transform: scale(1); }
          50% { transform: scale(1.2); }
        }

        @keyframes howItWorksWalletFloat {
          0%,100% { transform: translateY(0); }
          50% { transform: translateY(-6px); }
        }

        @keyframes howItWorksOrbit {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        @keyframes howItWorksOrbitReverse {
          from { transform: rotate(360deg); }
          to { transform: rotate(0deg); }
        }

        @keyframes howItWorksOrbitParticle {
          0% { transform: rotate(0deg) translateX(62px) rotate(0deg); }
          100% { transform: rotate(360deg) translateX(62px) rotate(-360deg); }
        }

        @keyframes howItWorksOrbitParticleReverse {
          0% { transform: rotate(360deg) translateX(72px) rotate(-360deg); }
          100% { transform: rotate(0deg) translateX(72px) rotate(0deg); }
        }

        @keyframes howItWorksCoinFloat {
          0%,100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-9px) rotate(15deg); }
        }

        @keyframes howItWorksLockFloat {
          0%,100% { transform: translateY(0); }
          50% { transform: translateY(-7px); }
        }

        @keyframes howItWorksDashboardFloat {
          0%,100% { transform: translateY(0); }
          50% { transform: translateY(-5px); }
        }

        @keyframes howItWorksRoleFloat {
          0%,100% { transform: translateY(0); }
          50% { transform: translateY(-6px); }
        }

        @keyframes howItWorksScan {
          0%,100% { opacity: 0; transform: translateY(-30px); }
          50% { opacity: 1; transform: translateY(30px); }
        }

        @keyframes howItWorksBeam {
          0%,100% { opacity: .2; transform: scaleX(.6) rotate(20deg); }
          50% { opacity: 1; transform: scaleX(1) rotate(20deg); }
        }

        @keyframes howItWorksEarningFloat {
          0%,100% { transform: translateY(0); }
          50% { transform: translateY(-6px); }
        }

        @keyframes howItWorksEnergy {
          0%,100% { transform: scale(.9) rotate(0deg); opacity: .3; }
          50% { transform: scale(1.05) rotate(8deg); opacity: .8; }
        }

        @keyframes howItWorksZap {
          0%,100% { opacity: .25; transform: scale(.8); }
          50% { opacity: 1; transform: scale(1.15); }
        }

        @keyframes howItWorksMiniParticle {
          0%,100% { opacity: .2; transform: translate(0,0); }
          50% { opacity: 1; transform: translate(8px,-10px); }
        }

        @media (max-width: 768px) {
          .how-it-works-card {
            min-height: 320px;
          }

          .how-it-works-visual {
            height: 135px;
          }

          .how-it-works-connection-line {
            display: none;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .how-it-works-section *,
          .how-it-works-section *::before,
          .how-it-works-section *::after {
            animation-duration: .01ms !important;
            animation-iteration-count: 1 !important;
          }
        }
      `}</style>
    </>
  );
};

export default HowItWorks;