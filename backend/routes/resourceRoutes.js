const express = require("express");
const router = express.Router();

const authMiddleware = require("../middleware/AuthMiddleware");
const resourceController = require("../Controllers/resourceController");
const upload = require("../middleware/upload");

// PUBLIC
router.get("/", resourceController.getAllResources);

// PROTECTED (CREATE WITH IMAGE)
router.post("/", authMiddleware, upload.single("image"), resourceController.addResource);

// PUBLIC
router.get("/:id/recommend", resourceController.getRecommendedResources);

// PROTECTED
router.get("/my", authMiddleware, resourceController.getMyResources);

// PUBLIC
router.get("/:id", resourceController.getResourceById);

// PROTECTED
router.delete("/:id", authMiddleware, resourceController.deleteResource);

module.exports = router;