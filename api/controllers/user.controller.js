const User = require("../models/user.model");
const jwt = require("jsonwebtoken");
const deleteUser = async (req, res) => {
  const user = await User.findById(req.params.id);

  if (req.userId !== user._id.toString()) {
    return next(createError(403, "You are not authorized to delete this user"));
  }
  await User.findByIdAndDelete(req.params.id);
  res.status(200).send("User deleted");
};

module.exports = {
  deleteUser,
};
