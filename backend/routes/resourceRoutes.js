const express = require("express");
const router = express.Router();

const authMiddleware = require("../middleware/AuthMiddleware");
const resourceController = require("../Controllers/resourceController");
const authMiddleware = require("../middleware/AuthMiddleware"); // lowercase m ✅
const resourceController = require("../Controllers/resourceController"); // Capital C ✅
const { getRecommendedResources } = require("../Controllers/resourceController");

router.get("/", resourceController.getAllResources);
// PROTECTED — Seller adds a resource
router.post("/", authMiddleware, resourceController.addResource);
router.get("/:id/recommend", getRecommendedResources);
// PROTECTED — Seller sees only their own resources
router.get("/my", authMiddleware, resourceController.getMyResources);

// PUBLIC — Single resource detail
router.get("/:id", resourceController.getResourceById);

// ✅ DELETE (FIXED)
router.delete("/:id", authMiddleware, resourceController.deleteResource);

module.exports = router;