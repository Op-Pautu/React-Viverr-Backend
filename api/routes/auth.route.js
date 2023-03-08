const express = require("express");

const router = express.Router();

router.post("/login", (req, res) => {
  res.send("Login successful!");
});

router.post("/register", (req, res) => {
  res.send("Registration successful!");
});

router.post("/logout", (req, res) => {
  res.send("Logout successful!");
});

module.exports = router;
