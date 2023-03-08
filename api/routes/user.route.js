const express = require("express");
const router = express.Router();

const { deleteUser } = require("../controllers/user.controller");

router.delete("/:id", deleteUser);

module.exports = router;
