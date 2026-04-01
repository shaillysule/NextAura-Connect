const express = require("express");
const router = express.Router();

const authMiddleware = require("../middleware/AuthMiddleware");
const resourceController = require("../Controllers/resourceController");

// PUBLIC — All resources
router.get("/", resourceController.getAllResources);

// PROTECTED — Seller adds a resource
router.post("/", authMiddleware, resourceController.addResource);

// PUBLIC — Recommendations
router.get("/:id/recommend", resourceController.getRecommendedResources);

// PROTECTED — Seller sees only their own resources
router.get("/my", authMiddleware, resourceController.getMyResources);

// PUBLIC — Single resource detail
router.get("/:id", resourceController.getResourceById);

// PROTECTED — Delete resource
router.delete("/:id", authMiddleware, resourceController.deleteResource);

module.exports = router;