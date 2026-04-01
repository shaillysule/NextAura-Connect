const express = require("express");
const router = express.Router();

const authMiddleware = require("../middleware/AuthMiddleware");
const resourceController = require("../Controllers/resourceController");

// PUBLIC — Users browse all available resources
router.get("/", resourceController.getAllResources);

// PROTECTED — Seller adds a resource
router.post("/", authMiddleware, resourceController.addResource);

// PROTECTED — Seller sees only their own resources
router.get("/my", authMiddleware, resourceController.getMyResources);

// PUBLIC — Single resource detail
router.get("/:id", resourceController.getResourceById);

// ✅ DELETE (FIXED)
router.delete("/:id", authMiddleware, resourceController.deleteResource);

module.exports = router;