// controllers/commentController.js
const Comment = require("../modules/comment.module");
const mongoose = require("mongoose");

// GET /comments/:bountyId
const getComments = async (req, res) => {
  const { bountyId } = req.params;
  if (!mongoose.Types.ObjectId.isValid(bountyId)) {
    return res.status(400).json({ error: "Invalid bountyId" });
  }

  const comments = await Comment.find({ bountyId })
    .sort({ createdAt: -1 })
    .limit(200)
    .lean();

  return res.status(200).json({ comments });
};

// POST /comments/:bountyId
const addComment = async (req, res) => {
  const { bountyId } = req.params;
  const { user, text } = req.body;

  if (!mongoose.Types.ObjectId.isValid(bountyId)) {
    return res.status(400).json({ error: "Invalid bountyId" });
  }
  if (!user || !text?.trim()) {
    return res.status(400).json({ error: "user and text are required" });
  }

  try {
    const comment = await Comment.create({
      bountyId,
      user: user.toLowerCase(),
      text: text.trim(),
    });
    return res.status(201).json({ comment });
  } catch (err) {
    if (err.code === 11000) {
      return res
        .status(400)
        .json({ error: "You already commented on this bounty" });
    }
    console.error("Comment error:", err);
    return res.status(500).json({ error: "Failed to add comment" });
  }
};

module.exports = { getComments, addComment };
