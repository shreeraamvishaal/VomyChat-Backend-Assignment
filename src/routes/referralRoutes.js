const express = require("express");
const { getReferralStats } = require("../controllers/referralController");
const authMiddleware = require("../middleware/authMiddleware");

const router = express.Router();
router.get("/referral-stats", authMiddleware, getReferralStats);

module.exports = router;
