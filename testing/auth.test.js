const request = require("supertest");
const app = require("../server"); // Adjust based on your server entry point
const User = require("../models/User");
const mongoose = require("mongoose");

beforeAll(async () => {
  await User.deleteMany(); // Clean test database before running tests
});

afterAll(async () => {
  await mongoose.connection.close(); // Close DB connection after tests
});

describe("Auth API Tests", () => {
  const testUser = {
    username: "testuser",
    email: "test@example.com",
    password: "Test@1234"
  };

  test("Register a new user", async () => {
    const res = await request(app).post("/api/auth/register").send(testUser);
    expect(res.statusCode).toBe(201);
    expect(res.body.message).toBe("User registered successfully");
  });

  test("Login with correct credentials", async () => {
    const res = await request(app).post("/api/auth/login").send({
      email: testUser.email,
      password: testUser.password
    });
    expect(res.statusCode).toBe(200);
    expect(res.body.token).toBeDefined();
  });

  test("Fail login with incorrect password", async () => {
    const res = await request(app).post("/api/auth/login").send({
      email: testUser.email,
      password: "WrongPassword"
    });
    expect(res.statusCode).toBe(401);
    expect(res.body.message).toBe("Invalid email or password");
  });

  test("Fail registration with existing email", async () => {
    const res = await request(app).post("/api/auth/register").send(testUser);
    expect(res.statusCode).toBe(500);
    expect(res.body.error).toMatch(/duplicate key error/i);
  });
});
