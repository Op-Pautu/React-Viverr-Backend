const express = require("express");

const { register } = require("../controllers/auth.controller");

const router = express.Router();

router.post("/login", (req, res) => {
  res.send("Login successful!");
});

router.post("/register", register);

router.post("/logout", (req, res) => {
  res.send("Logout successful!");
});

module.exports = router;
