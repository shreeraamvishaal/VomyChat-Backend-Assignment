const express = require("express");
const connectDB = require("./src/config/db");
const authRoutes = require("./src/routes/authRoutes");
const referralRoutes = require("./src/routes/referralRoutes");
require("dotenv").config();

const app = express();
app.use(express.json());
connectDB();

app.use("/api", authRoutes);
app.use("/api", referralRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
