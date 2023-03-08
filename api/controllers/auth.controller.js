const User = require("../models/user.model");

const register = async (req, res) => {
  try {
    const newUser = new User({
      username: "test",
      email: "test",
      password: "test",
      country: "test",
    });
    await newUser.save();
    res.status(201).send("Registration successful!");
  } catch (error) {
    res.send(500).send("Something went wrong");
  }
};

module.exports = {
  register,
};
