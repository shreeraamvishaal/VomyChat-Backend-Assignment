const request = require("supertest");
const app = require("../server");
const User = require("../models/User");

describe("Referral System Tests", () => {
  let referrer, newUser;

  beforeAll(async () => {
    await User.deleteMany();

    // Register a referrer user
    const referrerRes = await request(app).post("/api/auth/register").send({
      username: "referrer",
      email: "referrer@example.com",
      password: "Referrer@123"
    });
    referrer = await User.findOne({ email: "referrer@example.com" });
  });

  test("Register a new user with a valid referral code", async () => {
    const res = await request(app).post("/api/auth/register").send({
      username: "newuser",
      email: "newuser@example.com",
      password: "NewUser@123",
      referralCode: referrer.referralCode
    });

    expect(res.statusCode).toBe(201);
    expect(res.body.message).toBe("User registered successfully");
    
    newUser = await User.findOne({ email: "newuser@example.com" });
    expect(newUser.referredBy).toBe(referrer.referralCode);
  });

  test("Fail registration with invalid referral code", async () => {
    const res = await request(app).post("/api/auth/register").send({
      username: "invalidUser",
      email: "invaliduser@example.com",
      password: "Invalid@123",
      referralCode: "InvalidCode1234"
    });

    expect(res.statusCode).toBe(400);
    expect(res.body.error).toBe("Invalid referral code");
  });

  test("Prevent user from referring themselves", async () => {
    const res = await request(app).post("/api/auth/register").send({
      username: "selfref",
      email: "selfref@example.com",
      password: "Self@123",
      referralCode: newUser.referralCode // Using their own referral code
    });

    expect(res.statusCode).toBe(400);
    expect(res.body.error).toBe("You cannot refer yourself.");
  });
});
