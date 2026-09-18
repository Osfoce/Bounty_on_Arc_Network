import { ConnectButton } from "@rainbow-me/rainbowkit";
import "@rainbow-me/rainbowkit/styles.css";

function ConnectConfig() {
  return (
    <ConnectButton.Custom>
      {({
        account,
        chain,
        openAccountModal,
        openChainModal,
        openConnectModal,
        authenticationStatus,
        mounted,
      }) => {
        const ready =
          mounted && authenticationStatus !== "loading";

        const connected =
          ready &&
          account &&
          chain &&
          (!authenticationStatus ||
            authenticationStatus === "authenticated");

        return (
          <div
            {...(!ready && {
              "aria-hidden": true,
              style: {
                opacity: 0,
                pointerEvents: "none",
                userSelect: "none",
              },
            })}
            className="w-full"
          >
            {!connected ? (
              <button
                type="button"
                onClick={openConnectModal}
                className="group relative w-full overflow-hidden rounded-xl border border-[#cdbd91] bg-[#d4af37] px-5 py-3.5 text-sm font-bold text-[#171714] shadow-[0_8px_25px_rgba(212,175,55,0.16)] transition-all duration-300 hover:bg-[#c49b2c] hover:shadow-[0_10px_30px_rgba(212,175,55,0.22)] active:scale-[0.98]"
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  <span className="flex h-6 w-6 items-center justify-center rounded-lg bg-[#171714] text-[#d4af37] text-[11px]">
                    ↗
                  </span>
                  Connect Wallet
                </span>

                <span className="absolute inset-0 -translate-x-full bg-white/20 transition-transform duration-500 group-hover:translate-x-full" />
              </button>
            ) : chain.unsupported ? (
              <button
                type="button"
                onClick={openChainModal}
                className="w-full rounded-xl border border-red-200 bg-red-50 px-5 py-3.5 text-sm font-bold text-red-700 transition-all hover:bg-red-100 active:scale-[0.98]"
              >
                <span className="flex items-center justify-center gap-2">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-red-100">
                    !
                  </span>
                  Wrong network
                </span>
              </button>
            ) : (
              <div className="flex w-full gap-2 rounded-2xl border border-[#dedbd1] bg-white p-1.5 shadow-[0_10px_35px_rgba(34,31,24,0.07)]">
                <button
                  type="button"
                  onClick={openChainModal}
                  className="group flex min-w-0 flex-1 items-center gap-2 rounded-xl border border-transparent bg-[#f7f6f0] px-3 py-2.5 text-left transition-all duration-200 hover:border-[#d8c895] hover:bg-[#fbfaf6]"
                >
                  {chain.hasIcon && (
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-[#e2ddd0] bg-white">
                      <img
                        alt={chain.name ?? "Chain icon"}
                        src={chain.iconUrl}
                        className="h-5 w-5 rounded-full"
                      />
                    </span>
                  )}

                  <span className="min-w-0">
                    <span className="block text-[9px] font-semibold uppercase tracking-[0.14em] text-[#9a9488]">
                      Network
                    </span>

                    <span className="block truncate text-xs font-bold text-[#292720]">
                      {chain.name}
                    </span>
                  </span>

                  <span className="ml-auto text-[#a58a3c] opacity-0 transition-opacity group-hover:opacity-100">
                    ↗
                  </span>
                </button>

                <button
                  type="button"
                  onClick={openAccountModal}
                  className="group flex min-w-0 flex-1 items-center gap-2 rounded-xl border border-transparent px-3 py-2.5 text-left transition-all duration-200 hover:border-[#d8c895] hover:bg-[#fbfaf6]"
                >
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#171714] text-[#d4af37] text-xs font-bold">
                    {account.displayName?.charAt(0)?.toUpperCase() || "W"}
                  </span>

                  <span className="min-w-0">
                    <span className="block text-[9px] font-semibold uppercase tracking-[0.14em] text-[#9a9488]">
                      Wallet
                    </span>

                    <span className="block truncate text-xs font-bold text-[#292720]">
                      {account.displayName}
                    </span>

                    {account.displayBalance && (
                      <span className="block truncate text-[10px] text-[#8b8579]">
                        {account.displayBalance}
                      </span>
                    )}
                  </span>

                  <span className="ml-auto text-[#a58a3c] opacity-0 transition-opacity group-hover:opacity-100">
                    ↗
                  </span>
                </button>
              </div>
            )}
          </div>
        );
      }}
    </ConnectButton.Custom>
  );
}

export default ConnectConfig;