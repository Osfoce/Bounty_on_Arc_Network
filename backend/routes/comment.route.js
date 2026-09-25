const express = require("express");
const { getComments, addComment } = require("../controller/comment.controller");

const router = express.Router();

// create routes
router.route("/comments/:bountyId").get(getComments);
router.route("/comments/:bountyId").post(addComment);
