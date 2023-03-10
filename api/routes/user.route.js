const express = require("express");
const router = express.Router();
const verifyToken = require("../middleware/jwt");
const { deleteUser, getUser } = require("../controllers/user.controller");

router.delete("/:id", verifyToken, deleteUser);
router.get("/:id", verifyToken, getUser);
module.exports = router;
