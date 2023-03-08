const User = require("../models/user.model");
const jwt = require("jsonwebtoken");
const deleteUser = async (req, res) => {
  const user = await User.findById(req.params.id);
  const token = req.cookies.accessToken;
  if (!token) return res.status(401).send("Access denied");

  jwt.verify(token, process.env.JWT_KEY, async (err, payload) => {
    if (payload.id !== user._id.toString()) {
      return res.status(401).send("You can only delete your own account");
    }
    await User.findByIdAndDelete(req.params.id);
    res.status(200).send("User deleted");
  });
};

module.exports = {
  deleteUser,
};
