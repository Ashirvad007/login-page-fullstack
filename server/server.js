const express = require("express");
const cors = require("cors");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Test Route
app.get("/", (req, res) => {
  res.send("Express Server is Running!");
});

// Mock User
const user = {
  email: "admin@gmail.com",
  password: "123456",
};

// Login Route
app.post("/login", (req, res) => {
  const { email, password } = req.body;

  if (email === user.email && password === user.password) {
    return res.status(200).json({
      success: true,
      message: "Login Successful",
    });
  }

  return res.status(401).json({
    success: false,
    message: "Invalid Email or Password",
  });
});

// Render uses process.env.PORT
const PORT = process.env.PORT || 5001;

app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`);
});