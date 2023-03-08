const express = require("express");
const router = express.Router();

const { deleteUser } = require("../controllers/user.controller");

router.get("/test", deleteUser);

module.exports = router;
