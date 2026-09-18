
import {
  FiArrowUpRight,
  FiCheckCircle,
  FiCode,
  FiCreditCard,
  FiDollarSign,
  FiLock,
  FiShield,
  FiZap,
} from "react-icons/fi";

const features = [
  {
    icon: FiCode,
    title: "Built for Arc",
    description:
      "Fresh Bounty is being shaped around Arc as the infrastructure for a focused on-chain bounty experience.",
    accent: "#2775CA",
    soft: "rgba(39,117,202,0.07)",
    border: "rgba(39,117,202,0.16)",
  },
  {
    icon: FiDollarSign,
    title: "USDC Rewards",
    description:
      "Use USDC as the reward layer for bounty opportunities, giving creators and contributors a clear reward currency.",
    accent: "#2775CA",
    soft: "rgba(39,117,202,0.07)",
    border: "rgba(39,117,202,0.16)",
  },
  {
    icon: FiCreditCard,
    title: "Wallet Integration",
    description:
      "Connect your wallet to interact with bounty opportunities, rewards, and your Web3 activity.",
    accent: "#8B5CF6",
    soft: "rgba(139,92,246,0.07)",
    border: "rgba(139,92,246,0.16)",
  },
  {
    icon: FiShield,
    title: "On-chain Verification",
    description:
      "Bounty activity and blockchain transactions can be verified on-chain instead of relying entirely on centralized records.",
    accent: "#FF1AC6",
    soft: "rgba(255,26,198,0.06)",
    border: "rgba(255,26,198,0.15)",
  },
];

export default function BuiltForWeb3() {
  return (
    <section
      className="relative overflow-hidden bg-[#f6f5ef] px-5 py-20 text-[#111111] sm:px-8 lg:px-10"
      style={{
        backgroundColor: "#f6f5ef",
      }}
    >
      {/* =====================================================
          ARCHITECTURAL BACKGROUND
      ===================================================== */}

      <div
        className="pointer-events-none absolute inset-0 opacity-60"
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
            "linear-gradient(to bottom, black, transparent 88%)",
          WebkitMaskImage:
            "linear-gradient(to bottom, black, transparent 88%)",
        }}
      />

      {/* =====================================================
          BACKGROUND GLOWS
      ===================================================== */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div
          className="absolute left-[-180px] top-[10%] h-[350px] w-[350px] rounded-full blur-[120px]"
          style={{
            backgroundColor: "rgba(39,117,202,0.055)",
          }}
        />

        <div
          className="absolute bottom-[-100px] right-[-120px] h-[350px] w-[350px] rounded-full blur-[130px]"
          style={{
            backgroundColor: "rgba(255,26,198,0.045)",
          }}
        />

        <div
          className="absolute left-1/2 top-1/2 h-[300px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[120px]"
          style={{
            backgroundColor: "rgba(105,82,35,0.025)",
          }}
        />
      </div>

      {/* =====================================================
          MAIN CONTAINER
      ===================================================== */}

      <div className="relative z-10 mx-auto max-w-7xl">

        {/* =====================================================
            HEADER
        ===================================================== */}

        <div className="mx-auto max-w-2xl text-center">

          {/* BADGE */}

          <div
            className="mb-4 inline-flex items-center gap-2 rounded-full border px-3 py-1.5 shadow-[0_8px_25px_rgba(35,31,22,0.035)] backdrop-blur-xl"
            style={{
              borderColor: "rgba(39,117,202,0.15)",
              backgroundColor: "rgba(255,255,255,0.7)",
            }}
          >
            <FiZap
              size={12}
              className="text-[#2775CA]"
            />

            <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#77736b]">
              Arc Infrastructure
            </span>

            <span className="h-1 w-1 rounded-full bg-black/20" />

            <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-[#2775CA]">
              USDC
            </span>
          </div>

          {/* TITLE */}

          <h2 className="text-3xl font-bold tracking-[-0.04em] text-[#111111] sm:text-4xl lg:text-5xl">
            Built for{" "}
            <span
              style={{
                background:
                  "linear-gradient(100deg, #2775CA 0%, #2775CA 40%, #8B5CF6 70%, #FF1AC6 100%)",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                color: "transparent",
              }}
            >
              Web3 Work
            </span>
          </h2>

          {/* DESCRIPTION */}

          <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-[#77736b] sm:text-base">
            Fresh Bounty combines bounty discovery, wallet interaction,
            and on-chain reward flows into a practical marketplace
            designed around Arc and USDC.
          </p>
        </div>

        {/* =====================================================
            TECHNOLOGY CARDS
        ===================================================== */}

        <div className="mx-auto mt-12 max-w-5xl">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">

            {features.map((feature, index) => {
              const Icon = feature.icon;

              return (
                <div
                  key={feature.title}
                  className="group relative"
                >
                  <div
                    className="relative h-full overflow-hidden rounded-[22px] border p-5 shadow-[0_14px_40px_rgba(35,31,22,0.045)] backdrop-blur-xl transition-all duration-500 hover:-translate-y-1.5 hover:bg-white"
                    style={{
                      borderColor: "rgba(35,31,22,0.08)",
                      backgroundColor: "rgba(255,255,255,0.72)",
                    }}
                  >

                    {/* TOP ACCENT */}

                    <div
                      className="absolute left-0 right-0 top-0 h-px opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                      style={{
                        background: `linear-gradient(
                          to right,
                          transparent,
                          ${feature.accent},
                          transparent
                        )`,
                      }}
                    />

                    {/* SUBTLE CORNER GLOW */}

                    <div
                      className="pointer-events-none absolute -right-16 -top-16 h-32 w-32 rounded-full blur-[55px] opacity-50 transition-all duration-500 group-hover:opacity-90"
                      style={{
                        backgroundColor: feature.accent,
                      }}
                    />

                    {/* NUMBER */}

                    <div className="absolute right-4 top-4 text-[10px] font-semibold tracking-widest text-black/[0.14]">
                      0{index + 1}
                    </div>

                    {/* ICON */}

                    <div
                      className="relative mb-5 flex h-11 w-11 items-center justify-center rounded-xl border transition-all duration-500 group-hover:scale-110"
                      style={{
                        borderColor: feature.border,
                        backgroundColor: feature.soft,
                      }}
                    >
                      <Icon
                        size={19}
                        className="transition-transform duration-500"
                        style={{
                          color: feature.accent,
                        }}
                      />
                    </div>

                    {/* TITLE */}

                    <h3 className="relative text-base font-semibold text-[#171717]">
                      {feature.title}
                    </h3>

                    {/* DESCRIPTION */}

                    <p className="relative mt-2 text-xs leading-relaxed text-[#77736b]">
                      {feature.description}
                    </p>

                    {/* VERIFIED */}

                    <div className="relative mt-5 flex items-center gap-1.5">
                      <FiCheckCircle
                        size={11}
                        style={{
                          color: feature.accent,
                        }}
                      />

                      <span className="text-[9px] uppercase tracking-[0.12em] text-[#99958c]">
                        Arc / Web3 enabled
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* =====================================================
            TRANSPARENCY PANEL
        ===================================================== */}

        <div className="mx-auto mt-6 max-w-5xl">

          <div
            className="relative overflow-hidden rounded-[22px] border p-5 shadow-[0_15px_50px_rgba(35,31,22,0.05)] backdrop-blur-xl sm:p-6"
            style={{
              borderColor: "rgba(35,31,22,0.08)",
              background:
                "linear-gradient(to right, rgba(255,255,255,0.72), rgba(255,255,255,0.88), rgba(255,255,255,0.72))",
            }}
          >

            {/* GOLD ARCHITECTURAL LINE */}

            <div
              className="absolute left-1/2 top-0 h-px w-2/3 -translate-x-1/2"
              style={{
                background:
                  "linear-gradient(to right, transparent, rgba(105,82,35,0.35), transparent)",
              }}
            />

            {/* GLOW */}

            <div
              className="pointer-events-none absolute left-1/2 top-0 h-[120px] w-[300px] -translate-x-1/2 rounded-full blur-[70px]"
              style={{
                backgroundColor: "rgba(39,117,202,0.045)",
              }}
            />

            <div className="relative flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">

              {/* LEFT */}

              <div className="flex items-start gap-4">

                <div
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border"
                  style={{
                    borderColor: "rgba(39,117,202,0.15)",
                    backgroundColor: "rgba(39,117,202,0.055)",
                  }}
                >
                  <FiShield
                    size={17}
                    className="text-[#2775CA]"
                  />
                </div>

                <div>
                  <p className="text-sm font-semibold text-[#171717]">
                    Transparent by design
                  </p>

                  <p className="mt-1 max-w-xl text-xs leading-relaxed text-[#77736b]">
                    Bounty activity and blockchain transactions can be
                    independently verified instead of relying entirely
                    on a centralized payment record.
                  </p>
                </div>
              </div>

              {/* RIGHT STATUS */}

              <div
                className="flex shrink-0 items-center gap-2 self-start rounded-full border px-3 py-2 sm:self-auto"
                style={{
                  borderColor: "rgba(39,117,202,0.13)",
                  backgroundColor: "rgba(39,117,202,0.045)",
                }}
              >
                <span
                  className="h-1.5 w-1.5 rounded-full"
                  style={{
                    backgroundColor: "#2775CA",
                    boxShadow:
                      "0 0 10px rgba(39,117,202,0.65)",
                  }}
                />

                <span className="text-[9px] font-semibold uppercase tracking-[0.14em] text-[#77736b]">
                  Arc / USDC
                </span>

                <FiArrowUpRight
                  size={11}
                  className="text-[#2775CA]"
                />
              </div>
            </div>
          </div>
        </div>

        {/* =====================================================
            BOTTOM SYSTEM LABEL
        ===================================================== */}

        <div className="mt-7 flex flex-wrap items-center justify-center gap-x-5 gap-y-2">
          <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-[#2775CA]">
            ARC
          </span>

          <span className="h-1 w-1 rounded-full bg-black/20" />

          <span className="text-[9px] font-semibold uppercase tracking-[0.18em] text-[#8b8880]">
            USDC
          </span>

          <span className="h-1 w-1 rounded-full bg-black/20" />

          <span className="text-[9px] font-semibold uppercase tracking-[0.18em] text-[#8b8880]">
            BOUNTY INFRASTRUCTURE
          </span>

          <span className="h-1 w-1 rounded-full bg-black/20" />

          <span className="text-[9px] font-semibold uppercase tracking-[0.18em] text-[#8b8880]">
            ON-CHAIN
          </span>
        </div>
      </div>

      {/* =====================================================
          REDUCED MOTION
      ===================================================== */}

      <style>{`
        @media (prefers-reduced-motion: reduce) {
          .group {
            transition: none !important;
          }
        }
      `}</style>
    </section>
  );
}

