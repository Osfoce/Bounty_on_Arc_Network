// BountyDetail.jsx
import { useEffect, useState, useRef } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";
import {
  FiArrowLeft,
  FiCheck,
  FiClock,
  FiExternalLink,
  FiInfo,
  FiLink,
  FiShield,
  FiTag,
  FiUser,
  FiUsers,
  FiX,
} from "react-icons/fi";
import NavBar from "../components/Layout/NavBar";
import Footer from "../components/Layout/Footer";
import { BOUNTY_ABI, CONTRACT_ADDRESSES } from "contract";
import { useAccount, useChainId, useSwitchChain } from "wagmi";
import { formatEther } from "viem";
import { useBounty } from "../hooks/useBounty";
import { formatAmount } from "../utils/format";

const BountyDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { address, isConnected } = useAccount();
  const currentChainId = useChainId();
  const { switchChain } = useSwitchChain();

  const {
    claimReward,
    assignSingleWinner,
    assignMultipleWinners,
    useClaimableReward,
    useClaimedStatus,
    fetchBountyIdFromTx,
    isPending: isContractPending,
    isConfirming: isContractConfirming,
  } = useBounty();

  const [bounty, setBounty] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isEnrolling, setIsEnrolling] = useState(false);
  const [isEnrolled, setIsEnrolled] = useState(false);
  const [isCreator, setIsCreator] = useState(false);
  const [hasUserSubmitted, setHasUserSubmitted] = useState(false);
  const [userSubmission, setUserSubmission] = useState(null);
  const [winnersData, setWinnersData] = useState(null);
  const [offChainClaimable, setOffChainClaimable] = useState("0");
  const [hasUserClaimedOffChain, setHasUserClaimedOffChain] = useState(false);
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");
  const [showSubmitModal, setShowSubmitModal] = useState(false);
  const [showDistributeModal, setShowDistributeModal] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [distributing, setDistributing] = useState(false);
  const [submissionImage, setSubmissionImage] = useState(null);
  const [submissionDescription, setSubmissionDescription] = useState("");
  const [submissionLink, setSubmissionLink] = useState("");
  const [imagePreview, setImagePreview] = useState(null);
  const [imageSizeWarning, setImageSizeWarning] = useState("");
  const [winnerAddresses, setWinnerAddresses] = useState([]);

  const API_URL = import.meta.env.VITE_API_URL;
  const fileInputRef = useRef(null);

  const blockchainId =
    bounty?.blockchainId !== null && bounty?.blockchainId !== undefined
      ? Number(bounty.blockchainId)
      : null;

  const { data: onChainClaimable, refetch: refetchClaimable } =
    useClaimableReward(blockchainId, address);
  const { data: onChainClaimed } = useClaimedStatus(blockchainId, address);

  useEffect(() => {
    if (blockchainId && address) refetchClaimable();
  }, [blockchainId, address]);

  /* ---------------- Helpers ---------------- */

  const formatDate = (dateString) => {
    if (!dateString) return "Not set";
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  const formatDateTime = (dateString) => {
    if (!dateString) return "";
    return new Date(dateString).toLocaleString("en-US", {
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  const shortenAddress = (addr) =>
    addr ? `${addr.slice(0, 6)}...${addr.slice(-4)}` : "";

  const compressImage = (file, maxWidth = 1024, quality = 0.7) =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = (e) => {
        const img = new Image();
        img.onload = () => {
          let { width, height } = img;
          if (width > maxWidth) {
            height = (height * maxWidth) / width;
            width = maxWidth;
          }
          const canvas = document.createElement("canvas");
          canvas.width = width;
          canvas.height = height;
          canvas.getContext("2d").drawImage(img, 0, 0, width, height);
          canvas.toBlob(
            (blob) => {
              resolve(
                new File([blob], file.name, {
                  type: file.type,
                  lastModified: Date.now(),
                }),
              );
            },
            file.type,
            quality,
          );
        };
        img.onerror = reject;
        img.src = e.target.result;
      };
      reader.onerror = reject;
      reader.readAsDataURL(file);
    });

  /* ---------------- API calls ---------------- */

  const checkUserEnrollment = async (wallet, bountyId) => {
    try {
      const { data } = await axios.get(
        `${API_URL}/user/get-enrollment/${wallet}`,
      );
      return (data.enrollments || []).some((e) => e.bountyId === bountyId);
    } catch {
      return false;
    }
  };

  const checkUserSubmission = async (wallet, bountyId) => {
    try {
      const { data } = await axios.get(`${API_URL}/bounty/submissions/${wallet}`);
      const existing = (data.submissions || []).find(
        (sub) => String(sub.bountyId) === String(bountyId),
      );
      if (existing) {
        setHasUserSubmitted(true);
        setUserSubmission(existing);
      }
    } catch (err) {
      console.error("Error checking submission:", err);
    }
  };

  const loadWinnersData = async (bountyId) => {
    try {
      const { data } = await axios.get(`${API_URL}/bounty/${bountyId}/winners`);
      setWinnersData(data);

      if (address && data.isDistributed) {
        const { data: c } = await axios.get(
          `${API_URL}/bounty/${bountyId}/claimable/${address}`,
        );
        setOffChainClaimable(c.claimableFormatted || "0");
        const { data: h } = await axios.get(
          `${API_URL}/bounty/${bountyId}/has-claimed/${address}`,
        );
        setHasUserClaimedOffChain(h.hasClaimed);
      }
    } catch (err) {
      console.error("Error loading winners:", err);
    }
  };

  const loadComments = async (bountyId) => {
    try {
      const { data } = await axios.get(`${API_URL}/comments/${bountyId}`);
      setComments(data.comments || []);
    } catch (err) {
      console.error("Error loading comments:", err);
    }
  };

  /* ---------------- Fetch bounty ---------------- */

  useEffect(() => {
    const fetchBounty = async () => {
      if (!id) return;
      try {
        const { data } = await axios.get(`${API_URL}/bounty/${id}`);
        let bountyData = data.bounty || data;

        if (!bountyData.blockchainId && bountyData.txHash) {
          if (currentChainId !== bountyData.network) {
            try {
              await switchChain({ chainId: bountyData.network });
            } catch {
              toast.error("Please switch network manually");
              return;
            }
          }
          const fetchedId = await fetchBountyIdFromTx(bountyData.txHash);
          if (fetchedId) {
            await axios.patch(`${API_URL}/bounty/update/${id}`, {
              blockchainId: fetchedId,
            });
            bountyData = { ...bountyData, blockchainId: fetchedId };
          }
        }

        setBounty(bountyData);

        if (address) {
          setIsCreator(
            bountyData.creator?.toLowerCase() === address.toLowerCase(),
          );
          setIsEnrolled(await checkUserEnrollment(address, id));
          await checkUserSubmission(address, id);
          await loadWinnersData(id);
        }
        await loadComments(id);
      } catch (err) {
        console.error(err);
        toast.error("Failed to load bounty details");
        navigate("/");
      } finally {
        setLoading(false);
      }
    };
    fetchBounty();
  }, [id, navigate, address]);

  /* ---------------- Enrollment ---------------- */

  const handleEnroll = async () => {
    if (!address) return toast.error("Please connect your wallet");
    setIsEnrolling(true);
    const loadingToast = toast.loading("Enrolling in bounty...");
    try {
      await axios.post(`${API_URL}/user/enrollment`, {
        bountyId: id,
        user: address,
      });
      toast.success("Enrolled!", { id: loadingToast });
      setIsEnrolled(true);
    } catch (err) {
      toast.error(
        err.response?.status === 400 ? "Already enrolled" : "Enrollment failed",
        { id: loadingToast },
      );
    } finally {
      setIsEnrolling(false);
    }
  };

  /* ---------------- Submission ---------------- */

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    if (file.size > 5 * 1024 * 1024) {
      setImageSizeWarning("⚠️ Max 5MB");
    } else {
      setImageSizeWarning("");
    }
    setSubmissionImage(file);
    const reader = new FileReader();
    reader.onload = (ev) => setImagePreview(ev.target.result);
    reader.readAsDataURL(file);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!address) return toast.error("Please connect your wallet");
    if (!submissionDescription || !submissionLink) {
      return toast.error("Please fill in description and link");
    }

    setSubmitting(true);
    const loadingToast = toast.loading("Submitting...");
    try {
      const formData = new FormData();
      formData.append("bountyId", id);
      formData.append("user", address);
      formData.append("description", submissionDescription);
      formData.append("projectLink", submissionLink);
      if (submissionImage) {
        const compressed = await compressImage(submissionImage);
        formData.append("image", compressed);
      }

      const { data } = await axios.post(`${API_URL}/bounty/submit`, formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      toast.success("Submitted! Pending review.", { id: loadingToast });
      setHasUserSubmitted(true);
      setUserSubmission({
        ...data,
        bountyId: id,
        user: address,
        description: submissionDescription,
        projectLink: submissionLink,
        status: "pending",
        submittedAt: new Date().toISOString(),
      });
      setShowSubmitModal(false);
      resetSubmissionForm();
    } catch (err) {
      const msg =
        err.response?.status === 400
          ? err.response.data?.error || "Submission rejected"
          : "Failed to submit";
      toast.error(msg, { id: loadingToast });
    } finally {
      setSubmitting(false);
    }
  };

  const resetSubmissionForm = () => {
    setSubmissionImage(null);
    setSubmissionDescription("");
    setSubmissionLink("");
    setImagePreview(null);
    setImageSizeWarning("");
    if (fileInputRef.current) fileInputRef.current.value = "";
  };

  /* ---------------- Claim ---------------- */

  const handleClaimReward = async () => {
    if (!address) return toast.error("Please connect your wallet");
    if (!bounty?.blockchainId) return toast.error("Not on-chain");
    if (currentChainId !== bounty.network) {
      try {
        await switchChain({ chainId: bounty.network });
      } catch {
        return toast.error("Please switch network manually");
      }
    }
    if (!onChainClaimable || onChainClaimable === 0n) {
      return toast.error("No reward available");
    }
    if (onChainClaimed) return toast.error("Already claimed");

    try {
      const { hash } = await claimReward(blockchainId);
      await axios.post(`${API_URL}/bounty/${id}/claim`, {
        winnerAddress: address,
        txHash: hash,
      });
      toast.success("Reward claimed!");
      await loadWinnersData(id);
      refetchClaimable();
    } catch (err) {
      toast.error(err.shortMessage || err.message || "Claim failed");
    }
  };

  /* ---------------- Distribute ---------------- */

  const handleDistributeReward = async () => {
    const valid = winnerAddresses.filter((a) => a?.startsWith("0x"));
    if (!valid.length || valid.length !== winnerAddresses.length) {
      return toast.error("Enter valid winner addresses");
    }
    if (!bounty?.blockchainId) return toast.error("Not on-chain");
    if (currentChainId !== bounty.network) {
      try {
        await switchChain({ chainId: bounty.network });
      } catch {
        return toast.error("Please switch network manually");
      }
    }

    setDistributing(true);
    const loadingToast = toast.loading("Distributing...");
    try {
      let tx;
      if (valid.length === 1) {
        tx = await assignSingleWinner(blockchainId, valid[0]);
      } else {
        const pcts =
          bounty.payoutType === "MULTI_PERCENTAGE" ? bounty.percentages : [];
        tx = await assignMultipleWinners(blockchainId, valid, pcts);
      }

      await axios.post(`${API_URL}/bounty/${id}/distribute`, {
        txHash: tx.hash,
        blockchainId: bounty.blockchainId,
        chainId: bounty.network,
        bountyContract: CONTRACT_ADDRESSES[bounty.network]?.bounty || null,
      });

      toast.success("Distributed!", { id: loadingToast });
      setShowDistributeModal(false);
      await loadWinnersData(id);
    } catch (err) {
      toast.error(err.shortMessage || err.message || "Distribution failed", {
        id: loadingToast,
      });
    } finally {
      setDistributing(false);
    }
  };

  const openDistributeModal = () => {
    const count =
      bounty?.payoutType === "SINGLE" ? 1 : bounty?.winnersAllowed || 1;
    setWinnerAddresses(Array(count).fill(""));
    setShowDistributeModal(true);
  };

  /* ---------------- Comments ---------------- */

  const handleAddComment = async () => {
    if (!address) return toast.error("Please connect your wallet");
    if (!newComment.trim()) return toast.error("Enter a comment");
    try {
      const { data } = await axios.post(`${API_URL}/comments/${id}`, {
        user: address,
        text: newComment.trim(),
      });
      setComments((prev) => [data.comment, ...prev]);
      setNewComment("");
      toast.success("Comment added");
    } catch (err) {
      toast.error(err.response?.data?.error || "Failed to add comment");
    }
  };

  /* ---------------- Derived ---------------- */

  const canSubmit = () =>
    !isCreator &&
    isEnrolled &&
    !hasUserSubmitted &&
    bounty?.status === "active";

  const canClaim = () => {
    if (isCreator || hasUserClaimedOffChain) return false;
    const amt = blockchainId
      ? onChainClaimable || 0n
      : BigInt(Math.round(Number(offChainClaimable) * 1e18) || 0);
    if (amt === 0n) return false;
    return true;
  };

  const canDistribute = () => {
    if (!isCreator) return false;
    if (new Date(bounty?.deadline) >= new Date()) return false;
    if (winnersData?.isDistributed) return false;
    return true;
  };

  const displayClaimable = () => {
    if (blockchainId && onChainClaimable) {
      return formatAmount(formatEther(onChainClaimable));
    }
    return formatAmount(offChainClaimable);
  };

  /* ---------------- UI classes ---------------- */

  const cardClass =
    "relative overflow-hidden rounded-3xl border border-[#dedbd1] bg-white shadow-[0_18px_60px_rgba(34,31,24,0.07)]";

  const inputClass =
    "w-full bg-white border border-[#ddd9ce] rounded-xl px-4 py-3 text-[#171714] placeholder:text-[#99958a] outline-none transition focus:border-[#c49b2c] focus:ring-2 focus:ring-[#d4af37]/10";

  /* ---------------- Loading / Error ---------------- */

  if (loading) {
    return (
      <div
        className="min-h-screen flex flex-col text-[#171714]"
        style={{ backgroundColor: "#f7f6f0" }}
      >
        <NavBar />
        <main className="flex-grow flex items-center justify-center">
          <div className="w-16 h-16 border-4 border-[#e5ddc8] border-t-[#d4af37] rounded-full animate-spin" />
        </main>
        <Footer />
      </div>
    );
  }

  if (!bounty) {
    return (
      <div
        className="min-h-screen flex flex-col text-[#171714]"
        style={{ backgroundColor: "#f7f6f0" }}
      >
        <NavBar />
        <main className="flex-grow flex items-center justify-center">
          <div className="text-center">
            <div className="text-6xl mb-4">🔍</div>
            <p className="text-[#171714] text-xl font-semibold">
              Bounty not found
            </p>
            <button
              onClick={() => navigate("/dashboard")}
              className="mt-4 px-6 py-3 rounded-xl bg-[#171714] text-[#d4af37] font-semibold hover:bg-[#292922] transition"
            >
              Back to Dashboard
            </button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  /* ---------------- Main ---------------- */

  const statusStyles = {
    active: "bg-[#e8f5e9] text-[#2e7d32] border border-[#a5d6a7]",
    upcoming: "bg-[#fff8e1] text-[#a17a17] border border-[#e5d9b8]",
    ended: "bg-[#f2f0ea] text-[#777267] border border-[#ddd8ca]",
    completed: "bg-[#f4ecd5] text-[#8f6c12] border border-[#d4af37]",
    cancelled: "bg-[#fbe9e7] text-[#c62828] border border-[#ef9a9a]",
  };

  return (
    <div
      className="min-h-screen flex flex-col text-[#171714]"
      style={{
        backgroundColor: "#f7f6f0",
        backgroundImage: `
          linear-gradient(rgba(112,105,88,0.035) 1px, transparent 1px),
          linear-gradient(90deg, rgba(112,105,88,0.035) 1px, transparent 1px)
        `,
        backgroundSize: "56px 28px, 56px 28px",
      }}
    >
      <NavBar />
      <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-8 pt-28">
        <div className="max-w-5xl mx-auto space-y-6">
          {/* Main card */}
          <div className={cardClass}>
            <div className="absolute top-0 left-0 right-0 h-1 bg-[#d4af37]" />
            <div className="p-6 md:p-9">
              <div className="flex flex-col sm:flex-row justify-between items-start gap-4 mb-6">
                <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#171714] break-words">
                  {bounty.title}
                </h1>
                <span
                  className={`px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider whitespace-nowrap ${
                    statusStyles[bounty.status] || statusStyles.ended
                  }`}
                >
                  {bounty.status}
                </span>
              </div>

              <p className="text-[#625e55] mb-6 text-sm sm:text-base leading-relaxed">
                {bounty.description}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-6">
                <div>
                  <p className="text-xs uppercase tracking-wider text-[#8b8579] mb-1">
                    Deadline
                  </p>
                  <p className="text-[#171714] font-semibold text-sm">
                    {formatDate(bounty.deadline)}
                  </p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wider text-[#8b8579] mb-1">
                    Reward
                  </p>
                  <p className="text-[#8f6c12] font-bold text-lg">
                    {formatAmount(bounty.reward)} {bounty.token || "USDC"}
                  </p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wider text-[#8b8579] mb-1">
                    Creator
                  </p>
                  <p className="text-[#171714] font-mono text-sm">
                    {shortenAddress(bounty.creator)}
                  </p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wider text-[#8b8579] mb-1">
                    Category
                  </p>
                  <p className="text-[#171714] text-sm">
                    {bounty.category || "Uncategorized"}
                  </p>
                </div>
                {bounty.tags?.length > 0 && (
                  <div>
                    <p className="text-xs uppercase tracking-wider text-[#8b8579] mb-1">
                      Tags
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {bounty.tags.map((tag, i) => (
                        <span
                          key={i}
                          className="text-xs px-2 py-0.5 rounded-full bg-[#f4ecd5] border border-[#e5d9b8] text-[#8f6c12] font-medium"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
                <div>
                  <p className="text-xs uppercase tracking-wider text-[#8b8579] mb-1">
                    Project Link
                  </p>
                  {bounty.originLink ? (
                    <a
                      href={bounty.originLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#9a7619] hover:underline text-sm inline-flex items-center gap-1 break-all"
                    >
                      <FiLink size={12} />
                      {bounty.originLink.length > 45
                        ? bounty.originLink.slice(0, 45) + "..."
                        : bounty.originLink}
                    </a>
                  ) : (
                    <p className="text-[#99958a] text-sm">No link provided</p>
                  )}
                </div>
              </div>

              {/* Action buttons */}
              <div className="flex flex-wrap gap-3 pt-4 border-t border-[#e7e3da]">
                {bounty.status === "active" && !isEnrolled && !isCreator && (
                  <button
                    onClick={handleEnroll}
                    disabled={isEnrolling}
                    className="px-5 py-2.5 rounded-xl bg-[#d4af37] text-[#171714] font-semibold hover:bg-[#c49b2c] transition disabled:opacity-50"
                  >
                    {isEnrolling ? "Enrolling..." : "Start Task"}
                  </button>
                )}
                {canSubmit() && (
                  <button
                    onClick={() => setShowSubmitModal(true)}
                    className="px-5 py-2.5 rounded-xl bg-white border border-[#d8d3c6] text-[#292720] font-semibold hover:border-[#c49b2c] transition"
                  >
                    Submit Task
                  </button>
                )}
                {canClaim() && (
                  <button
                    onClick={handleClaimReward}
                    disabled={isContractPending || isContractConfirming}
                    className="px-5 py-2.5 rounded-xl bg-[#171714] text-[#d4af37] font-semibold hover:bg-[#292922] transition disabled:opacity-50"
                  >
                    {isContractPending
                      ? "Confirm in wallet..."
                      : isContractConfirming
                        ? "Confirming..."
                        : `Claim ${displayClaimable()} ${bounty.token}`}
                  </button>
                )}
                {canDistribute() && (
                  <button
                    onClick={openDistributeModal}
                    className="px-5 py-2.5 rounded-xl bg-[#171714] text-white font-semibold hover:bg-[#292922] transition"
                  >
                    Distribute Reward
                  </button>
                )}
                {hasUserSubmitted && userSubmission && (
                  <div className="px-4 py-2.5 rounded-xl bg-[#f4ecd5] border border-[#e5d9b8] text-[#8f6c12] text-xs font-semibold">
                    {userSubmission.status === "pending" &&
                      "⏳ Submission Pending"}
                    {userSubmission.status === "accepted" && "✅ Accepted"}
                    {userSubmission.status === "rejected" && "❌ Rejected"}
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Submission card */}
          {hasUserSubmitted && userSubmission && (
            <div className={cardClass}>
              <div className="p-6 md:p-8">
                <h3 className="font-bold text-[#171714] mb-3">
                  Your Submission
                </h3>
                <div className="space-y-2 text-sm">
                  <p className="text-[#4f4b43]">
                    <strong className="text-[#171714]">Description:</strong>{" "}
                    {userSubmission.description}
                  </p>
                  <p className="text-[#4f4b43]">
                    <strong className="text-[#171714]">Link:</strong>{" "}
                    <a
                      href={userSubmission.projectLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#9a7619] hover:underline break-all"
                    >
                      {userSubmission.projectLink}
                    </a>
                  </p>
                  {userSubmission.image && (
                    <a
                      href={userSubmission.image}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#9a7619] hover:underline text-sm inline-block"
                    >
                      View Submission Image
                    </a>
                  )}
                </div>
              </div>
            </div>
          )}

          {/* Winners */}
          {winnersData?.isDistributed && winnersData.winners.length > 0 && (
            <div className={cardClass}>
              <div className="p-6 md:p-8">
                <h3 className="font-bold text-[#171714] mb-4 flex items-center gap-2">
                  <FiUsers className="text-[#b28b20]" />
                  Rewards Distributed
                </h3>
                <div className="space-y-3">
                  {winnersData.winners.map((winner, idx) => {
                    const isCurrentUser =
                      address &&
                      winner.address.toLowerCase() === address.toLowerCase();
                    const isClaimed = winnersData.claimed?.some(
                      (c) =>
                        c.address.toLowerCase() ===
                        winner.address.toLowerCase(),
                    );
                    return (
                      <div
                        key={idx}
                        className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 py-3 border-b border-[#e7e3da] last:border-0"
                      >
                        <span className="font-mono text-xs text-[#625e55] break-all">
                          {shortenAddress(winner.address)}
                        </span>
                        <div className="flex items-center gap-3">
                          <span className="text-[#8f6c12] font-semibold text-sm">
                            {formatAmount(winner.amount)} {bounty.token}
                          </span>
                          {isClaimed ? (
                            <span className="text-[#2e7d32] text-xs font-semibold flex items-center gap-1">
                              <FiCheck size={12} /> Claimed
                            </span>
                          ) : isCurrentUser ? (
                            <span className="text-[#8f6c12] text-xs font-semibold">
                              ⏳ Ready to claim
                            </span>
                          ) : (
                            <span className="text-[#99958a] text-xs">
                              ⏳ Pending
                            </span>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          )}

          {/* Comments */}
          <div className={cardClass}>
            <div className="p-6 md:p-8">
              <h3 className="font-bold text-[#171714] mb-4">Comments</h3>
              <div className="space-y-3 max-h-96 overflow-y-auto mb-4">
                {comments.length === 0 ? (
                  <p className="text-[#99958a] text-center py-4 text-sm">
                    No comments yet.
                  </p>
                ) : (
                  comments.map((comment) => (
                    <div
                      key={comment._id || comment.id}
                      className="p-3 bg-[#fbfaf6] border border-[#e7e3da] rounded-xl"
                    >
                      <div className="flex justify-between items-start mb-1.5">
                        <span className="font-semibold text-[#8f6c12] text-sm">
                          {shortenAddress(comment.user)}
                        </span>
                        <span className="text-xs text-[#99958a]">
                          {formatDateTime(
                            comment.createdAt || comment.timestamp,
                          )}
                        </span>
                      </div>
                      <p className="text-[#4f4b43] text-sm">{comment.text}</p>
                    </div>
                  ))
                )}
              </div>
              <div className="flex flex-col sm:flex-row gap-2">
                <input
                  type="text"
                  value={newComment}
                  onChange={(e) => setNewComment(e.target.value)}
                  placeholder="Add a comment..."
                  className={inputClass}
                />
                <button
                  onClick={handleAddComment}
                  className="px-5 py-3 rounded-xl bg-[#171714] text-[#d4af37] font-semibold hover:bg-[#292922] transition"
                >
                  Comment
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Submit modal */}
      {showSubmitModal && (
        <div
          className="fixed inset-0 bg-[#171714]/60 backdrop-blur-sm flex items-center justify-center z-50 p-4"
          onClick={() => setShowSubmitModal(false)}
        >
          <div
            className="bg-[#f9f8f3] border border-[#ddd8ca] rounded-3xl w-full max-w-md p-6 shadow-2xl max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center mb-5">
              <h2 className="text-xl font-bold text-[#171714]">Submit Task</h2>
              <button
                onClick={() => setShowSubmitModal(false)}
                className="w-9 h-9 rounded-xl border border-[#ddd8ca] bg-white flex items-center justify-center text-[#777267] hover:text-[#171714]"
              >
                <FiX size={16} />
              </button>
            </div>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#6f6a60] mb-2">
                  Upload Image (Max 5MB)
                </label>
                <input
                  ref={fileInputRef}
                  type="file"
                  accept="image/*"
                  onChange={handleImageUpload}
                  className="w-full bg-white border border-[#ddd8ca] rounded-xl px-4 py-3 text-[#171714] text-sm file:mr-3 file:py-1.5 file:px-3 file:rounded-lg file:bg-[#171714] file:text-[#d4af37] file:border-0 file:font-semibold"
                />
                {imagePreview && (
                  <div className="mt-3">
                    <img
                      src={imagePreview}
                      alt="Preview"
                      className="max-h-32 rounded-xl border border-[#ddd8ca]"
                    />
                    {imageSizeWarning && (
                      <p className="text-xs text-[#c62828] mt-1">
                        {imageSizeWarning}
                      </p>
                    )}
                  </div>
                )}
              </div>
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#6f6a60] mb-2">
                  Description
                </label>
                <input
                  type="text"
                  value={submissionDescription}
                  onChange={(e) => setSubmissionDescription(e.target.value)}
                  placeholder="What did you do?"
                  className={inputClass}
                  required
                />
              </div>
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#6f6a60] mb-2">
                  Proof Link
                </label>
                <input
                  type="url"
                  value={submissionLink}
                  onChange={(e) => setSubmissionLink(e.target.value)}
                  placeholder="https://..."
                  className={inputClass}
                  required
                />
              </div>
              <button
                type="submit"
                disabled={submitting}
                className="w-full py-3 rounded-xl bg-[#171714] text-[#d4af37] font-semibold hover:bg-[#292922] transition disabled:opacity-50"
              >
                {submitting ? "Submitting..." : "Submit"}
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Distribute modal */}
      {showDistributeModal && bounty && (
        <div
          className="fixed inset-0 bg-[#171714]/60 backdrop-blur-sm flex items-center justify-center z-50 p-4"
          onClick={() => setShowDistributeModal(false)}
        >
          <div
            className="bg-[#f9f8f3] border border-[#ddd8ca] rounded-3xl w-full max-w-md p-6 shadow-2xl max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center mb-5">
              <h3 className="text-xl font-bold text-[#171714]">
                Distribute Reward
              </h3>
              <button
                onClick={() => setShowDistributeModal(false)}
                className="w-9 h-9 rounded-xl border border-[#ddd8ca] bg-white flex items-center justify-center text-[#777267] hover:text-[#171714]"
              >
                <FiX size={16} />
              </button>
            </div>
            <p className="text-[#625e55] text-sm mb-1">
              Bounty: <strong className="text-[#171714]">{bounty.title}</strong>
            </p>
            <p className="text-[#625e55] text-sm mb-5">
              Reward:{" "}
              <strong className="text-[#8f6c12]">
                {formatAmount(bounty.reward)} {bounty.token}
              </strong>
            </p>
            <div className="space-y-4 mb-5">
              {winnerAddresses.map((addr, idx) => {
                let amount = 0;
                if (bounty.payoutType === "MULTI_EQUAL")
                  amount = bounty.reward / bounty.winnersAllowed;
                else if (
                  bounty.payoutType === "MULTI_PERCENTAGE" &&
                  bounty.percentages?.[idx]
                )
                  amount = (bounty.reward * bounty.percentages[idx]) / 100;
                else amount = bounty.reward;
                return (
                  <div key={idx}>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-[#6f6a60] mb-2">
                      Winner {idx + 1} Address
                    </label>
                    <input
                      type="text"
                      value={addr}
                      onChange={(e) => {
                        const next = [...winnerAddresses];
                        next[idx] = e.target.value;
                        setWinnerAddresses(next);
                      }}
                      placeholder="0x..."
                      className={inputClass}
                    />
                    {amount > 0 && (
                      <p className="text-[#8f6c12] text-xs mt-1.5">
                        Will receive: {formatAmount(amount)} {bounty.token}
                      </p>
                    )}
                  </div>
                );
              })}
            </div>
            <div className="flex gap-3">
              <button
                onClick={() => setShowDistributeModal(false)}
                className="flex-1 px-4 py-3 rounded-xl bg-white border border-[#d9d4c8] text-[#555047] font-semibold hover:bg-[#f4f2ec] transition"
              >
                Cancel
              </button>
              <button
                onClick={handleDistributeReward}
                disabled={
                  distributing || isContractPending || isContractConfirming
                }
                className="flex-1 px-4 py-3 rounded-xl bg-[#171714] text-[#d4af37] font-semibold hover:bg-[#292922] transition disabled:opacity-50"
              >
                {distributing ? "Distributing..." : "Confirm"}
              </button>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default BountyDetail;
