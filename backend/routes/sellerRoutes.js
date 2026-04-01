const express = require("express");
const router = express.Router();

const authMiddleware = require("../middleware/AuthMiddleware");
const { getSellerStats } = require("../Controllers/sellerController");

router.get("/stats", authMiddleware, getSellerStats);

module.exports = router;