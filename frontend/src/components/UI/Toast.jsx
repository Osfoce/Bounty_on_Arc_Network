import toast from "react-hot-toast";

/*
|--------------------------------------------------------------------------
| SHARED TOAST STYLES
|--------------------------------------------------------------------------
| Warm cream cards with subtle borders, matching the Happy Bounty
| white/gold design system. Each variant keeps the same base chrome
| and swaps the left border + icon colour.
|--------------------------------------------------------------------------
*/

const BASE_STYLE = {
  background: "#f9f8f3",
  color: "#171714",
  border: "1px solid #ddd8ca",
  borderRadius: "14px",
  padding: "12px 16px",
  fontSize: "14px",
  fontWeight: "500",
  boxShadow: "0 18px 45px rgba(34, 31, 24, 0.10)",
  maxWidth: "380px",
};

const SUCCESS_STYLE = {
  ...BASE_STYLE,
  borderLeft: "3px solid #d4af37",
};

const ERROR_STYLE = {
  ...BASE_STYLE,
  borderLeft: "3px solid #c62828",
};

const INFO_STYLE = {
  ...BASE_STYLE,
  borderLeft: "3px solid #b28b20",
};

const LOADING_STYLE = {
  ...BASE_STYLE,
  borderLeft: "3px solid #d4af37",
};

const POSITION = "top-right";

/*
|--------------------------------------------------------------------------
| GOLD SPINNER FOR LOADING
|--------------------------------------------------------------------------
| react-hot-toast's default loading spinner is neutral. We replace it
| with a small gold ring that matches the theme.
|--------------------------------------------------------------------------
*/

const GoldSpinner = () => (
  <span
    style={{
      display: "inline-block",
      width: "14px",
      height: "14px",
      border: "2px solid rgba(212, 175, 55, 0.25)",
      borderTopColor: "#d4af37",
      borderRadius: "50%",
      animation: "happyBountySpin 0.7s linear infinite",
    }}
  />
);

// Inject the keyframes once
if (
  typeof document !== "undefined" &&
  !document.getElementById("hb-toast-spin")
) {
  const style = document.createElement("style");
  style.id = "hb-toast-spin";
  style.textContent = `
    @keyframes happyBountySpin {
      to { transform: rotate(360deg); }
    }
  `;
  document.head.appendChild(style);
}

/*
|--------------------------------------------------------------------------
| REUSABLE TOAST FUNCTIONS
|--------------------------------------------------------------------------
*/

export const showToast = {
  success: (message, duration = 3000, options = {}) => {
    return toast.success(message, {
      duration,
      position: POSITION,
      style: SUCCESS_STYLE,
      iconTheme: {
        primary: "#d4af37",
        secondary: "#f9f8f3",
      },
      ...options,
    });
  },

  error: (message, duration = 4000, options = {}) => {
    return toast.error(message, {
      duration,
      position: POSITION,
      style: ERROR_STYLE,
      iconTheme: {
        primary: "#c62828",
        secondary: "#f9f8f3",
      },
      ...options,
    });
  },

  loading: (message, options = {}) => {
    return toast.loading(message, {
      position: POSITION,
      style: LOADING_STYLE,
      icon: <GoldSpinner />,
      ...options,
    });
  },

  info: (message, duration = 3000, options = {}) => {
    return toast(message, {
      duration,
      position: POSITION,
      style: INFO_STYLE,
      icon: "ℹ",
      iconTheme: {
        primary: "#b28b20",
        secondary: "#f9f8f3",
      },
      ...options,
    });
  },

  /**
   * Promise-based toast — perfect for blockchain transactions.
   *
   * @example
   * showToast.promise(
   *   writeContractAsync(txConfig),
   *   {
   *     loading: "Confirming transaction...",
   *     success: "Bounty created!",
   *     error: (err) => err.shortMessage || "Transaction failed",
   *   },
   * );
   */
  promise: (promise, messages, options = {}) => {
    return toast.promise(
      promise,
      {
        loading: messages.loading || "Processing...",
        success: messages.success || "Done!",
        error: messages.error || "Something went wrong",
      },
      {
        position: POSITION,
        style: BASE_STYLE,
        success: {
          duration: 3000,
          iconTheme: { primary: "#d4af37", secondary: "#f9f8f3" },
          style: SUCCESS_STYLE,
        },
        error: {
          duration: 4000,
          iconTheme: { primary: "#c62828", secondary: "#f9f8f3" },
          style: ERROR_STYLE,
        },
        loading: {
          icon: <GoldSpinner />,
          style: LOADING_STYLE,
        },
        ...options,
      },
    );
  },
};
