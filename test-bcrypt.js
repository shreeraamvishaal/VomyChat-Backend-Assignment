// const bcrypt = require("bcrypt");

// // // // const password = "Test@123";
// // // // bcrypt.hash(password, 10, (err, hash) => {
// // // //   console.log("Hashed Password:", hash);
// // // // });

// // // const enteredPassword = "Test@123";
// // // const storedHashedPassword = "$2b$10$Fr0cXEmGQR.r4xrczyzx/uemQOu2IUl1KXc/j4vcow4f1Lf/ol60C"; // Example from MongoDB

// // // bcrypt.compare(enteredPassword, storedHashedPassword, (err, result) => {
// // //   console.log("Password Match:", result);
// // // });

// // const mongoose = require("mongoose");
// // const User = require("./src/models/User");
// // require("dotenv").config();

// // mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
// //   .then(async () => {
// //     const users = await User.find({});
// //     console.log("\nStored Users in DB:", users);
// //     mongoose.disconnect();
// //   })
// //   .catch(err => console.error("MongoDB Connection Error:", err));

// console.log("Entered Password Type:", typeof password);
// console.log("Trimmed Password:", password.trim());

// const isMatch = await bcrypt.compare(password.trim(), user.password);
// console.log("Password Match (Trimmed):", isMatch);

// const bcrypt = require("bcrypt");

// const plainPassword = "Test@123";
// const storedHash = "$2b$10$ZJ5xHiayF/5V7hIfO00s1OXM2EapSHbvHpxBZ/DVgX5R2cxKx6lRy"; // From MongoDB

// bcrypt.compare(plainPassword, storedHash).then(result => console.log("Manual Compare Result:", result));

// const isMatch = await bcrypt.compare(password.trim(), user.password);
// console.log("Entered Password:", password.trim());
// console.log("Stored Hash:", user.password);
// console.log("Comparison Result:", isMatch);

const bcrypt = require("bcrypt");

const password = "Test@123";
const hash = bcrypt.hashSync(password, 10);
console.log("Generated Hash:", hash);

console.log("Manual Compare Result:", bcrypt.compareSync(password, hash));
