const express = require("express");
const router = express.Router();

const authMiddleware = require("../middleware/AuthMiddleware"); // lowercase m ✅
const resourceController = require("../Controllers/resourceController"); // Capital C ✅

// PUBLIC — Users browse all available resources
router.get("/", resourceController.getAllResources);

// PROTECTED — Seller adds a resource
router.post("/", authMiddleware, resourceController.addResource);

// PROTECTED — Seller sees only their own resources
// NOTE: /my must be BEFORE /:id — warna "my" ko id samajh lega!
router.get("/my", authMiddleware, resourceController.getMyResources);

// PUBLIC — Single resource detail (ResourceDetail page ke liye)
router.get("/:id", resourceController.getResourceById);

module.exports = router; // ✅ "s" typo removed