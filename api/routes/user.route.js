const express = require("express");
const router = express.Router();
const verifyToken = require("../middleware/jwt");
const { deleteUser } = require("../controllers/user.controller");

router.delete("/:id", verifyToken, deleteUser);

module.exports = router;
