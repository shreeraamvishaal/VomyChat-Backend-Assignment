const User = require("../models/User");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

exports.register = async (req, res) => {
  try {
    const { username, email, password, referralCode } = req.body;

    console.log("\n================= REGISTRATION =================");
    console.log("Received Registration Data:", req.body);

    const user = new User({
      username,
      email,
      password, // No manual hashing, Mongoose will hash automatically
      referralCode: username + Math.floor(Math.random() * 10000),
      referredBy: referralCode || null,
    });

    await user.save();
    console.log("User Registered Successfully:", user);

    res.status(201).json({ message: "User registered successfully" });
  } catch (error) {
    console.error("Error in registration:", error.message);
    res.status(500).json({ error: error.message });
  }
};


exports.login = async (req, res) => {
  try {
    console.log("\n================= LOGIN REQUEST =================");
    console.log("Received Login Request:", req.body);

    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if (!user) {
      console.log("User not found for email:", email);
      return res.status(400).json({ message: "Invalid email or password" });
    }

    console.log("User Found:", user.email);
    console.log("Stored Hashed Password:", user.password);
    console.log("Entered Password:", password);

    // Corrected password comparison
    const isMatch = await bcrypt.compare(password, user.password);
    console.log("Password Match:", isMatch);

    if (!isMatch) {
      return res.status(401).json({ message: "Invalid email or password" });
    }

    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
      expiresIn: "7d",
    });

    console.log("Login successful. Token generated.");
    res.json({ token });
  } catch (error) {
    console.error("Error in login:", error.message);
    res.status(500).json({ error: error.message });
  }
};
