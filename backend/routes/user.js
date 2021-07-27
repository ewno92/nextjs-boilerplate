const express = require("express");
const router = express.Router();
const { requireSignin, adminMiddleware } = require("../controllers/auth");
const { read } = require("../controllers/user");

router.get("/profile", requireSignin, adminMiddleware, read);

module.exports = router;
