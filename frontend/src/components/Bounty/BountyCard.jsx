import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { useAccount } from "wagmi";
import {
  FiArrowUpRight,
  FiCalendar,
  FiCheckCircle,
  FiClock,
  FiLayers,
} from "react-icons/fi";

const BountyCard = ({ bounty }) => {
  const { address, isConnected } = useAccount();
  const [isEnrolling, setIsEnrolling] = useState(false);

  const deadline = new Date(bounty.deadline).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
  });

  const statusConfig = {
    active: {
      color: "text-emerald-700",
      bg: "bg-emerald-50",
      border: "border-emerald-200",
      dot: "bg-emerald-500",
      label: "Active",
    },

    upcoming: {
      color: "text-amber-700",
      bg: "bg-amber-50",
      border: "border-amber-200",
      dot: "bg-amber-500",
      label: "Upcoming",
    },

    completed: {
      color: "text-slate-600",
      bg: "bg-slate-100",
      border: "border-slate-200",
      dot: "bg-slate-400",
      label: "Completed",
    },
  }[bounty.status] || {
    color: "text-slate-500",
    bg: "bg-slate-100",
    border: "border-slate-200",
    dot: "bg-slate-400",
    label: "Unknown",
  };

  const tags = bounty.tags || [];
  const rewardDisplay = `${bounty.reward} ${bounty.token || "INJ"}`;

  const description =
    bounty.description?.length > 100
      ? bounty.description.substring(0, 100) + "..."
      : bounty.description || "No description provided";

  const getUserWallet = () => {
    if (!isConnected || !address) {
      toast.error("Please connect your wallet first");
      return null;
    }

    return address;
  };

  const API_URL = "https://fresh-bounty.onrender.com";

  const handleEnroll = async (e) => {
    e.preventDefault();

    const userWallet = getUserWallet();
    if (!userWallet) return;

    setIsEnrolling(true);

    const loadingToast = toast.loading("Enrolling in bounty...");

    try {
      const response = await axios.post(`${API_URL}/api/enroll`, {
        bountyId: bounty._id,
        user: userWallet,
      });

      if (response.status === 200 || response.status === 201) {
        toast.success("Successfully enrolled in bounty!", {
          id: loadingToast,
          duration: 3000,
        });
      }
    } catch (error) {
      console.error("Enrollment error:", error);

      if (error.response?.status === 400) {
        toast.error("You are already enrolled in this bounty", {
          id: loadingToast,
          duration: 3000,
        });
      } else {
        toast.error("Failed to enroll. Please try again.", {
          id: loadingToast,
          duration: 3000,
        });
      }
    } finally {
      setIsEnrolling(false);
    }
  };

  return (
    <div
      className="
        group
        relative
        flex
        h-full
        w-full
        min-w-0
        flex-col
        overflow-hidden
        rounded-2xl
        border
        border-slate-200
        bg-white
        shadow-[0_8px_30px_rgba(15,23,42,0.06)]
        transition-all
        duration-300
        ease-out
        hover:-translate-y-1
        hover:border-slate-300
        hover:shadow-[0_18px_45px_rgba(15,23,42,0.10)]
      "
    >
      {/* SUBTLE TOP ACCENT */}
      <div
        className="
          absolute
          left-0
          right-0
          top-0
          h-[2px]
          bg-gradient-to-r
          from-transparent
          via-[#D4AF37]
          to-transparent
          opacity-50
          transition-opacity
          duration-300
          group-hover:opacity-100
        "
      />

      {/* VERY SUBTLE GOLD AMBIENT LIGHT */}
      <div
        className="
          pointer-events-none
          absolute
          -right-20
          -top-20
          h-40
          w-40
          rounded-full
          bg-[#D4AF37]/[0.035]
          blur-3xl
          opacity-0
          transition-opacity
          duration-500
          group-hover:opacity-100
        "
      />

      <div className="relative z-10 flex h-full min-w-0 flex-col p-5 sm:p-6">
        {/* HEADER */}
        <div className="mb-5 flex min-w-0 items-start justify-between gap-4">
          {/* CATEGORY */}
          <div className="flex min-w-0 items-center gap-2">
            <div
              className="
                flex
                h-8
                w-8
                shrink-0
                items-center
                justify-center
                rounded-lg
                border
                border-slate-200
                bg-slate-50
                text-slate-500
              "
            >
              <FiLayers size={14} />
            </div>

            <span
              className="
                min-w-0
                max-w-[140px]
                overflow-hidden
                text-ellipsis
                whitespace-nowrap
                text-[11px]
                font-semibold
                uppercase
                tracking-[0.1em]
                text-slate-500
              "
              title={bounty.category || "Uncategorized"}
            >
              {bounty.category || "Uncategorized"}
            </span>
          </div>

          {/* STATUS */}
          <div
            className={`
              flex
              shrink-0
              items-center
              gap-1.5
              rounded-full
              border
              px-2.5
              py-1
              ${statusConfig.bg}
              ${statusConfig.border}
            `}
          >
            <span
              className={`
                h-1.5
                w-1.5
                shrink-0
                rounded-full
                ${statusConfig.dot}
                ${
                  bounty.status === "active"
                    ? "animate-pulse shadow-[0_0_6px_currentColor]"
                    : ""
                }
              `}
            />

            <span
              className={`
                text-[10px]
                font-semibold
                uppercase
                tracking-[0.08em]
                ${statusConfig.color}
              `}
            >
              {statusConfig.label}
            </span>
          </div>
        </div>

        {/* TITLE */}
        <h3
          className="
            mb-3
            min-w-0
            overflow-hidden
            text-ellipsis
            text-[19px]
            font-bold
            leading-[1.35]
            tracking-[-0.02em]
            text-slate-900
            line-clamp-2
            transition-colors
            duration-200
            group-hover:text-[#9A7818]
            sm:text-xl
          "
        >
          {bounty.title}
        </h3>

        {/* DESCRIPTION */}
        <p
          className="
            min-w-0
            min-h-[72px]
            overflow-hidden
            text-sm
            leading-6
            text-slate-500
            line-clamp-3
          "
        >
          {description}
        </p>

        {/* TAGS */}
        <div className="mt-4 min-h-[29px] min-w-0">
          {tags.length > 0 && (
            <div className="flex min-w-0 flex-wrap gap-1.5 overflow-hidden">
              {tags.slice(0, 3).map((tag, idx) => (
                <span
                  key={idx}
                  className="
                    max-w-full
                    overflow-hidden
                    text-ellipsis
                    whitespace-nowrap
                    rounded-md
                    border
                    border-slate-200
                    bg-slate-50
                    px-2.5
                    py-1
                    text-[11px]
                    font-medium
                    text-slate-500
                    transition-colors
                    group-hover:border-slate-300
                    group-hover:text-slate-600
                  "
                >
                  #{tag}
                </span>
              ))}

              {tags.length > 3 && (
                <span
                  className="
                    shrink-0
                    rounded-md
                    border
                    border-slate-200
                    bg-white
                    px-2.5
                    py-1
                    text-[11px]
                    font-medium
                    text-slate-400
                  "
                >
                  +{tags.length - 3}
                </span>
              )}
            </div>
          )}
        </div>

        {/* REWARD + DEADLINE */}
        <div
          className="
            my-5
            grid
            grid-cols-2
            gap-3
            rounded-xl
            border
            border-slate-200
            bg-[#fafaf8]
            p-3
          "
        >
          {/* REWARD */}
          <div className="min-w-0">
            <p
              className="
                mb-1
                text-[9px]
                font-semibold
                uppercase
                tracking-[0.12em]
                text-slate-400
              "
            >
              Reward
            </p>

            <p
              className="
                truncate
                text-sm
                font-bold
                tracking-[-0.01em]
                text-slate-900
                sm:text-base
              "
              title={rewardDisplay}
            >
              {rewardDisplay}
            </p>
          </div>

          {/* DEADLINE */}
          <div className="min-w-0 border-l border-slate-200 pl-3">
            <p
              className="
                mb-1
                flex
                items-center
                gap-1
                text-[9px]
                font-semibold
                uppercase
                tracking-[0.12em]
                text-slate-400
              "
            >
              <FiCalendar size={10} />
              Deadline
            </p>

            <p className="truncate text-sm font-semibold text-slate-700">
              {deadline}
            </p>
          </div>
        </div>

        {/* ACTIONS */}
        <div className="mt-auto grid grid-cols-2 gap-2.5">
          {/* VIEW DETAILS */}
          <Link
            to={`/task/${bounty._id}`}
            className="
              group/details
              flex
              min-w-0
              items-center
              justify-center
              gap-2
              overflow-hidden
              rounded-xl
              border
              border-slate-200
              bg-white
              px-3
              py-3
              text-xs
              font-semibold
              text-slate-600
              transition-all
              duration-200
              hover:border-slate-300
              hover:bg-slate-50
              hover:text-slate-900
              sm:text-sm
            "
          >
            <span className="truncate">View Details</span>

            <FiArrowUpRight
              size={14}
              className="
                shrink-0
                transition-transform
                duration-200
                group-hover/details:translate-x-0.5
                group-hover/details:-translate-y-0.5
              "
            />
          </Link>

          {/* START TASK */}
          {bounty.status === "active" ? (
            <button
              onClick={handleEnroll}
              disabled={isEnrolling}
              className="
                relative
                min-w-0
                overflow-hidden
                rounded-xl
                bg-[#111111]
                px-3
                py-3
                text-xs
                font-bold
                text-white
                shadow-sm
                transition-all
                duration-200
                hover:bg-[#252525]
                hover:shadow-md
                active:scale-[0.98]
                disabled:cursor-not-allowed
                disabled:opacity-50
                sm:text-sm
              "
            >
              {/* Small gold accent */}
              <span
                className="
                  absolute
                  bottom-0
                  left-0
                  h-[2px]
                  w-full
                  bg-[#D4AF37]
                  opacity-80
                "
              />

              {isEnrolling ? (
                <span className="flex items-center justify-center gap-2">
                  <span
                    className="
                      h-3.5
                      w-3.5
                      shrink-0
                      animate-spin
                      rounded-full
                      border-2
                      border-white/30
                      border-t-white
                    "
                  />

                  <span className="truncate">Enrolling</span>
                </span>
              ) : (
                <span className="flex items-center justify-center gap-1.5">
                  <span className="truncate">Start Task</span>

                  <FiArrowUpRight
                    size={14}
                    className="shrink-0 text-[#D4AF37]"
                  />
                </span>
              )}
            </button>
          ) : (
            <button
              disabled
              title={
                bounty.status === "completed"
                  ? "Bounty completed"
                  : "Bounty not started yet"
              }
              className="
                flex
                min-w-0
                items-center
                justify-center
                gap-1.5
                overflow-hidden
                rounded-xl
                border
                border-slate-200
                bg-slate-100
                px-3
                py-3
                text-xs
                font-semibold
                text-slate-400
                cursor-not-allowed
                sm:text-sm
              "
            >
              {bounty.status === "completed" ? (
                <FiCheckCircle size={14} className="shrink-0" />
              ) : (
                <FiClock size={14} className="shrink-0" />
              )}

              <span className="truncate">
                {bounty.status === "completed"
                  ? "Ended"
                  : "Coming Soon"}
              </span>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default BountyCard;