const Referral = require("../models/Referral");

exports.getReferralStats = async (req, res) => {
  try {
    const userId = req.user.userId;
    const referrals = await Referral.find({ referrerId: userId }).populate("referredUserId", "email username");
    res.json(referrals);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
