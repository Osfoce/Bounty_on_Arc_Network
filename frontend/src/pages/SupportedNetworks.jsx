
import React from "react";
import eth2 from "../assets/images/eth2.png";
import ctc from "../assets/images/ctc.jpg";
import injecoin from "../assets/images/injecoin.png";


function SupportedNetworks({ injecoin, eth2, ctc }) {
  return (
    <section className="relative z-10 px-6 md:px-10 lg:px-16 my-14">
      <style>
        {`
          .coin-flip {
            transform-style: preserve-3d;
            backface-visibility: visible;
            transition: transform 0.7s cubic-bezier(0.22, 1, 0.36, 1);
          }

          .group:hover .coin-flip {
            transform: rotateY(360deg);
          }

          @media (prefers-reduced-motion: reduce) {
            .coin-flip {
              transition: none;
            }

            .group:hover .coin-flip {
              transform: none;
            }
          }
        `}
      </style>

      <div className="relative overflow-hidden rounded-3xl border border-white/[0.08] bg-gradient-to-br from-[#151515] via-[#101010] to-[#090909] p-6 md:p-8">

        {/* Background Glows */}
        <div className="absolute -top-32 left-1/4 h-56 w-56 rounded-full bg-[#FF1AC6]/10 blur-[100px] pointer-events-none" />

        <div className="absolute -bottom-32 right-1/4 h-56 w-56 rounded-full bg-purple-600/10 blur-[100px] pointer-events-none" />

        {/* Grid Background */}
        <div
          className="absolute inset-0 opacity-[0.02] pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />

        <div className="relative z-10">

          {/* HEADER */}
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

            {/* INJECTIVE */}
            <div className="group rounded-2xl border border-white/[0.07] bg-white/[0.025] p-4 text-center transition-all duration-300 hover:-translate-y-1 hover:border-[#FF1AC6]/40 hover:bg-white/[0.05]">

              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl border border-white/[0.08] bg-black/40">
                <img
                  src={injecoin}
                  alt="Injective"
                  className="coin-flip w-8 h-8 object-contain"
                />
              </div>

              <p className="mt-3 text-sm font-semibold text-white">
                Injective
              </p>

              <span className="mt-0.5 block text-[9px] uppercase tracking-wider text-gray-600">
                Network
              </span>
            </div>

            {/* ETHEREUM */}
            <div className="group rounded-2xl border border-white/[0.07] bg-white/[0.025] p-4 text-center transition-all duration-300 hover:-translate-y-1 hover:border-purple-400/40 hover:bg-white/[0.05]">

              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl border border-white/[0.08] bg-black/40">
                <img
                  src={eth2}
                  alt="Ethereum"
                  className="coin-flip w-8 h-8 object-contain"
                />
              </div>

              <p className="mt-3 text-sm font-semibold text-white">
                Ethereum
              </p>

              <span className="mt-0.5 block text-[9px] uppercase tracking-wider text-gray-600">
                Network
              </span>
            </div>

            {/* CREDITCOIN */}
            <div className="group rounded-2xl border border-[#FF1AC6]/20 bg-[#FF1AC6]/[0.03] p-4 text-center transition-all duration-300 hover:-translate-y-1 hover:border-[#FF1AC6]/50 hover:bg-[#FF1AC6]/[0.06]">

              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl border border-[#FF1AC6]/20 bg-black/40">
                <img
                  src={ctc}
                  alt="Creditcoin"
                  className="coin-flip w-8 h-8 object-contain"
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

          {/* SUPPORTED ASSETS */}
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
                  className="coin-flip w-7 h-7 object-contain"
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
                  className="coin-flip w-7 h-7 object-contain"
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
  );
}

export default SupportedNetworks;

